import type { MiddlewareHandler } from '../../types.js';
import '../../context.js';
declare module '../../context.js' {
    interface ContextVariableMap {
        jwtPayload: any;
    }
}
export declare const jwt: (options: {
    secret: string;
    cookie?: string;
    alg?: string;
}) => MiddlewareHandler;
