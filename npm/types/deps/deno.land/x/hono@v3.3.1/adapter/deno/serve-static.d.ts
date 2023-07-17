import * as dntShim from "../../../../../../_dnt.shims.js";
import type { Context } from '../../context.js';
import type { Next } from '../../types.js';
export type ServeStaticOptions = {
    root?: string;
    path?: string;
    rewriteRequestPath?: (path: string) => string;
};
export declare const serveStatic: (options?: ServeStaticOptions) => (c: Context, next: Next) => Promise<dntShim.Response | undefined>;
