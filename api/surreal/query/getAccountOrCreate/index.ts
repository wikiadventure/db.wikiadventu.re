import type { OryUser } from "../../../guard/orySession.ts";
import { db } from "../../db.ts";

export async function getAccount(user:OryUser) {
    const queryResult:any = await db.query<[never, Account]>(/* surrealql */`
        LET $user = fn::getUserOrCreate( type::thing("user", $id) , $name , $email );
        RETURN SELECT meta::id(id) as id, name, email FROM $user;
    `,
        user
    )
    return queryResult[1].result[0];
}

export type Account = {
    id: string,
    name: string,
    email: string
}