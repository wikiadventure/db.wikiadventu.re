import type { OryUser } from "../../guard/orySession.ts";
import { db } from "../db.ts";

export async function getAccountOrCreate(user:OryUser) {
    const queryResult = await db.query<[never, SurrealAccount]>(/* surrealql */`
        LET $account = (SELECT * FROM user:⟨$id⟩)[0];
        RETURN IF $account = NONE THEN {
            RETURN CREATE user CONTENT { name: $name, id: id, email: $email };
        }
        ELSE {
            RETURN $account;
        }
        END;
    `,
    user
    );
    return queryResult[1].result;
}

export type SurrealAccount = {
    id: string,
    name: string,
    email: string
}