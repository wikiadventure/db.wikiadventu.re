import { Hono } from './hono.js';
declare global {
    interface ExecutionContext {
        waitUntil(promise: Promise<void>): void;
        passThroughOnException(): void;
    }
}
export type { Env, ErrorHandler, Handler, MiddlewareHandler, Next, NotFoundHandler, ValidationTargets, Input, TypedResponse, } from './types.js';
export type { Context, ContextVariableMap } from './context.js';
export type { HonoRequest } from './request.js';
export { Hono };
export { HTTPException } from './http-exception.js';
export { RegExpRouter } from './router/reg-exp-router/index.js';
export { TrieRouter } from './router/trie-router/index.js';
export { SmartRouter } from './router/smart-router/index.js';
export { PatternRouter } from './router/pattern-router/index.js';
export { LinearRouter } from './router/linear-router/index.js';
export { validator } from './validator/index.js';
export { hc } from './client/index.js';
export type { InferRequestType, InferResponseType, ClientRequestOptions } from './client/index.js';
