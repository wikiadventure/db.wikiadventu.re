type Tuple<T, N extends number> = N extends N ? number extends N ? T[] : TupleOf<T, N, []> : never;
type TupleOf<T, N extends number, R extends unknown[]> = R["length"] extends N ? R : TupleOf<T, N, [T, ...R]>;
/**
 * Branches the given async iterable into the n branches.
 *
 * @example
 * ```ts
 * import { tee } from "https://deno.land/std@$STD_VERSION/async/tee.ts";
 *
 * const gen = async function* gen() {
 *   yield 1;
 *   yield 2;
 *   yield 3;
 * };
 *
 * const [branch1, branch2] = tee(gen());
 *
 * for await (const n of branch1) {
 *   console.log(n); // => 1, 2, 3
 * }
 *
 * for await (const n of branch2) {
 *   console.log(n); // => 1, 2, 3
 * }
 * ```
 */
export declare function tee<T, N extends number = 2>(iterable: AsyncIterable<T>, n?: N): Tuple<AsyncIterable<T>, N>;
export {};
