import { env } from "../../env/index.ts";
import { db } from "../db.ts";
import jwkToPem from "jwk-to-pem";
import { six_degree_achievements_creation_query } from "./sixdegree/Achievement.ts";

const publicKey = jwkToPem(env.ORY_JWT);

await db.query(/* surrealql */`
    REMOVE TABLE user;
    REMOVE TABLE achievement_difficulty;
    REMOVE TABLE game_tag;
    REMOVE TABLE achieve;
    REMOVE TABLE achievement;
    REMOVE TABLE achievement_content;
    REMOVE TABLE lang;

    -- -- game_tag to describe all game and make relation -- --

    DEFINE TABLE game_tag;

        CREATE game_tag:daily;
        CREATE game_tag:six_degree;
        CREATE game_tag:original;


    -- -- lang -- --
    DEFINE TABLE lang schemafull;

        DEFINE FIELD name ON TABLE Lang TYPE string;
        
        CREATE lang:fr CONTENT { name: "français" };
        CREATE lang:en CONTENT { name: "english" };

    -- -- SCOPE & TOKEN -- --

    DEFINE SCOPE user_account;

    DEFINE TOKEN ory_token ON SCOPE user_account TYPE RS256 VALUE '${publicKey}';

    -- -- user TABLE & game specific data -- --

    DEFINE TABLE user SCHEMAFULL PERMISSIONS FOR select WHERE true;
        DEFINE FIELD name  ON TABLE user TYPE string;
            DEFINE INDEX nameIndex ON TABLE user COLUMNS name UNIQUE;
        DEFINE FIELD email ON TABLE user TYPE string ASSERT is::email($value) PERMISSIONS FOR select WHERE false;

        -- -- six_degree data -- --

        DEFINE FIELD six_degree                     ON TABLE user TYPE object VALUE $value ?? {};
            -- DEFINE FIELD six_degree.highest_degree      ON TABLE user TYPE int;
            DEFINE FIELD six_degree.query_count         ON TABLE user TYPE int VALUE $value ?? 0;
            -- DEFINE FIELD six_degree.highest_path_count  ON TABLE user TYPE int;

    -- -- achievement_difficulty we can use to filter achievement -- --

    DEFINE TABLE achievement_difficulty;

        CREATE achievement_difficulty:easy;
        CREATE achievement_difficulty:medium;
        CREATE achievement_difficulty:hard;
        CREATE achievement_difficulty:secret;
        CREATE achievement_difficulty:dev;

    -- -- achievement have a difficulty, a game -- --
    -- -- and content (title and description) in a edge table achievement_content that is translate in all lang -- --

    DEFINE TABLE achievement schemafull;
    
        DEFINE FIELD difficulty ON TABLE achievement TYPE record(achievement_difficulty);
        DEFINE FIELD game_tag   ON TABLE achievement TYPE record(game_tag);

    -- -- achieve is an edge table linking a player and achievement -- --

    DEFINE TABLE achieve;

        -- DEFINE FIELD in   ON TABLE achieve TYPE record(user);
        -- DEFINE FIELD out  ON TABLE achieve TYPE record(achievement);
        -- DEFINE FIELD date ON TABLE achieve TYPE datetime;
            DEFINE EVENT add_date ON TABLE achieve WHEN $before == NONE THEN (
                UPDATE $after SET date = time::now()
            );

        DEFINE INDEX unique_achievement
            ON TABLE achieve 
            COLUMNS in, out UNIQUE;

    -- -- achievement_content describe the content of an achievement in a specific language -- --

    DEFINE TABLE achievement_content;

        -- DEFINE FIELD in          ON TABLE achievement_content TYPE record(achievement);
        -- DEFINE FIELD out         ON TABLE achievement_content TYPE record(Lang);
        -- DEFINE FIELD title       ON TABLE achievement_content TYPE string;
        -- DEFINE FIELD description ON TABLE achievement_content TYPE string;

    -- -- FUNCTION -- --
    
    -- This function take an array of achievement_content
    -- And an array of language by order of preference
    -- fn::langFallback($achievement_contents, [lang:fr,lang:en]) will return $achievement_content in french if it exist or in english or in any language that remain
    -- return one achievement_content
    DEFINE FUNCTION fn::langFallback(
        $achievement_content: array,    -- array<record<contentIn>>
        $lang: array                    -- array<record<Lang>>
    ) {
        LET $result = (SELECT * FROM $achievement_content WHERE out == $lang[0])[0];
        LET $langRemain = array::remove($lang, 0);
        RETURN IF $result != NONE THEN {
            RETURN $result;
        } ELSE IF array::len($langRemain) != 0 THEN {
            RETURN fn::langFallback($achievement_content, $langRemain);
        } ELSE {
            RETURN $achievement_content[0];
        } END;
    };

    -- Create an account if it doesn't exist or update it otherwise
    -- return the account
    DEFINE FUNCTION fn::getUserOrCreate(
        $id: string,
        $name: string,
        $email: string
    ) {
        RETURN (INSERT INTO user [{ id: type::thing("user", $id) , name: $name , email: $email }] ON DUPLICATE KEY UPDATE name = $name, email = $email)[0];
    };

    -- -- Add all six_degree achievement -- --

    ${six_degree_achievements_creation_query}

`).then(console.log)

// -- ${six_degree_achievements_creation_query}