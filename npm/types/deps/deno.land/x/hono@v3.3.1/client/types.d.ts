/// <reference types="node" />
import * as dntShim from "../../../../../_dnt.shims.js";
import type { Hono } from '../hono.js';
import type { ValidationTargets } from '../types.js';
import type { RemoveBlankRecord } from '../utils/types.js';
type MethodName = `$${string}`;
type Endpoint = Record<MethodName, Data>;
type Data = {
    input: Partial<ValidationTargets> & {
        param?: Record<string, string>;
    };
    output: {};
};
export type ClientRequestOptions = {
    headers?: Record<string, string>;
    fetch?: typeof dntShim.fetch;
};
type ClientRequest<S extends Data> = {
    [M in keyof S]: S[M] extends {
        input: infer R;
        output: infer O;
    } ? RemoveBlankRecord<R> extends never ? (args?: {}, options?: ClientRequestOptions) => Promise<ClientResponse<O>> : (args: R, options?: ClientRequestOptions) => Promise<ClientResponse<O>> : never;
};
export interface ClientResponse<T> {
    ok: boolean;
    status: number;
    statusText: string;
    headers: dntShim.Headers;
    url: string;
    redirect(url: string, status: number): Response;
    clone(): Response;
    json(): Promise<T>;
    text(): Promise<string>;
    blob(): Promise<Blob>;
    formData(): Promise<dntShim.FormData>;
    arrayBuffer(): Promise<ArrayBuffer>;
}
export interface Response extends ClientResponse<unknown> {
}
export type Fetch<T> = (args?: InferRequestType<T>, opt?: ClientRequestOptions) => Promise<ClientResponse<InferResponseType<T>>>;
export type InferResponseType<T> = T extends (args: any | undefined) => Promise<ClientResponse<infer O>> ? O : never;
export type InferRequestType<T> = T extends (args: infer R) => Promise<ClientResponse<unknown>> ? NonNullable<R> : never;
type PathToChain<Path extends string, E extends Endpoint, Original extends string = ''> = Path extends `/${infer P}` ? PathToChain<P, E, Path> : Path extends `${infer P}/${infer R}` ? {
    [K in P]: PathToChain<R, E, Original>;
} : {
    [K in Path extends '' ? 'index' : Path]: ClientRequest<E extends Record<string, unknown> ? E[Original] : never>;
};
export type Client<T> = T extends Hono<any, infer S, any> ? S extends Record<infer K, Endpoint> ? K extends string ? PathToChain<K, S> : never : never : never;
export type Callback = (opts: CallbackOptions) => unknown;
interface CallbackOptions {
    path: string[];
    args: any[];
}
export type ObjectType<T = unknown> = {
    [key: string]: T;
};
export {};
