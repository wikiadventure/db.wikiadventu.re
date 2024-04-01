import type { OryUser } from "../../../guard/orySession.ts";
import { db } from "../../db.ts";

export async function getAccount(user:OryUser) {
    const queryResult = await db.query(/* surrealql */`
        LET $user = fn::getUserOrCreate( type::thing("user", $id) , $name , $email );
        RETURN (SELECT meta::id(id) as id, name, email FROM $user)[0];
    `,
        user
    ) as [never, {result: Account}];
    return queryResult[1].result!;
}

export type Account = {
    /**
     * Description for id.
     * @minLength 10
     */
    id: string,
    name: string,
    email: string
}