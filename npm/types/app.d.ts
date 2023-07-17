import { Hono } from "./deps/deno.land/x/hono@v3.1.8/mod.js";
declare const route: Hono<import("./deps/deno.land/x/hono@v3.1.8/types.js").Env, import("./deps/deno.land/x/hono@v3.1.8/utils/types.js").RemoveBlankRecord<import("./deps/deno.land/x/hono@v3.1.8/utils/types.js").RemoveBlankRecord<import("./deps/deno.land/x/hono@v3.1.8/types.js").Schema<"get", "/get-account", unknown, never> | import("./deps/deno.land/x/hono@v3.1.8/types.js").Schema<"get", "/get-account/six-degree", unknown, never>> | import("./deps/deno.land/x/hono@v3.1.8/types.js").Schema<"post", "/achieve/:achievement", unknown, import("./deps/deno.land/x/surrealdb@v0.8.0/src/types.js").QueryResult<{} | {
    error: "Achievement already achieve.";
}>>>, "">;
export type AppType = typeof route;
export {};
