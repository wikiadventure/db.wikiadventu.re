import * as dntShim from "../../../../../_dnt.shims.js";
export type BodyData = Record<string, string | dntShim.File>;
export declare function parseBody(r: dntShim.Request | dntShim.Response): Promise<BodyData>;
