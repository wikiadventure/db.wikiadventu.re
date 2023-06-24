import { OryJwt } from "../../guard/oryJwt.ts";
import { db } from "../db.ts";

export async function achieve(token:OryJwt, achievement:string) {
    const queryResult = await db.query<[never,AchieveError|{}]>(/* surrealql */`
        LET $achieve = (SELECT * FROM achieve WHERE in = user:⟨${token.sid}⟩ && out = achievement:⟨${achievement}⟩)[0];
        RETURN IF $achieve IS NONE THEN {
            RETURN RELATE user:⟨${token.sid}⟩->achieve->achievement:⟨${achievement}⟩;
        } ELSE {
            RETURN { error: "Achievement already achieve." };
        } END;
        
    `);
    return queryResult[1];
}

type AchieveError = { error: "Achievement already achieve." };
