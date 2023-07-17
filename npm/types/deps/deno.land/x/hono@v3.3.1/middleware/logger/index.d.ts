import type { MiddlewareHandler } from '../../types.js';
type PrintFunc = (str: string, ...rest: string[]) => void;
export declare const logger: (fn?: PrintFunc) => MiddlewareHandler;
export {};
