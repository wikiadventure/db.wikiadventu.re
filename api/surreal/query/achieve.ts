import type { OryUser } from "../../guard/orySession.ts";
import { db } from "../db.ts";

export async function achieve(user:OryUser, achievement:string) {
    const queryResult = await db.query(/* surrealql */`
        RELATE type::thing("user", $id)->achieve->type::thing("achievement", $achievement)
    `,
    { id: user.id, achievement }
    ) as [ never, AchieveError | {} ];
    return queryResult[1];
}

type AchieveError = { error: "Achievement already achieve." };
