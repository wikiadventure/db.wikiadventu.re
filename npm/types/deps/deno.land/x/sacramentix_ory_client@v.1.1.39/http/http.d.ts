/// <reference types="node" />
/// <reference types="node" />
import * as dntShim from "../../../../../_dnt.shims.js";
import { Observable } from '../rxjsStub.js';
/**
 * Represents an HTTP method.
 */
export declare enum HttpMethod {
    GET = "GET",
    HEAD = "HEAD",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    CONNECT = "CONNECT",
    OPTIONS = "OPTIONS",
    TRACE = "TRACE",
    PATCH = "PATCH"
}
/**
 * Represents an HTTP file which will be transferred from or to a server.
 */
export type HttpFile = Blob & {
    readonly name: string;
};
export declare class HttpException extends Error {
    constructor(msg: string);
}
/**
 * Represents the body of an outgoing HTTP request.
 */
export type RequestBody = undefined | string | dntShim.FormData | URLSearchParams;
/**
 * Represents an HTTP request context
 */
export declare class RequestContext {
    private httpMethod;
    private headers;
    private body;
    private url;
    /**
     * Creates the request context using a http method and request resource url
     *
     * @param url url of the requested resource
     * @param httpMethod http method
     */
    constructor(url: string, httpMethod: HttpMethod);
    getUrl(): string;
    /**
     * Replaces the url set in the constructor with this url.
     *
     */
    setUrl(url: string): void;
    /**
     * Sets the body of the http request either as a string or FormData
     *
     * Note that setting a body on a HTTP GET, HEAD, DELETE, CONNECT or TRACE
     * request is discouraged.
     * https://httpwg.org/http-core/draft-ietf-httpbis-semantics-latest.html#rfc.section.7.3.1
     *
     * @param body the body of the request
     */
    setBody(body: RequestBody): void;
    getHttpMethod(): HttpMethod;
    getHeaders(): {
        [key: string]: string;
    };
    getBody(): RequestBody;
    setQueryParam(name: string, value: string): void;
    /**
     * Sets a cookie with the name and value. NO check  for duplicate cookies is performed
     *
     */
    addCookie(name: string, value: string): void;
    setHeaderParam(key: string, value: string): void;
}
export interface ResponseBody {
    text(): Promise<string>;
    binary(): Promise<Blob>;
}
/**
 * Helper class to generate a `ResponseBody` from binary data
 */
export declare class SelfDecodingBody implements ResponseBody {
    private dataSource;
    constructor(dataSource: Promise<Blob>);
    binary(): Promise<Blob>;
    text(): Promise<string>;
}
export declare class ResponseContext {
    httpStatusCode: number;
    headers: {
        [key: string]: string;
    };
    body: ResponseBody;
    constructor(httpStatusCode: number, headers: {
        [key: string]: string;
    }, body: ResponseBody);
    /**
     * Parse header value in the form `value; param1="value1"`
     *
     * E.g. for Content-Type or Content-Disposition
     * Parameter names are converted to lower case
     * The first parameter is returned with the key `""`
     */
    getParsedHeader(headerName: string): {
        [parameter: string]: string;
    };
    getBodyAsFile(): Promise<HttpFile>;
    /**
     * Use a heuristic to get a body of unknown data structure.
     * Return as string if possible, otherwise as binary.
     */
    getBodyAsAny(): Promise<string | Blob | undefined>;
}
export interface HttpLibrary {
    send(request: RequestContext): Observable<ResponseContext>;
}
export interface PromiseHttpLibrary {
    send(request: RequestContext): Promise<ResponseContext>;
}
export declare function wrapHttpLibrary(promiseHttpLibrary: PromiseHttpLibrary): HttpLibrary;
