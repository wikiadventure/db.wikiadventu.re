import { Hono } from "./deps/deno.land/x/hono@v3.3.1/mod.js";
declare const route: Hono<import("./deps/deno.land/x/hono@v3.3.1/types.js").Env, import("./deps/deno.land/x/hono@v3.3.1/utils/types.js").RemoveBlankRecord<import("./deps/deno.land/x/hono@v3.3.1/utils/types.js").RemoveBlankRecord<import("./deps/deno.land/x/hono@v3.3.1/types.js").Schema<"get", "/get-account", unknown, import("./surreal/query/getAccountOrCreate/index.js").Account> | import("./deps/deno.land/x/hono@v3.3.1/types.js").Schema<"get", "/get-account/six-degree", unknown, import("./surreal/query/getAccountOrCreate/six_degree.js").SixDegreeAccount>> | import("./deps/deno.land/x/hono@v3.3.1/types.js").Schema<"post", "/achieve/:achievement", unknown, import("./deps/deno.land/x/surrealdb@v0.8.0/src/types.js").QueryResult<{} | {
    error: "Achievement already achieve.";
}>>>, "/">;
export type AppType = typeof route;
export {};
