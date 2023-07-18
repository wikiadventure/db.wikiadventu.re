/**
 * Load environment variables from `.env` files.
 * Inspired by the node module [`dotenv`](https://github.com/motdotla/dotenv) and
 * [`dotenv-expand`](https://github.com/motdotla/dotenv-expand).
 *
 * ```sh
 * # .env
 * GREETING=hello world
 * ```
 *
 * Then import the configuration using the `load` function.
 *
 * ```ts
 * // app.ts
 * import { load } from "https://deno.land/std@$STD_VERSION/dotenv/mod.ts";
 *
 * console.log(await load());
 * ```
 *
 * Then run your app.
 *
 * ```sh
 * > deno run --allow-env --allow-read app.ts
 * { GREETING: "hello world" }
 * ```
 *
 * ## Auto loading
 *
 * `load.ts` automatically loads the local `.env` file on import and exports it to
 * the process environment:
 *
 * ```sh
 * # .env
 * GREETING=hello world
 * ```
 *
 * ```ts
 * // app.ts
 * import "https://deno.land/std@$STD_VERSION/dotenv/load.ts";
 *
 * console.log(Deno.env.get("GREETING"));
 * ```
 *
 * ```sh
 * > deno run --allow-env --allow-read app.ts
 * hello world
 * ```
 *
 * ## Parsing Rules
 *
 * The parsing engine currently supports the following rules:
 *
 * - Variables that already exist in the environment are not overridden with
 *   `export: true`
 * - `BASIC=basic` becomes `{ BASIC: "basic" }`
 * - empty lines are skipped
 * - lines beginning with `#` are treated as comments
 * - empty values become empty strings (`EMPTY=` becomes `{ EMPTY: "" }`)
 * - single and double quoted values are escaped (`SINGLE_QUOTE='quoted'` becomes
 *   `{ SINGLE_QUOTE: "quoted" }`)
 * - new lines are expanded in double quoted values (`MULTILINE="new\nline"`
 *   becomes
 *
 * ```
 * { MULTILINE: "new\nline" }
 * ```
 *
 * - inner quotes are maintained (think JSON) (`JSON={"foo": "bar"}` becomes
 *   `{ JSON: "{\"foo\": \"bar\"}" }`)
 * - whitespace is removed from both ends of unquoted values (see more on
 *   [`trim`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim))
 *   (`FOO= some value` becomes `{ FOO: "some value" }`)
 * - whitespace is preserved on both ends of quoted values (`FOO=" some value "`
 *   becomes `{ FOO: " some value " }`)
 * - dollar sign with an environment key in or without curly braces in unquoted
 *   values will expand the environment key (`KEY=$KEY` or `KEY=${KEY}` becomes
 *   `{ KEY: "<KEY_VALUE_FROM_ENV>" }`)
 * - escaped dollar sign with an environment key in unquoted values will escape the
 *   environment key rather than expand (`KEY=\$KEY` becomes `{ KEY: "\\$KEY" }`)
 * - colon and a minus sign with a default value(which can also be another expand
 *   value) in expanding construction in unquoted values will first attempt to
 *   expand the environment key. If it’s not found, then it will return the default
 *   value (`KEY=${KEY:-default}` If KEY exists it becomes
 *   `{ KEY: "<KEY_VALUE_FROM_ENV>" }` If not, then it becomes
 *   `{ KEY: "default" }`. Also there is possible to do this case
 *   `KEY=${NO_SUCH_KEY:-${EXISTING_KEY:-default}}` which becomes
 *   `{ KEY: "<EXISTING_KEY_VALUE_FROM_ENV>" }`)
 *
 * @module
 */
type StrictDotenvConfig<T extends ReadonlyArray<string>> = {
    [key in T[number]]: string;
} & Record<string, string>;
type StrictEnvVarList<T extends string> = Array<Extract<T, string>> | ReadonlyArray<Extract<T, string>>;
type StringList = Array<string> | ReadonlyArray<string> | undefined;
export interface LoadOptions {
    /**
     * Optional path to `.env` file. To prevent the default value from being
     * used, set to `null`.
     *
     * @default {"./.env"}
     */
    envPath?: string | null;
    /**
     * Set to `true` to export all `.env` variables to the current processes
     * environment. Variables are then accessable via `Deno.env.get(<key>)`.
     *
     * @default {false}
     */
    export?: boolean;
    /**
     * Optional path to `.env.example` file which is used for validation.
     * To prevent the default value from being used, set to `null`.
     *
     * @default {"./.env.example"}
     */
    examplePath?: string | null;
    /**
     * Set to `true` to allow required env variables to be empty. Otherwise, it
     * will throw an error if any variable is empty.
     *
     * @default {false}
     */
    allowEmptyValues?: boolean;
    /**
     * Optional path to `.env.defaults` file which is used to define default
     * (fallback) values. To prevent the default value from being used,
     * set to `null`.
     *
     * ```sh
     * # .env.defaults
     * # Will not be set if GREETING is set in base .env file
     * GREETING="a secret to everybody"
     * ```
     *
     * @default {"./.env.defaults"}
     */
    defaultsPath?: string | null;
    /**
     * List of Env variables to read from process. By default, the complete Env is
     * looked up. This allows to permit access to only specific Env variables with
     * `--allow-env=ENV_VAR_NAME`.
     */
    restrictEnvAccessTo?: StringList;
}
export declare function parse(rawDotenv: string, restrictEnvAccessTo?: StringList): Record<string, string>;
export declare function loadSync(options?: Omit<LoadOptions, "restrictEnvAccessTo">): Record<string, string>;
export declare function loadSync<TEnvVar extends string>(options: Omit<LoadOptions, "restrictEnvAccessTo"> & {
    restrictEnvAccessTo: StrictEnvVarList<TEnvVar>;
}): StrictDotenvConfig<StrictEnvVarList<TEnvVar>>;
export declare function load(options?: Omit<LoadOptions, "restrictEnvAccessTo">): Promise<Record<string, string>>;
export declare function load<TEnvVar extends string>(options: Omit<LoadOptions, "restrictEnvAccessTo"> & {
    restrictEnvAccessTo: StrictEnvVarList<TEnvVar>;
}): Promise<StrictDotenvConfig<StrictEnvVarList<TEnvVar>>>;
export declare class MissingEnvVarsError extends Error {
    missing: string[];
    constructor(message: string, missing: string[]);
}
/**
 * @example
 * ```ts
 * import { stringify } from "https://deno.land/std@$STD_VERSION/dotenv/mod.ts";
 *
 * const object = { GREETING: "hello world" };
 * const string = stringify(object); // GREETING='hello world'
 * ```
 *
 * @param object object to be stringified
 * @returns string of object
 */
export declare function stringify(object: Record<string, string>): string;
export {};
