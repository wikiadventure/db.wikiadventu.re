import { OryJwt } from "../../guard/oryJwt.ts";
import { db } from "../db.ts";

export async function getAccountOrCreate(token:OryJwt) {
    const queryResult = await db.query<[never, SurrealAccount]>(/* surrealql */`
        LET $account = (SELECT * FROM user:⟨${token.sid}⟩)[0];
        RETURN IF $account = NONE THEN {
            RETURN CREATE user CONTENT { name: "${token.username}", id: "${token.sid}", email: "${token.email}" };
        }
        ELSE {
            RETURN $account;
        }
        END;
    `);
    return queryResult[1].result;
}

export type SurrealAccount = {
    id: string,
    name: string,
    email: string
}