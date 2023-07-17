import { RequestContext } from "../http/http.js";
/**
 * Interface authentication schemes.
 */
export interface SecurityAuthentication {
    getName(): string;
    /**
     * Applies the authentication scheme to the request context
     *
     * @params context the request context which should use this authentication scheme
     */
    applySecurityAuthentication(context: RequestContext): void | Promise<void>;
}
export interface TokenProvider {
    getToken(): Promise<string> | string;
}
/**
 * Applies http authentication to the request context.
 */
export declare class BasicAuthentication implements SecurityAuthentication {
    private username;
    private password;
    /**
     * Configures the http authentication with the required details.
     *
     * @param username username for http basic authentication
     * @param password password for http basic authentication
     */
    constructor(username: string, password: string);
    getName(): string;
    applySecurityAuthentication(context: RequestContext): void;
}
/**
 * Applies http authentication to the request context.
 */
export declare class BearerAuthentication implements SecurityAuthentication {
    private tokenProvider;
    /**
     * Configures the http authentication with the required details.
     *
     * @param tokenProvider service that can provide the up-to-date token when needed
     */
    constructor(tokenProvider: TokenProvider);
    getName(): string;
    applySecurityAuthentication(context: RequestContext): Promise<void>;
}
/**
 * Applies oauth2 authentication to the request context.
 */
export declare class Oauth2Authentication implements SecurityAuthentication {
    private accessToken;
    /**
     * Configures OAuth2 with the necessary properties
     *
     * @param accessToken: The access token to be used for every request
     */
    constructor(accessToken: string);
    getName(): string;
    applySecurityAuthentication(context: RequestContext): void;
}
/**
 * Applies http authentication to the request context.
 */
export declare class OryAccessTokenAuthentication implements SecurityAuthentication {
    private tokenProvider;
    /**
     * Configures the http authentication with the required details.
     *
     * @param tokenProvider service that can provide the up-to-date token when needed
     */
    constructor(tokenProvider: TokenProvider);
    getName(): string;
    applySecurityAuthentication(context: RequestContext): Promise<void>;
}
export type AuthMethods = {
    "default"?: SecurityAuthentication;
    "basic"?: SecurityAuthentication;
    "bearer"?: SecurityAuthentication;
    "oauth2"?: SecurityAuthentication;
    "oryAccessToken"?: SecurityAuthentication;
};
export type ApiKeyConfiguration = string;
export type HttpBasicConfiguration = {
    "username": string;
    "password": string;
};
export type HttpBearerConfiguration = {
    tokenProvider: TokenProvider;
};
export type OAuth2Configuration = {
    accessToken: string;
};
export type AuthMethodsConfiguration = {
    "default"?: SecurityAuthentication;
    "basic"?: HttpBasicConfiguration;
    "bearer"?: HttpBearerConfiguration;
    "oauth2"?: OAuth2Configuration;
    "oryAccessToken"?: HttpBearerConfiguration;
};
/**
 * Creates the authentication methods from a swagger description.
 *
 */
export declare function configureAuthMethods(config: AuthMethodsConfiguration | undefined): AuthMethods;
