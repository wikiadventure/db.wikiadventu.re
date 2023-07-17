/// <reference types="node" />
import * as dntShim from "../../../../_dnt.shims.js";
import type { ExecutionContext } from './context.js';
import type { Router } from './router.js';
import type { Env, ErrorHandler, H, HandlerInterface, MiddlewareHandlerInterface, NotFoundHandler, OnHandlerInterface, MergePath, MergeSchemaPath } from './types.js';
import type { RemoveBlankRecord } from './utils/types.js';
interface RouterRoute {
    path: string;
    method: string;
    handler: H;
}
declare const Hono_base: new <E_1 extends Env = Env, S_1 = {}, BasePath_1 extends string = "">() => {
    delete: HandlerInterface<E_1, "delete", S_1, BasePath_1>;
    all: HandlerInterface<E_1, "all", S_1, BasePath_1>;
    get: HandlerInterface<E_1, "get", S_1, BasePath_1>;
    post: HandlerInterface<E_1, "post", S_1, BasePath_1>;
    put: HandlerInterface<E_1, "put", S_1, BasePath_1>;
    head: HandlerInterface<E_1, "head", S_1, BasePath_1>;
    options: HandlerInterface<E_1, "options", S_1, BasePath_1>;
    patch: HandlerInterface<E_1, "patch", S_1, BasePath_1>;
} & {
    on: OnHandlerInterface<E_1, S_1, BasePath_1>;
} & {
    use: MiddlewareHandlerInterface<E_1, S_1, BasePath_1>;
};
export declare class Hono<E extends Env = Env, S = {}, BasePath extends string = ''> extends Hono_base<E, S, BasePath> {
    readonly router: Router<H>;
    readonly strict: boolean;
    private _basePath;
    private path;
    routes: RouterRoute[];
    constructor(init?: Partial<Pick<Hono, 'router' | 'strict'>>);
    private clone;
    private notFoundHandler;
    private errorHandler;
    route<SubPath extends string, SubEnv extends Env, SubSchema, SubBasePath extends string>(path: SubPath, app: Hono<SubEnv, SubSchema, SubBasePath>): Hono<E, RemoveBlankRecord<MergeSchemaPath<SubSchema, SubPath> | S>, BasePath>;
    /** @deprecated
     * Use `basePath` instead of `route` with one argument.
     * The `route` with one argument has been removed in v4.
     */
    route<SubPath extends string>(path: SubPath): Hono<E, RemoveBlankRecord<S>, BasePath>;
    basePath<SubPath extends string>(path: SubPath): Hono<E, S, MergePath<BasePath, SubPath>>;
    onError(handler: ErrorHandler<E>): this;
    notFound(handler: NotFoundHandler<E>): this;
    showRoutes(): void;
    private addRoute;
    private matchRoute;
    private handleError;
    private dispatch;
    handleEvent: (event: FetchEvent) => dntShim.Response | Promise<dntShim.Response>;
    fetch: (request: dntShim.Request, Env?: E['Bindings'] | {}, executionCtx?: ExecutionContext) => dntShim.Response | Promise<dntShim.Response>;
    request: (input: dntShim.Request | string | URL, requestInit?: dntShim.RequestInit) => Promise<dntShim.Response>;
}
export {};
