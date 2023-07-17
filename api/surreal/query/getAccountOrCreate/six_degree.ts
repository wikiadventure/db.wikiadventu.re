import type { OryUser } from "../../../guard/orySession.ts";
import { Lang } from "../../../utils/lang.ts";
import { db } from "../../db.ts";
import { Account } from "./index.ts";

export async function getSixDegreeAccount(user:OryUser, lang:Lang) {
    const langFallback = lang == "en" ? `[lang:en]` : `[lang:${lang},lang:en]`;
    const queryResult:any = await db.query<[never, SixDegreeAccount]>(/* surrealql */`
        LET $user = fn::getUserOrCreate( type::thing("user", $id) , $name , $email );
        LET $all_achievement = SELECT VALUE fn::langFallback(->achievement_content, ${langFallback}) FROM achievement WHERE game_tag == game_tag:six_degree;
        LET $user_achievement = SELECT title, description, meta::id(out) as lang, meta::id(in) as id, (SELECT VALUE date FROM $uid->achieve WHERE out = $parent.in)[0] as achieved FROM $all_achievement;
        RETURN SELECT meta::id(id) as id, name, email, $user_achievement as six_degree.achievements FROM $user;
    `,
        user
    )
    return queryResult[1].result[0];
}

export type SixDegreeAccount = Account & {
    six_degree: {
        highest_degree?:number,
        query_count:number,
        highest_path_count?:number,
        achievements: {
            achieved: string | null,
            title: string
            description: string,
            id: string,
            lang: string,
        }[]
    }
}