import { verify } from "https://deno.land/x/djwt@v2.8/mod.ts";
import { HTTPException } from "https://deno.land/x/hono@v3.1.8/http-exception.ts";
import type { Context } from "https://deno.land/x/hono@v3.1.8/mod.ts";
import { env } from "../env/index.ts";

const cryptoKey = await crypto.subtle.importKey("jwk",env.ORY_JWT, { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256'},false,["verify"]);

export type OryJwt = {
    DB: string;
    NS: string;
    SC: string;
    email: string;
    rat: number;
    sid: string;
    sub: string;
    tk: string;
    username: string;
};

export async function guardOryJwt(c:Context) {
    const bearer = c.req.header()["authorization"];
    if (bearer == null) throw new HTTPException(401, { message: "There is no Authorization bearer header." });

    const jwt = bearer.split("Bearer ")[1];
    if (jwt == null) throw new HTTPException(401, { message: "There is no valid jwt in Authorization bearer header." });

    return await verify(jwt, cryptoKey)
        .catch(e=>{
            console.log({error: e})
            throw new HTTPException(401, { message: "The jwt provided in Authorization bearer header is invalid." 
        })}) as OryJwt;
}