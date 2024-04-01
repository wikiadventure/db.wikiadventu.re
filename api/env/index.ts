import { type ZodError, z } from "zod";

const envSchema = z.object({
    SURREAL_URL:        z.string().url(),
    SURREAL_USER:       z.string().min(1),
    SURREAL_PASSWORD:   z.string().min(1),
    ORY_BASE_PATH:      z.string().url(),
    // ORY_ACCESS_TOKEN:   z.string().min(1),
    ORY_JWT:            z.string()
                            .transform(zStringToJson)
                            .pipe(z.object({
                                use: z.literal("sig"),
                                kty: z.literal("RSA"),
                                kid: z.string().min(1),
                                alg: z.literal("RS256"),
                                n:   z.string().min(1),
                                e:   z.string().min(1)
                            }))

}).catchall(z.string());

export const env = Object.freeze( 
(() => {
    try {
        return envSchema.parse(process.env);
    } catch(error) {
        const e = error as ZodError;
        console.error(
            "Env config is incorrect: \n",
            e.errors.map(v=>` - ${v.path.join(".")} field ${v.message}`).join("\n"),
            "\nMake sure to fill the env with all the required fields."
        );
        process.exit(1);
    }
})());

export function zStringToJson(str:string, ctx:z.RefinementCtx) {
    try {
        return JSON.parse(str);
    } catch(error) {
        ctx.addIssue( { code: 'custom', message: 'Invalid JSON' } )
        return z.NEVER
    }
}

