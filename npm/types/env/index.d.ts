import { z } from "../deps/deno.land/x/zod@v3.21.4/mod.js";
import "../deps/deno.land/std@0.192.0/dotenv/load.js";
export declare const env: Readonly<z.objectOutputType<{
    SURREAL_URL: z.ZodString;
    SURREAL_USER: z.ZodString;
    SURREAL_PASSWORD: z.ZodString;
    ORY_BASE_PATH: z.ZodString;
    ORY_JWT: z.ZodPipeline<z.ZodEffects<z.ZodString, any, string>, z.ZodObject<{
        use: z.ZodLiteral<"sig">;
        kty: z.ZodLiteral<"RSA">;
        kid: z.ZodString;
        alg: z.ZodLiteral<"RS256">;
        n: z.ZodString;
        e: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        use: "sig";
        e: string;
        n: string;
        alg: "RS256";
        kty: "RSA";
        kid: string;
    }, {
        use: "sig";
        e: string;
        n: string;
        alg: "RS256";
        kty: "RSA";
        kid: string;
    }>>;
}, z.ZodString, "strip">>;
export declare function zStringToJson(str: string, ctx: z.RefinementCtx): any;
