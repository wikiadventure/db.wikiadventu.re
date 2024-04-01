import { Surreal } from "surrealdb.node";
import { env } from "../env/index.ts";

export const db = new Surreal();

await db.connect(env.SURREAL_URL);

await db.signin({
    user: env.SURREAL_USER,
    pass: env.SURREAL_PASSWORD,
});

await db.use({
    ns: "account",
    db: "account"
});
