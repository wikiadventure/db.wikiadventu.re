import { verify } from "https://deno.land/x/djwt@v2.8/mod.ts";
import { HTTPException } from "https://deno.land/x/hono@v3.1.8/http-exception.ts";
import type { Context } from "https://deno.land/x/hono@v3.1.8/mod.ts";
import { env } from "../env/index.ts";
import { ory } from "../ory/api.ts";
import { Session } from "https://deno.land/x/sacramentix_ory_client@v.1.1.39/index.ts";

export async function guardOrySession(c:Context) {
    const ory_session_cookie = Object.entries(c.req.cookie()??{}).find(([k,v])=>k.startsWith("ory_session"));
    if (ory_session_cookie == null) throw new HTTPException(401, { message: "The user is not authenticated" });
    const ory_session:Session = await fetch(env.ORY_BASE_PATH+"/sessions/whoami",{
            headers: c.req.headers,
        })
        .then(r=>r.json())
        .catch(e=>{throw new HTTPException(401, { message: "Could not validate the ory session" })});
    const user:OryUser = {
        id: ory_session.identity.id,
        name: ory_session.identity.traits.username,
        email: ory_session.identity.traits.email
    };
    return { ory_session, user };
}

export type OryUser = {
    id: string,
    name: string,
    email: string
}