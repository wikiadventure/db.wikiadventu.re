import { Hono, hc } from "https://deno.land/x/hono@v3.3.1/mod.ts";
import { cors } from 'https://deno.land/x/hono@v3.3.1/middleware.ts';
import { serve } from "https://deno.land/std@0.182.0/http/server.ts";
import { getAccount } from "./surreal/query/getAccountOrCreate/index.ts";
import { getSixDegreeAccount } from "./surreal/query/getAccountOrCreate/six_degree.ts";
import { achieve } from "./surreal/query/achieve.ts";
import { guardOrySession } from "./guard/orySession.ts";
import { getLangFromHeaders } from "./utils/lang.ts";

const app = new Hono();

app.use("/*", cors({
    origin: (origin) => origin,
    allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
    allowHeaders: ["cookie"],
    credentials: true
}));

const route =
app
.get('/get-account', async c => {   
    const { user } = await guardOrySession(c);  
    return c.jsonT(await getAccount(user));
})
.get('/get-account/six-degree', async c => {   
    const { user } = await guardOrySession(c);
    return c.jsonT(await getSixDegreeAccount(user, getLangFromHeaders(c.req)));
})
.post("/achieve/:achievement", async c => { 
    const { achievement } = await c.req.param();
    const { user } = await guardOrySession(c);
    c.req
    return c.jsonT(await achieve(user, achievement));
});

const port = 9009;
serve(app.fetch, { port: port});

export type AppType = typeof route;


const client = hc<AppType>("");

client["get-account"]["six-degree"].$get()