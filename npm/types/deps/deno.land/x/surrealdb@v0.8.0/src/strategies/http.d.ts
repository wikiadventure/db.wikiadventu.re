import * as dntShim from "../../../../../../_dnt.shims.js";
import { SurrealHTTP } from "../library/SurrealHTTP.js";
import { type AnyAuth, type Connection, type HTTPConnectionOptions, type MapQueryResult, type RawQueryResult, type ScopeAuth, type Token } from "../types.js";
export declare class HTTPStrategy<TFetcher = typeof dntShim.fetch> implements Connection {
    protected http?: SurrealHTTP<TFetcher>;
    ready: Promise<void>;
    private resolveReady;
    /**
     * Establish a socket connection to the database
     * @param connection - Connection details
     */
    constructor(url?: string, options?: HTTPConnectionOptions<TFetcher>);
    /**
     * Establish a socket connection to the database
     * @param connection - Connection details
     */
    connect(url: string, { fetch: fetcher, prepare, auth, ns, db }?: HTTPConnectionOptions<TFetcher>): Promise<void>;
    /**
     * Disconnect the socket to the database
     */
    close(): void;
    /**
     * Check if connection is ready
     */
    wait(): Promise<void>;
    /**
     * Get status of the socket connection
     */
    get status(): Promise<unknown>;
    /**
     * Ping SurrealDB instance
     */
    ping(): Promise<void>;
    /**
     * Switch to a specific namespace and database.
     * @param ns - Switches to a specific namespace.
     * @param db - Switches to a specific database.
     */
    use({ ns, db }: {
        ns?: string;
        db?: string;
    }): void;
    /**
     * Signs up to a specific authentication scope.
     * @param vars - Variables used in a signup query.
     * @return The authentication token.
     */
    signup(vars: ScopeAuth): Promise<string>;
    /**
     * Signs in to a specific authentication scope.
     * @param vars - Variables used in a signin query.
     * @return The authentication token, unless signed in as root.
     */
    signin(vars: AnyAuth): Promise<string | undefined>;
    /**
     * Authenticates the current connection with a JWT token.
     * @param token - The JWT authentication token.
     */
    authenticate(token: Token): void;
    /**
     * Invalidates the authentication for the current connection.
     */
    invalidate(): void;
    /**
     * Runs a set of SurrealQL statements against the database.
     * @param query - Specifies the SurrealQL statements.
     * @param vars - Assigns variables which can be used in the query.
     */
    query<T extends RawQueryResult[]>(query: string): Promise<MapQueryResult<T>>;
    protected get request(): <T = unknown>(path: string, options?: {
        method?: "GET" | "PUT" | "POST" | "DELETE" | "PATCH" | undefined;
        plainBody?: boolean | undefined;
        body?: string | Record<string, unknown> | undefined;
    } | undefined) => Promise<T>;
    /**
     * Reset the ready mechanism.
     */
    private resetReady;
}
