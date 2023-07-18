import "../_dnt.polyfills.js";
export declare const db_wikiadventu_re: {
    "get-account": {
        $get: (args?: {} | undefined, options?: import("../deps/deno.land/x/hono@v3.3.1/mod.js").ClientRequestOptions | undefined) => Promise<import("../deps/deno.land/x/hono@v3.3.1/client/types.js").ClientResponse<import("../surreal/query/getAccountOrCreate/index.js").Account>>;
    };
} & {
    "get-account": {
        "six-degree": {
            $get: (args?: {} | undefined, options?: import("../deps/deno.land/x/hono@v3.3.1/mod.js").ClientRequestOptions | undefined) => Promise<import("../deps/deno.land/x/hono@v3.3.1/client/types.js").ClientResponse<import("../surreal/query/getAccountOrCreate/six_degree.js").SixDegreeAccount>>;
        };
    };
} & {
    achieve: {
        ":achievement": {
            $post: (args: {
                param: {
                    achievement: string;
                };
            }, options?: import("../deps/deno.land/x/hono@v3.3.1/mod.js").ClientRequestOptions | undefined) => Promise<import("../deps/deno.land/x/hono@v3.3.1/client/types.js").ClientResponse<import("../deps/deno.land/x/surrealdb@v0.8.0/src/types.js").QueryResult<{} | {
                error: "Achievement already achieve.";
            }>>>;
        };
    };
};
