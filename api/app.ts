import { type Context, Hono } from "hono";
import { cors } from "hono/cors";
import { getAccount } from "./surreal/query/getAccountOrCreate/index.ts";
import { getSixDegreeAccount, six_degree_achivements_id } from "./surreal/query/getAccountOrCreate/six_degree.ts";
import { achieve } from "./surreal/query/achieve.ts";
import { guardOrySession } from "./guard/orySession.ts";
import { initTRPC } from "@trpc/server";
import { z } from "zod";
import { getLangFromHeaders } from "./utils/lang.ts";
import { trpcServer } from "@hono/trpc-server";

const app = new Hono();

app.use("/*", cors({
    origin: (origin:any) => origin,
    allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
    allowHeaders: ["cookie"],
    credentials: true
}));

const t = initTRPC.context<Context>().create()

const publicProcedure = t.procedure
const router = t.router


export const AccountProcedure = t.procedure.use( async (opts) => {
    opts.ctx
    return opts.next({
      ctx: {
        ...(await guardOrySession(opts.ctx as Context))
      },
    });
});

const trpcRouter = router({
    account: AccountProcedure.query( async ({ ctx }) => {
       return await getAccount(ctx.user);
    }),
    sixDegree: router({
        account: AccountProcedure.query( async ({ ctx }) => {
            return await getSixDegreeAccount(ctx.user, getLangFromHeaders(ctx.req));
        }),
    }),
    achieve: AccountProcedure
        .input( z.object({ achievement: z.enum(six_degree_achivements_id) }))
        .query( async ({ ctx, input }) => {
            return await achieve(ctx.user, input.achievement);
    })
});

app.use('/*', trpcServer({router: trpcRouter}));

const port = 9009;
export default { 
    port, 
    fetch: app.fetch, 
}

export type Db_wikiadventu_re_trpc_router = typeof trpcRouter
