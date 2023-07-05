import type { OryUser } from "../../guard/orySession.ts";
import { db } from "../db.ts";

export async function getAccountOrCreate(user:OryUser) {
    const queryResult:any = await db.query<[never, SurrealAccount]>(/* surrealql */`
        LET $account = (SELECT * FROM $uid)[0];
        RETURN IF $account == null THEN {
            RETURN CREATE $uid CONTENT { name: $name, email: $email };
        }
        ELSE {
            RETURN UPDATE $uid CONTENT { name: $name, email: $email };
        }
        END;
    `,
    {
        ...user,
        uid: `user:⟨${user.id}⟩`
    }
    )
    return queryResult[1].result;
}

export type SurrealAccount = {
    id: string,
    name: string,
    email: string
}