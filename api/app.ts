import { Hono } from "https://deno.land/x/hono@v3.1.8/mod.ts";
import { cors } from 'https://deno.land/x/hono@v3.1.8/middleware.ts';
import { serve } from "https://deno.land/std@0.182.0/http/server.ts";
import { getAccountOrCreate } from "./surreal/query/getAccountOrCreate.ts";
import { achieve } from "./surreal/query/achieve.ts";
import { guardOrySession } from "./guard/orySession.ts";

const app = new Hono();

app.use("/*", cors());

const route =
app
.get('/get-account', async c => {   
    const { user } = await guardOrySession(c);  
    return c.jsonT(await getAccountOrCreate(user));
})
.post("/achieve/:achievement", async c => { 
    const { achievement } = await c.req.param();
    const { user } = await guardOrySession(c);
    return c.jsonT(await achieve(user, achievement));
})


const port = 9009;
serve(app.fetch, { port: port});

export type AppType = typeof route
