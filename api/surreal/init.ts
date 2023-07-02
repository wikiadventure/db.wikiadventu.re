import { env } from "../env/index.ts";
import { db } from "./db.ts";
import jwkToPem from "npm:jwk-to-pem@latest";

const publicKey = jwkToPem(env.ORY_JWT);

await db.query(/* surrealql */`
    DEFINE TABLE user SCHEMAFULL
        PERMISSIONS
            FOR select WHERE true,
            FOR create WHERE false,
            FOR update WHERE $scope == 'user_account' && id == $token.sid,
            FOR delete WHERE $scope == 'user_account' && id == $token.sid;

    DEFINE SCOPE user_account;

    DEFINE TOKEN ory_token ON SCOPE user_account TYPE RS256 VALUE '${publicKey}';

    DEFINE FIELD id ON TABLE user TYPE string;
    DEFINE FIELD name ON TABLE user TYPE string;

    DEFINE INDEX nameIndex ON TABLE user COLUMNS name UNIQUE;

    DEFINE TABLE achievement_difficulty;

    DEFINE TABLE achievement schemafull PERMISSIONS FOR select WHERE true;
    
    DEFINE FIELD name ON TABLE achievement TYPE string ;
    DEFINE FIELD display_name ON TABLE achievement TYPE string ;
    DEFINE FIELD description ON TABLE achievement TYPE string ;
    DEFINE FIELD difficulty ON TABLE achievement TYPE record(achievement_difficulty);

    DEFINE INDEX nameIndex ON TABLE achievement COLUMNS name UNIQUE;

    DEFINE TABLE achieve schemafull;

    DEFINE FIELD in ON TABLE achieve TYPE record(user)
        ASSERT $value.id == $token.sid;
    DEFINE FIELD out ON TABLE user TYPE record(achievement)
        ASSERT $value != null;

    -- DEFINE INDEX achieveUnique ON TABLE achieve FIELDS in,out UNIQUE;

`).then(console.log)