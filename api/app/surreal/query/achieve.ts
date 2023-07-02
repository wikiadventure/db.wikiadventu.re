import type { OryUser } from "../../guard/orySession.ts";
import { db } from "../db.ts";

export async function achieve(user:OryUser, achievement:string) {
    const queryResult = await db.query<[never,AchieveError|{}]>(/* surrealql */`
        LET $achieve = (SELECT * FROM achieve WHERE in = user:⟨$id⟩ && out = achievement:⟨$achievement⟩)[0];
        RETURN IF $achieve 
        IS NONE THEN {
            RETURN RELATE user:⟨$id⟩->achieve->achievement:⟨$achievement⟩;
        } ELSE {
            RETURN { error: "Achievement already achieve." };
        } END;
        
    `,
    { id: user.id, achievement }
    );
    return queryResult[1];
}

type AchieveError = { error: "Achievement already achieve." };
