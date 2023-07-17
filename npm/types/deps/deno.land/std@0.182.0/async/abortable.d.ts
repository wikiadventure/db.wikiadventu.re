/// <reference types="node" />
/**
 * Make Promise abortable with the given signal.
 *
 * @example
 * ```typescript
 * import { abortable } from "https://deno.land/std@$STD_VERSION/async/mod.ts";
 * import { delay } from "https://deno.land/std@$STD_VERSION/async/mod.ts";
 *
 * const p = delay(1000);
 * const c = new AbortController();
 * setTimeout(() => c.abort(), 100);
 *
 * // Below throws `DOMException` after 100 ms
 * await abortable(p, c.signal);
 * ```
 */
export declare function abortable<T>(p: Promise<T>, signal: AbortSignal): Promise<T>;
/**
 * Make AsyncIterable abortable with the given signal.
 *
 * @example
 * ```typescript
 * import { abortable } from "https://deno.land/std@$STD_VERSION/async/mod.ts";
 * import { delay } from "https://deno.land/std@$STD_VERSION/async/mod.ts";
 *
 * const p = async function* () {
 *   yield "Hello";
 *   await delay(1000);
 *   yield "World";
 * };
 * const c = new AbortController();
 * setTimeout(() => c.abort(), 100);
 *
 * // Below throws `DOMException` after 100 ms
 * // and items become `["Hello"]`
 * const items: string[] = [];
 * for await (const item of abortable(p(), c.signal)) {
 *   items.push(item);
 * }
 * ```
 */
export declare function abortable<T>(p: AsyncIterable<T>, signal: AbortSignal): AsyncGenerator<T>;
/**
 * Make Promise abortable with the given signal.
 *
 * @example
 * ```typescript
 * import { abortablePromise } from "https://deno.land/std@$STD_VERSION/async/mod.ts";
 *
 * const request = fetch("https://example.com");
 *
 * const c = new AbortController();
 * setTimeout(() => c.abort(), 100);
 *
 * const p = abortablePromise(request, c.signal);
 *
 * // The below throws if the request didn't resolve in 100ms
 * await p;
 * ```
 */
export declare function abortablePromise<T>(p: Promise<T>, signal: AbortSignal): Promise<T>;
/**
 * Make AsyncIterable abortable with the given signal.
 *
 * @example
 * ```typescript
 * import { abortableAsyncIterable } from "https://deno.land/std@$STD_VERSION/async/mod.ts";
 * import { delay } from "https://deno.land/std@$STD_VERSION/async/mod.ts";
 *
 * const p = async function* () {
 *   yield "Hello";
 *   await delay(1000);
 *   yield "World";
 * };
 * const c = new AbortController();
 * setTimeout(() => c.abort(), 100);
 *
 * // Below throws `DOMException` after 100 ms
 * // and items become `["Hello"]`
 * const items: string[] = [];
 * for await (const item of abortableAsyncIterable(p(), c.signal)) {
 *   items.push(item);
 * }
 * ```
 */
export declare function abortableAsyncIterable<T>(p: AsyncIterable<T>, signal: AbortSignal): AsyncGenerator<T>;
