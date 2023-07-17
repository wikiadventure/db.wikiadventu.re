/// <reference types="node" />
import * as dntShim from "../../../../_dnt.shims.js";
/** Information about the connection a request arrived on. */
export interface ConnInfo {
    /** The local address of the connection. */
    readonly localAddr: dntShim.Deno.Addr;
    /** The remote address of the connection. */
    readonly remoteAddr: dntShim.Deno.Addr;
}
/**
 * A handler for HTTP requests. Consumes a request and connection information
 * and returns a response.
 *
 * If a handler throws, the server calling the handler will assume the impact
 * of the error is isolated to the individual request. It will catch the error
 * and close the underlying connection.
 */
export type Handler = (request: dntShim.Request, connInfo: ConnInfo) => dntShim.Response | Promise<dntShim.Response>;
/** Options for running an HTTP server. */
export interface ServerInit extends Partial<dntShim.Deno.ListenOptions> {
    /** The handler to invoke for individual HTTP requests. */
    handler: Handler;
    /**
     * The handler to invoke when route handlers throw an error.
     *
     * The default error handler logs and returns the error in JSON format.
     */
    onError?: (error: unknown) => dntShim.Response | Promise<dntShim.Response>;
}
/** Used to construct an HTTP server. */
export declare class Server {
    #private;
    /**
     * Constructs a new HTTP Server instance.
     *
     * ```ts
     * import { Server } from "https://deno.land/std@$STD_VERSION/http/server.ts";
     *
     * const port = 4505;
     * const handler = (request: Request) => {
     *   const body = `Your user-agent is:\n\n${request.headers.get(
     *    "user-agent",
     *   ) ?? "Unknown"}`;
     *
     *   return new Response(body, { status: 200 });
     * };
     *
     * const server = new Server({ port, handler });
     * ```
     *
     * @param serverInit Options for running an HTTP server.
     */
    constructor(serverInit: ServerInit);
    /**
     * Accept incoming connections on the given listener, and handle requests on
     * these connections with the given handler.
     *
     * HTTP/2 support is only enabled if the provided Deno.Listener returns TLS
     * connections and was configured with "h2" in the ALPN protocols.
     *
     * Throws a server closed error if called after the server has been closed.
     *
     * Will always close the created listener.
     *
     * ```ts
     * import { Server } from "https://deno.land/std@$STD_VERSION/http/server.ts";
     *
     * const handler = (request: Request) => {
     *   const body = `Your user-agent is:\n\n${request.headers.get(
     *    "user-agent",
     *   ) ?? "Unknown"}`;
     *
     *   return new Response(body, { status: 200 });
     * };
     *
     * const server = new Server({ handler });
     * const listener = Deno.listen({ port: 4505 });
     *
     * console.log("server listening on http://localhost:4505");
     *
     * await server.serve(listener);
     * ```
     *
     * @param listener The listener to accept connections from.
     */
    serve(listener: dntShim.Deno.Listener): Promise<void>;
    /**
     * Create a listener on the server, accept incoming connections, and handle
     * requests on these connections with the given handler.
     *
     * If the server was constructed without a specified port, 80 is used.
     *
     * If the server was constructed with the hostname omitted from the options, the
     * non-routable meta-address `0.0.0.0` is used.
     *
     * Throws a server closed error if the server has been closed.
     *
     * ```ts
     * import { Server } from "https://deno.land/std@$STD_VERSION/http/server.ts";
     *
     * const port = 4505;
     * const handler = (request: Request) => {
     *   const body = `Your user-agent is:\n\n${request.headers.get(
     *    "user-agent",
     *   ) ?? "Unknown"}`;
     *
     *   return new Response(body, { status: 200 });
     * };
     *
     * const server = new Server({ port, handler });
     *
     * console.log("server listening on http://localhost:4505");
     *
     * await server.listenAndServe();
     * ```
     */
    listenAndServe(): Promise<void>;
    /**
     * Create a listener on the server, accept incoming connections, upgrade them
     * to TLS, and handle requests on these connections with the given handler.
     *
     * If the server was constructed without a specified port, 443 is used.
     *
     * If the server was constructed with the hostname omitted from the options, the
     * non-routable meta-address `0.0.0.0` is used.
     *
     * Throws a server closed error if the server has been closed.
     *
     * ```ts
     * import { Server } from "https://deno.land/std@$STD_VERSION/http/server.ts";
     *
     * const port = 4505;
     * const handler = (request: Request) => {
     *   const body = `Your user-agent is:\n\n${request.headers.get(
     *    "user-agent",
     *   ) ?? "Unknown"}`;
     *
     *   return new Response(body, { status: 200 });
     * };
     *
     * const server = new Server({ port, handler });
     *
     * const certFile = "/path/to/certFile.crt";
     * const keyFile = "/path/to/keyFile.key";
     *
     * console.log("server listening on https://localhost:4505");
     *
     * await server.listenAndServeTls(certFile, keyFile);
     * ```
     *
     * @param certFile The path to the file containing the TLS certificate.
     * @param keyFile The path to the file containing the TLS private key.
     */
    listenAndServeTls(certFile: string, keyFile: string): Promise<void>;
    /**
     * Immediately close the server listeners and associated HTTP connections.
     *
     * Throws a server closed error if called after the server has been closed.
     */
    close(): void;
    /** Get whether the server is closed. */
    get closed(): boolean;
    /** Get the list of network addresses the server is listening on. */
    get addrs(): dntShim.Deno.Addr[];
}
/** Additional serve options. */
export interface ServeInit extends Partial<dntShim.Deno.ListenOptions> {
    /** An AbortSignal to close the server and all connections. */
    signal?: AbortSignal;
    /** The handler to invoke when route handlers throw an error. */
    onError?: (error: unknown) => dntShim.Response | Promise<dntShim.Response>;
    /** The callback which is called when the server started listening */
    onListen?: (params: {
        hostname: string;
        port: number;
    }) => void;
}
/**
 * Constructs a server, accepts incoming connections on the given listener, and
 * handles requests on these connections with the given handler.
 *
 * ```ts
 * import { serveListener } from "https://deno.land/std@$STD_VERSION/http/server.ts";
 *
 * const listener = Deno.listen({ port: 4505 });
 *
 * console.log("server listening on http://localhost:4505");
 *
 * await serveListener(listener, (request) => {
 *   const body = `Your user-agent is:\n\n${request.headers.get(
 *     "user-agent",
 *   ) ?? "Unknown"}`;
 *
 *   return new Response(body, { status: 200 });
 * });
 * ```
 *
 * @param listener The listener to accept connections from.
 * @param handler The handler for individual HTTP requests.
 * @param options Optional serve options.
 */
export declare function serveListener(listener: dntShim.Deno.Listener, handler: Handler, options?: Omit<ServeInit, "port" | "hostname">): Promise<void>;
/** Serves HTTP requests with the given handler.
 *
 * You can specify an object with a port and hostname option, which is the
 * address to listen on. The default is port 8000 on hostname "0.0.0.0".
 *
 * The below example serves with the port 8000.
 *
 * ```ts
 * import { serve } from "https://deno.land/std@$STD_VERSION/http/server.ts";
 * serve((_req) => new Response("Hello, world"));
 * ```
 *
 * You can change the listening address by the `hostname` and `port` options.
 * The below example serves with the port 3000.
 *
 * ```ts
 * import { serve } from "https://deno.land/std@$STD_VERSION/http/server.ts";
 * serve((_req) => new Response("Hello, world"), { port: 3000 });
 * ```
 *
 * `serve` function prints the message `Listening on http://<hostname>:<port>/`
 * on start-up by default. If you like to change this message, you can specify
 * `onListen` option to override it.
 *
 * ```ts
 * import { serve } from "https://deno.land/std@$STD_VERSION/http/server.ts";
 * serve((_req) => new Response("Hello, world"), {
 *   onListen({ port, hostname }) {
 *     console.log(`Server started at http://${hostname}:${port}`);
 *     // ... more info specific to your server ..
 *   },
 * });
 * ```
 *
 * You can also specify `undefined` or `null` to stop the logging behavior.
 *
 * ```ts
 * import { serve } from "https://deno.land/std@$STD_VERSION/http/server.ts";
 * serve((_req) => new Response("Hello, world"), { onListen: undefined });
 * ```
 *
 * @param handler The handler for individual HTTP requests.
 * @param options The options. See `ServeInit` documentation for details.
 */
export declare function serve(handler: Handler, options?: ServeInit): Promise<void>;
export interface ServeTlsInit extends ServeInit {
    /** Server private key in PEM format */
    key?: string;
    /** Cert chain in PEM format */
    cert?: string;
    /** The path to the file containing the TLS private key. */
    keyFile?: string;
    /** The path to the file containing the TLS certificate */
    certFile?: string;
}
/** Serves HTTPS requests with the given handler.
 *
 * You must specify `key` or `keyFile` and `cert` or `certFile` options.
 *
 * You can specify an object with a port and hostname option, which is the
 * address to listen on. The default is port 8443 on hostname "0.0.0.0".
 *
 * The below example serves with the default port 8443.
 *
 * ```ts
 * import { serveTls } from "https://deno.land/std@$STD_VERSION/http/server.ts";
 *
 * const cert = "-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----\n";
 * const key = "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n";
 * serveTls((_req) => new Response("Hello, world"), { cert, key });
 *
 * // Or
 *
 * const certFile = "/path/to/certFile.crt";
 * const keyFile = "/path/to/keyFile.key";
 * serveTls((_req) => new Response("Hello, world"), { certFile, keyFile });
 * ```
 *
 * `serveTls` function prints the message `Listening on https://<hostname>:<port>/`
 * on start-up by default. If you like to change this message, you can specify
 * `onListen` option to override it.
 *
 * ```ts
 * import { serveTls } from "https://deno.land/std@$STD_VERSION/http/server.ts";
 * const certFile = "/path/to/certFile.crt";
 * const keyFile = "/path/to/keyFile.key";
 * serveTls((_req) => new Response("Hello, world"), {
 *   certFile,
 *   keyFile,
 *   onListen({ port, hostname }) {
 *     console.log(`Server started at https://${hostname}:${port}`);
 *     // ... more info specific to your server ..
 *   },
 * });
 * ```
 *
 * You can also specify `undefined` or `null` to stop the logging behavior.
 *
 * ```ts
 * import { serveTls } from "https://deno.land/std@$STD_VERSION/http/server.ts";
 * const certFile = "/path/to/certFile.crt";
 * const keyFile = "/path/to/keyFile.key";
 * serveTls((_req) => new Response("Hello, world"), {
 *   certFile,
 *   keyFile,
 *   onListen: undefined,
 * });
 * ```
 *
 * @param handler The handler for individual HTTPS requests.
 * @param options The options. See `ServeTlsInit` documentation for details.
 * @returns
 */
export declare function serveTls(handler: Handler, options: ServeTlsInit): Promise<void>;
