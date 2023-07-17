/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import * as dntShim from "../../../../_dnt.shims.js";
import type { Input, InputToDataByTarget, ParamKeys, ParamKeyToRecord, RemoveQuestion, UndefinedIfHavingQuestion, ValidationTargets } from './types.js';
import type { BodyData } from './utils/body.js';
import type { Cookie } from './utils/cookie.js';
import type { UnionToIntersection } from './utils/types.js';
export declare class HonoRequest<P extends string = '/', I extends Input['out'] = {}> {
    raw: dntShim.Request;
    private paramData;
    private validatedData;
    path: string;
    constructor(request: dntShim.Request, path?: string, paramData?: Record<string, string> | undefined);
    param(key: RemoveQuestion<ParamKeys<P>>): UndefinedIfHavingQuestion<ParamKeys<P>>;
    param(): UnionToIntersection<ParamKeyToRecord<ParamKeys<P>>>;
    query(key: string): string | undefined;
    query(): Record<string, string>;
    queries(key: string): string[] | undefined;
    queries(): Record<string, string[]>;
    header(name: string): string | undefined;
    header(): Record<string, string>;
    cookie(key: string): string | undefined;
    cookie(): Cookie;
    parseBody(): Promise<BodyData>;
    json<T = any>(): Promise<T>;
    text(): Promise<string>;
    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<dntShim.Blob>;
    formData(): Promise<dntShim.FormData>;
    addValidatedData(target: keyof ValidationTargets, data: {}): void;
    valid<T extends keyof ValidationTargets = I extends Record<infer R, unknown> ? R extends keyof ValidationTargets ? R : never : never>(target: T): InputToDataByTarget<I, T>;
    valid(): never;
    get url(): string;
    get method(): string;
    get headers(): dntShim.Headers;
    get redirect(): import("undici").RequestRedirect;
    get body(): import("stream/web").ReadableStream<any> | null;
    get bodyUsed(): boolean;
    get cache(): import("undici").RequestCache;
    get credentials(): import("undici").RequestCredentials;
    get integrity(): string;
    get keepalive(): boolean;
    get mode(): import("undici").RequestMode;
    get referrer(): any;
    get refererPolicy(): string;
    get signal(): AbortSignal;
}
