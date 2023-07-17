import { SurrealSocket } from "../library/SurrealSocket.js";
import { type AnyAuth, type Connection, type ConnectionOptions, type LiveQueryResponse, type MapQueryResult, type MergeData, type Patch, type RawQueryResult, type Result, type ScopeAuth, type Token } from "../types.js";
export declare class WebSocketStrategy implements Connection {
    protected socket?: SurrealSocket;
    private pinger?;
    private connection;
    ready: Promise<void>;
    private resolveReady;
    /**
     * Establish a socket connection to the database
     * @param connection - Connection details
     */
    constructor(url?: string, options?: ConnectionOptions);
    /**
     * Establish a socket connection to the database
     * @param connection - Connection details
     */
    connect(url: string, { prepare, auth, ns, db }?: ConnectionOptions): void;
    /**
     * Disconnect the socket to the database
     */
    close(): Promise<void>;
    /**
     * Check if connection is ready
     */
    wait(): Promise<void>;
    /**
     * Get status of the socket connection
     */
    get status(): import("../types.js").WebsocketStatus;
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
    }): Promise<void>;
    /**
     * Retrieve info about the current Surreal instance
     * @return Returns nothing!
     */
    info(): Promise<void>;
    /**
     * Signs up to a specific authentication scope.
     * @param vars - Variables used in a signup query.
     * @return The authentication token.
     */
    signup(vars: ScopeAuth): Promise<string>;
    /**
     * Signs in to a specific authentication scope.
     * @param vars - Variables used in a signin query.
     * @return The authentication token.
     */
    signin(vars: AnyAuth): Promise<string | undefined>;
    /**
     * Authenticates the current connection with a JWT token.
     * @param token - The JWT authentication token.
     */
    authenticate(token: Token): Promise<void>;
    /**
     * Invalidates the authentication for the current connection.
     */
    invalidate(): Promise<void>;
    /**
     * Specify a variable for the current socket connection.
     * @param key - Specifies the name of the variable.
     * @param val - Assigns the value to the variable name.
     */
    let(variable: string, value: unknown): Promise<void>;
    /**
     * Remove a variable from the current socket connection.
     * @param key - Specifies the name of the variable.
     */
    unset(variable: string): Promise<void>;
    /**
     * Start a live query and listen for the responses
     * @param query - The query that you want to receive live results for.
     * @param callback - Callback function that receives updates.
     */
    live<T extends Record<string, unknown> = Record<string, unknown>>(query: string, callback?: (data: LiveQueryResponse<T>) => unknown): Promise<string>;
    /**
     * Listen for live query responses by it's uuid
     * @param queryUuid - The LQ uuid that you want to receive live results for.
     * @param callback - Callback function that receives updates.
     */
    listenLive<T extends Record<string, unknown> = Record<string, unknown>>(queryUuid: string, callback: (data: LiveQueryResponse<T>) => unknown): Promise<void>;
    /**
     * Kill a live query
     * @param uuid - The query that you want to kill.
     */
    kill(queryUuid: string): Promise<void>;
    /**
     * Runs a set of SurrealQL statements against the database.
     * @param query - Specifies the SurrealQL statements.
     * @param vars - Assigns variables which can be used in the query.
     */
    query<T extends RawQueryResult[]>(query: string, vars?: Record<string, unknown>): Promise<MapQueryResult<T>>;
    /**
     * Selects all records in a table, or a specific record, from the database.
     * @param thing - The table name or a record ID to select.
     */
    select<T extends Record<string, unknown>>(thing: string): Promise<(T & {
        id: string;
    })[]>;
    /**
     * Creates a record in the database.
     * @param thing - The table name or the specific record ID to create.
     * @param data - The document / record data to insert.
     */
    create<T extends Record<string, unknown>>(thing: string, data?: T): Promise<(T & {
        id: string;
    })[]>;
    /**
     * Updates all records in a table, or a specific record, in the database.
     *
     * ***NOTE: This function replaces the current document / record data with the specified data.***
     * @param thing - The table name or the specific record ID to update.
     * @param data - The document / record data to insert.
     */
    update<T extends Record<string, unknown>>(thing: string, data?: T): Promise<(T & {
        id: string;
    })[]>;
    /**
     * Modifies all records in a table, or a specific record, in the database.
     *
     * ***NOTE: This function merges the current document / record data with the specified data.***
     * @param thing - The table name or the specific record ID to change.
     * @param data - The document / record data to insert.
     */
    merge<T extends Record<string, unknown>, U extends Record<string, unknown> = T>(thing: string, data?: MergeData<T, U>): Promise<(T & U & {
        id: string;
    })[]>;
    /**
     * Applies JSON Patch changes to all records, or a specific record, in the database.
     *
     * ***NOTE: This function patches the current document / record data with the specified JSON Patch data.***
     * @param thing - The table name or the specific record ID to modify.
     * @param data - The JSON Patch data with which to modify the records.
     */
    patch(thing: string, data?: Patch[]): Promise<Patch[]>;
    /**
     * Deletes all records in a table, or a specific record, from the database.
     * @param thing - The table name or a record ID to select.
     */
    delete<T extends Record<string, unknown> = Record<string, unknown>>(thing: string): Promise<(T & {
        id: string;
    })[]>;
    /**
     * Send a raw message to the SurrealDB instance
     * @param method - Type of message to send.
     * @param params - Parameters for the message.
     */
    protected send<T = unknown, U = Result<T>>(method: string, params?: unknown[]): Promise<U>;
    /**
     * Process a response by the SurrealDB instance
     * @param res - The raw response
     * @param thing - What thing did you query (table vs record).
     */
    private outputHandler;
    /**
     * Reset the ready mechanism.
     */
    private resetReady;
}
