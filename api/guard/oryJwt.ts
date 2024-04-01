import { decode } from "jsonwebtoken";
import { HTTPException } from "hono/http-exception";
import type { Context } from "hono";
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

    return await verifyJwt(jwt, cryptoKey)
        .catch(e=>{
            throw new HTTPException(401, { message: "The jwt provided in Authorization bearer header is invalid or expired." })
        }) as OryJwt;
}


async function verifyJwt(jwt: string, cryptoKey: CryptoKey) {
    // Decode the JWT without verifying
    const decodedJwt = decode(jwt, { complete: true });

    if (decodedJwt == null) throw new Error("Invalid or expired jwt.");

    // Get the signature from the JWT
    const signature = decodedJwt.signature;

    // Get the data from the JWT
    const data = decodedJwt.header + "." + decodedJwt.payload;

    // Verify the JWT
    const isVerified = await crypto.subtle.verify(
        {
            name: "RSASSA-PKCS1-v1_5",
        },
        cryptoKey, //from your key import function
        new TextEncoder().encode(signature), //ArrayBuffer of the signature
        new TextEncoder().encode(data) //ArrayBuffer of the data
    );

    if (!isVerified) throw new Error("Invalid or expired jwt.");
    // If the JWT is verified, return the decoded JWT
    return decodedJwt?.payload;
}