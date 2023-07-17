import { Hono } from "./deps/deno.land/x/hono@v3.3.1/mod.js";
declare const route: Hono<import("./deps/deno.land/x/hono@v3.3.1/types.js").Env, import("./deps/deno.land/x/hono@v3.3.1/utils/types.js").RemoveBlankRecord<import("./deps/deno.land/x/hono@v3.3.1/utils/types.js").RemoveBlankRecord<import("./deps/deno.land/x/hono@v3.3.1/types.js").Schema<"get", "/get-account", unknown, {}> | import("./deps/deno.land/x/hono@v3.3.1/types.js").Schema<"get", "/get-account/six-degree", unknown, {}>> | import("./deps/deno.land/x/hono@v3.3.1/types.js").Schema<"post", "/achieve/:achievement", unknown, {}>>, "/">;
export type AppType = typeof route;
export {};
