import type { Context } from "../deps/deno.land/x/hono@v3.3.1/mod.js";
import { Session } from "../deps/deno.land/x/sacramentix_ory_client@v.1.1.39/index.js";
export declare function guardOrySession(c: Context): Promise<{
    ory_session: Session;
    user: OryUser;
}>;
export type OryUser = {
    id: string;
    name: string;
    email: string;
};
