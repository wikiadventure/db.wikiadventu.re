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

// await db.query(/* surrealql */`
// DEFINE TABLE people SCHEMALESS;
// DEFINE TABLE country SCHEMALESS;

// DEFINE TABLE liveIn SCHEMALESS;

// DEFINE INDEX unique_country_live
//     ON TABLE liveIn 
//     COLUMNS in, out UNIQUE;

// CREATE people:sacra;
// CREATE people:benji;
// CREATE people:thibat;

// CREATE country:france;
// CREATE country:demacia;
// CREATE country:zoo;

// RELATE person:sacra->liveIn->country:france;
// RELATE person:thibat->liveIn->country:demacia;
// RELATE person:benji->liveIn->country:zoo;

// RELATE person:benji->liveIn->country:zoo;
// RELATE person:benji->liveIn->country:demacia;

// SELECT * from liveIn;

// REMOVE TABLE people;
// REMOVE TABLE country;
// REMOVE TABLE liveIn;
// REMOVE INDEX unique_country_live ON TABLE liveIn;

// `).then(console.log)