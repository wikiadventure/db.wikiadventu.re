export interface Deferred<T> extends Promise<T> {
    readonly state: "pending" | "fulfilled" | "rejected";
    resolve(value?: T | PromiseLike<T>): void;
    reject(reason?: any): void;
}
/**
 * Creates a Promise with the `reject` and `resolve` functions placed as methods
 * on the promise object itself.
 *
 * @example
 * ```typescript
 * import { deferred } from "https://deno.land/std@$STD_VERSION/async/deferred.ts";
 *
 * const p = deferred<number>();
 * // ...
 * p.resolve(42);
 * ```
 */
export declare function deferred<T>(): Deferred<T>;
