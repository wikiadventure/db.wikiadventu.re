import * as dntShim from "../../../../_dnt.shims.js";
import type { StatusCode } from './utils/http-status.js';
type HTTPExceptionOptions = {
    res?: dntShim.Response;
    message?: string;
};
export declare class HTTPException extends Error {
    readonly res?: dntShim.Response;
    readonly status: StatusCode;
    constructor(status?: StatusCode, options?: HTTPExceptionOptions);
    getResponse(): dntShim.Response;
}
export {};
