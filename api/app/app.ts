import { Hono } from "https://deno.land/x/hono@v3.1.8/mod.ts";
import { serve } from "https://deno.land/std@0.182.0/http/server.ts";
import { guardOryJwt } from "./guard/oryJwt.ts";
import { getAccountOrCreate } from "./surreal/query/getAccountOrCreate.ts";
import { achieve } from "./surreal/query/achieve.ts";

const app = new Hono();

const route =
app
.get('/get-account', async c => { 
    
    const token = await guardOryJwt(c);
    
    return c.jsonT(await getAccountOrCreate(token));
})
.post("/achieve/:achievement", async c => { 
    const { achievement } = await c.req.param();
    const token = await guardOryJwt(c);
    return c.jsonT(await achieve(token, achievement));
})

const port = 9009;
serve(app.fetch, { port: port});

export type AppType = typeof route
