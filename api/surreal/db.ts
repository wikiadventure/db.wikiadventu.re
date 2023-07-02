import Surreal from "https://deno.land/x/surrealdb@v0.8.0/mod.ts";
import { env } from "../env/index.ts";

export const db = new Surreal(env.SURREAL_URL);

await db.signin({
    user: env.SURREAL_USER,
    pass: env.SURREAL_PASSWORD,
});

await db.use({
    ns: "account",
    db: "account"
});
