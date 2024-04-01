
import { env } from "../env/index.ts";
import type { Session } from "@ory/client-fetch";
import { TRPCError } from "@trpc/server";
import type { Context } from "hono";
import { getCookie } from "hono/cookie";

export async function guardOrySession(c:Context<any,any,{}>) {
    const ory_session_cookie = Object.entries(getCookie(c)??{}).find(([k,v])=>k.startsWith("ory_session"));
    if (ory_session_cookie == null) throw new TRPCError({ code: "UNAUTHORIZED", message: "The user is not authenticated.", cause: "ory_session cookie missing." });
    const ory_session = await fetch(env.ORY_BASE_PATH+"/sessions/whoami",{
            headers: c.req.raw.headers,
        })
        .then(r=>r.json() as unknown as Session)
        .catch(e=>{throw new TRPCError({ code: "UNAUTHORIZED", message: "Could not validate the session cookie.", cause: "ory_session cookie is invalid." })});
    const user:OryUser = {
        id: ory_session.identity?.id ?? "",
        name: ory_session.identity?.traits.username,
        email: ory_session.identity?.traits.email
    };
    return { ory_session, user };
}

export type OryUser = {
    id: string,
    name: string,
    email: string
}