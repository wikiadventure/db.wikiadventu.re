import * as dntShim from "../../../../_dnt.shims.js";
import type { Context } from './context.js';
import type { Hono } from './hono.js';
import type { UnionToIntersection, RemoveBlankRecord } from './utils/types.js';
export type Bindings = Record<string, unknown>;
export type Variables = Record<string, unknown>;
export type Env = {
    Bindings?: Bindings;
    Variables?: Variables;
};
export type Next = () => Promise<void>;
export type Input = {
    in?: Partial<ValidationTargets>;
    out?: Partial<{
        [K in keyof ValidationTargets]: unknown;
    }>;
};
export type Handler<E extends Env = any, P extends string = any, I extends Input = Input, O = {}> = (c: Context<E, P, I>, next: Next) => dntShim.Response | Promise<dntShim.Response | TypedResponse<O>> | TypedResponse<O>;
export type MiddlewareHandler<E extends Env = any, P extends string = any, I extends Input = {}> = (c: Context<E, P, I>, next: Next) => Promise<dntShim.Response | void>;
export type H<E extends Env = any, P extends string = any, I extends Input = {}, O = {}> = Handler<E, P, I, O> | MiddlewareHandler<E, P, I>;
export type NotFoundHandler<E extends Env = any> = (c: Context<E>) => dntShim.Response | Promise<dntShim.Response>;
export type ErrorHandler<E extends Env = any> = (err: Error, c: Context<E>) => dntShim.Response | Promise<dntShim.Response>;
export interface HandlerInterface<E extends Env = Env, M extends string = any, S = {}, BasePath extends string = ''> {
    <I extends Input = {}, O = {}>(...handlers: [H<E, ExtractKey<S>, I, O>, H<E, ExtractKey<S>, I, O>]): Hono<E, RemoveBlankRecord<S | Schema<M, ExtractKey<S>, I['in'], O>>, BasePath>;
    <P extends string, O = {}, I extends Input = {}, I2 extends Input = I, I3 extends Input = I & I2>(...handlers: [H<E, ExtractKey<S>, I, O>, H<E, ExtractKey<S>, I2, O>, H<E, ExtractKey<S>, I3, O>]): Hono<E, RemoveBlankRecord<S | Schema<M, ExtractKey<S>, I3['in'], O>>, BasePath>;
    <P extends string, O = {}, I extends Input = {}, I2 extends Input = I, I3 extends Input = I & I2, I4 extends Input = I2 & I3>(...handlers: [
        H<E, ExtractKey<S>, I, O>,
        H<E, ExtractKey<S>, I2, O>,
        H<E, ExtractKey<S>, I3, O>,
        H<E, ExtractKey<S>, I4, O>
    ]): Hono<E, RemoveBlankRecord<S | Schema<M, ExtractKey<S>, I4['in'], O>>, BasePath>;
    <P extends string, O = {}, I extends Input = {}, I2 extends Input = I, I3 extends Input = I & I2, I4 extends Input = I2 & I3, I5 extends Input = I3 & I4>(...handlers: [
        H<E, ExtractKey<S>, I, O>,
        H<E, ExtractKey<S>, I2, O>,
        H<E, ExtractKey<S>, I3, O>,
        H<E, ExtractKey<S>, I4, O>,
        H<E, ExtractKey<S>, I5, O>
    ]): Hono<E, RemoveBlankRecord<S | Schema<M, ExtractKey<S>, I5['in'], O>>, BasePath>;
    <I extends Input = {}, O = {}>(...handlers: Handler<E, ExtractKey<S>, I, O>[]): Hono<E, RemoveBlankRecord<S | Schema<M, ExtractKey<S>, I['in'], O>>, BasePath>;
    <P extends string, O = {}, I extends Input = {}>(path: P, ...handlers: [H<E, P, I, O>, H<E, P, I, O>]): Hono<E, RemoveBlankRecord<S | Schema<M, MergePath<BasePath, P>, I['in'], O>>, BasePath>;
    <P extends string, O = {}, I extends Input = {}, I2 extends Input = I, I3 extends Input = I & I2>(path: P, ...handlers: [
        H<E, MergePath<BasePath, P>, I, O>,
        H<E, MergePath<BasePath, P>, I2, O>,
        H<E, MergePath<BasePath, P>, I3, O>
    ]): Hono<E, RemoveBlankRecord<S | Schema<M, MergePath<BasePath, P>, I3['in'], O>>, BasePath>;
    <P extends string, O = {}, I extends Input = {}, I2 extends Input = I, I3 extends Input = I & I2, I4 extends Input = I2 & I3>(path: P, ...handlers: [
        H<E, MergePath<BasePath, P>, I, O>,
        H<E, MergePath<BasePath, P>, I2, O>,
        H<E, MergePath<BasePath, P>, I3, O>,
        H<E, MergePath<BasePath, P>, I4, O>
    ]): Hono<E, RemoveBlankRecord<S | Schema<M, MergePath<BasePath, P>, I4['in'], O>>, BasePath>;
    <P extends string, O = {}, I extends Input = {}, I2 extends Input = I, I3 extends Input = I & I2, I4 extends Input = I2 & I3, I5 extends Input = I3 & I4>(path: P, ...handlers: [
        H<E, MergePath<BasePath, P>, I, O>,
        H<E, MergePath<BasePath, P>, I2, O>,
        H<E, MergePath<BasePath, P>, I3, O>,
        H<E, MergePath<BasePath, P>, I4, O>,
        H<E, MergePath<BasePath, P>, I5, O>
    ]): Hono<E, RemoveBlankRecord<S | Schema<M, MergePath<BasePath, P>, I5['in'], O>>, BasePath>;
    <P extends string, I extends Input = {}, O = {}>(path: P, ...handlers: H<E, MergePath<BasePath, P>, I, O>[]): Hono<E, RemoveBlankRecord<S | Schema<M, MergePath<BasePath, P>, I['in'], O>>, BasePath>;
}
export interface MiddlewareHandlerInterface<E extends Env = Env, S = {}, BasePath extends string = '/'> {
    (...handlers: MiddlewareHandler<E, MergePath<BasePath, ExtractKey<S>>>[]): Hono<E, S, BasePath>;
    <P extends string>(path: P, ...handlers: MiddlewareHandler<E, MergePath<BasePath, P>>[]): Hono<E, S, BasePath>;
}
export interface OnHandlerInterface<E extends Env = Env, S = {}, BasePath extends string = '/'> {
    <M extends string, P extends string, O = {}, I extends Input = {}>(method: M, path: P, ...handlers: [H<E, MergePath<BasePath, P>, I, O>, H<E, MergePath<BasePath, P>, I, O>]): Hono<E, RemoveBlankRecord<S | Schema<M, MergePath<BasePath, P>, I['in'], O>>, BasePath>;
    <M extends string, P extends string, O = {}, I extends Input = {}, I2 extends Input = I, I3 extends Input = I & I2>(method: M, path: P, ...handlers: [
        H<E, MergePath<BasePath, P>, I, O>,
        H<E, MergePath<BasePath, P>, I2, O>,
        H<E, MergePath<BasePath, P>, I3, O>
    ]): Hono<E, RemoveBlankRecord<S | Schema<M, MergePath<BasePath, P>, I3['in'], O>>, BasePath>;
    <M extends string, P extends string, O = {}, I extends Input = {}, I2 extends Input = I, I3 extends Input = I & I2, I4 extends Input = I2 & I3>(method: M, path: P, ...handlers: [
        H<E, MergePath<BasePath, P>, I, O>,
        H<E, MergePath<BasePath, P>, I2, O>,
        H<E, MergePath<BasePath, P>, I3, O>,
        H<E, MergePath<BasePath, P>, I4, O>
    ]): Hono<E, RemoveBlankRecord<S | Schema<M, MergePath<BasePath, P>, I4['in'], O>>, BasePath>;
    <M extends string, P extends string, O = {}, I extends Input = {}, I2 extends Input = I, I3 extends Input = I & I2, I4 extends Input = I2 & I3, I5 extends Input = I3 & I4>(method: M, path: P, ...handlers: [
        H<E, MergePath<BasePath, P>, I, O>,
        H<E, MergePath<BasePath, P>, I2, O>,
        H<E, MergePath<BasePath, P>, I3, O>,
        H<E, MergePath<BasePath, P>, I4, O>,
        H<E, MergePath<BasePath, P>, I5, O>
    ]): Hono<E, S | Schema<M, MergePath<BasePath, P>, I5['in'], O>, BasePath>;
    <M extends string, P extends string, O extends {} = {}, I extends Input = {}>(method: M, path: P, ...handlers: H<E, MergePath<BasePath, P>, I, O>[]): Hono<E, RemoveBlankRecord<S | Schema<M, MergePath<BasePath, P>, I['in'], O>>, BasePath>;
    <P extends string, O extends {} = {}, I extends Input = {}>(methods: string[], path: P, ...handlers: H<E, MergePath<BasePath, P>, I, O>[]): Hono<E, RemoveBlankRecord<S | Schema<string, MergePath<BasePath, P>, I['in'], O>>, BasePath>;
}
type ExtractKey<S> = S extends Record<infer Key, unknown> ? Key extends string ? Key : never : string;
export type Schema<M extends string, P extends string, I extends Input['in'], O> = {
    [K in P]: AddDollar<{
        [K2 in M]: {
            input: unknown extends I ? AddParam<{}, P> : AddParam<I, P>;
            output: unknown extends O ? {} : O;
        };
    }>;
};
export type AddParam<I, P extends string> = ParamKeys<P> extends never ? I : I & {
    param: UnionToIntersection<ParamKeyToRecord<ParamKeys<P>>>;
};
export type AddDollar<T> = T extends Record<infer K, infer R> ? K extends string ? {
    [MethodName in `$${Lowercase<K>}`]: R;
} : never : never;
export type MergeSchemaPath<S, P extends string> = S extends Record<infer Key, infer T> ? Key extends string ? Record<MergePath<P, Key>, T> : never : never;
export type MergePath<A extends string, B extends string> = A extends '' ? B : A extends '/' ? B : A extends `${infer P}/` ? B extends `/${infer Q}` ? `${P}/${Q}` : `${P}/${B}` : B extends `/${infer Q}` ? Q extends '' ? A : `${A}/${Q}` : `${A}/${B}`;
export type TypedResponse<T = unknown> = {
    response: dntShim.Response | Promise<dntShim.Response>;
    data: T;
    format: 'json';
};
export type ValidationTargets = {
    json: any;
    form: Record<string, string | dntShim.File>;
    query: Record<string, string | string[]>;
    queries: Record<string, string[]>;
    param: Record<string, string>;
};
type ParamKeyName<NameWithPattern> = NameWithPattern extends `${infer Name}{${infer _Pattern}` ? Name : NameWithPattern;
type ParamKey<Component> = Component extends `:${infer NameWithPattern}` ? ParamKeyName<NameWithPattern> : never;
export type ParamKeys<Path> = Path extends `${infer Component}/${infer Rest}` ? ParamKey<Component> | ParamKeys<Rest> : ParamKey<Path>;
export type ParamKeyToRecord<T extends string> = T extends `${infer R}?` ? Record<R, string | undefined> : {
    [K in T]: string;
};
export type InputToDataByTarget<T extends Input['out'], Target extends keyof ValidationTargets> = T extends {
    [K in Target]: infer R;
} ? R : never;
export type RemoveQuestion<T> = T extends `${infer R}?` ? R : T;
export type UndefinedIfHavingQuestion<T> = T extends `${infer _}?` ? string | undefined : string;
export type ExtractSchema<T> = T extends Hono<infer _, infer S> ? S : never;
export declare abstract class FetchEventLike {
    abstract readonly request: dntShim.Request;
    abstract respondWith(promise: dntShim.Response | Promise<dntShim.Response>): void;
    abstract passThroughOnException(): void;
    abstract waitUntil(promise: Promise<void>): void;
}
export {};
