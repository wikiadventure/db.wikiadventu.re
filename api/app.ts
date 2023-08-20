import { Hono, hc } from "https://deno.land/x/hono@v3.3.1/mod.ts";
import { cors } from "https://deno.land/x/hono@v3.3.1/middleware.ts";
import { z } from "https://esm.sh/zod@3.22.2";
import { zValidator } from "https://esm.sh/@hono/zod-validator@0.1.8";
import { serve } from "https://deno.land/std@0.182.0/http/server.ts";
import { getAccount } from "./surreal/query/getAccountOrCreate/index.ts";
import { getSixDegreeAccount, six_degree_achivements_id } from "./surreal/query/getAccountOrCreate/six_degree.ts";
import { achieve } from "./surreal/query/achieve.ts";
import { guardOrySession } from "./guard/orySession.ts";
import { getLangFromHeaders } from "./utils/lang.ts";

const app = new Hono();

app.use("/*", cors({
    origin: (origin:any) => origin,
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
.post("/achieve/:achievement" , zValidator('param', z.object({
    achievement: z.enum(six_degree_achivements_id)
})) as any, async c => {
    const { achievement } = await c.req.param();
    const { user } = await guardOrySession(c);
    return c.jsonT(await achieve(user, achievement));
});

const port = 9009;
serve(app.fetch, { port: port});

export type AppType = typeof route;
 