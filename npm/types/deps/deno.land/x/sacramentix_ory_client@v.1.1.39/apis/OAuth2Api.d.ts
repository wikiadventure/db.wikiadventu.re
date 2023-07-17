import { BaseAPIRequestFactory } from './baseapi.js';
import { Configuration } from '../configuration.js';
import { RequestContext, ResponseContext } from '../http/http.js';
import { AcceptOAuth2ConsentRequest } from '../models/AcceptOAuth2ConsentRequest.js';
import { AcceptOAuth2LoginRequest } from '../models/AcceptOAuth2LoginRequest.js';
import { IntrospectedOAuth2Token } from '../models/IntrospectedOAuth2Token.js';
import { JsonPatch } from '../models/JsonPatch.js';
import { OAuth2Client } from '../models/OAuth2Client.js';
import { OAuth2ClientTokenLifespans } from '../models/OAuth2ClientTokenLifespans.js';
import { OAuth2ConsentRequest } from '../models/OAuth2ConsentRequest.js';
import { OAuth2ConsentSession } from '../models/OAuth2ConsentSession.js';
import { OAuth2LoginRequest } from '../models/OAuth2LoginRequest.js';
import { OAuth2LogoutRequest } from '../models/OAuth2LogoutRequest.js';
import { OAuth2RedirectTo } from '../models/OAuth2RedirectTo.js';
import { OAuth2TokenExchange } from '../models/OAuth2TokenExchange.js';
import { RejectOAuth2Request } from '../models/RejectOAuth2Request.js';
import { TrustOAuth2JwtGrantIssuer } from '../models/TrustOAuth2JwtGrantIssuer.js';
import { TrustedOAuth2JwtGrantIssuer } from '../models/TrustedOAuth2JwtGrantIssuer.js';
/**
 * no description
 */
export declare class OAuth2ApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider to authenticate the subject and then tell Ory now about it. If the subject authenticated, he/she must now be asked if the OAuth 2.0 Client which initiated the flow should be allowed to access the resources on the subject\'s behalf.  The consent challenge is appended to the consent provider\'s URL to which the subject\'s user-agent (browser) is redirected to. The consent provider uses that challenge to fetch information on the OAuth2 request and then tells Ory if the subject accepted or rejected the request.  This endpoint tells Ory that the subject has authorized the OAuth 2.0 client to access resources on his/her behalf. The consent provider includes additional information, such as session data for access and ID tokens, and if the consent request should be used as basis for future requests.  The response contains a redirect URL which the consent provider should redirect the user-agent to.  The default consent provider is available via the Ory Managed Account Experience. To customize the consent provider, please head over to the OAuth 2.0 documentation.
     * Accept OAuth 2.0 Consent Request
     * @param consentChallenge OAuth 2.0 Consent Request Challenge
     * @param acceptOAuth2ConsentRequest
     */
    acceptOAuth2ConsentRequest(consentChallenge: string, acceptOAuth2ConsentRequest?: AcceptOAuth2ConsentRequest, _options?: Configuration): Promise<RequestContext>;
    /**
     * When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider to authenticate the subject and then tell the Ory OAuth2 Service about it.  The authentication challenge is appended to the login provider URL to which the subject\'s user-agent (browser) is redirected to. The login provider uses that challenge to fetch information on the OAuth2 request and then accept or reject the requested authentication process.  This endpoint tells Ory that the subject has successfully authenticated and includes additional information such as the subject\'s ID and if Ory should remember the subject\'s subject agent for future authentication attempts by setting a cookie.  The response contains a redirect URL which the login provider should redirect the user-agent to.
     * Accept OAuth 2.0 Login Request
     * @param loginChallenge OAuth 2.0 Login Request Challenge
     * @param acceptOAuth2LoginRequest
     */
    acceptOAuth2LoginRequest(loginChallenge: string, acceptOAuth2LoginRequest?: AcceptOAuth2LoginRequest, _options?: Configuration): Promise<RequestContext>;
    /**
     * When a user or an application requests Ory OAuth 2.0 to remove the session state of a subject, this endpoint is used to confirm that logout request.  The response contains a redirect URL which the consent provider should redirect the user-agent to.
     * Accept OAuth 2.0 Session Logout Request
     * @param logoutChallenge OAuth 2.0 Logout Request Challenge
     */
    acceptOAuth2LogoutRequest(logoutChallenge: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Create a new OAuth 2.0 client. If you pass `client_secret` the secret is used, otherwise a random secret is generated. The secret is echoed in the response. It is not possible to retrieve it later on.
     * Create OAuth 2.0 Client
     * @param oAuth2Client OAuth 2.0 Client Request Body
     */
    createOAuth2Client(oAuth2Client: OAuth2Client, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete an existing OAuth 2.0 Client by its ID.  OAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.  Make sure that this endpoint is well protected and only callable by first-party components.
     * Delete OAuth 2.0 Client
     * @param id The id of the OAuth 2.0 Client.
     */
    deleteOAuth2Client(id: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * This endpoint deletes OAuth2 access tokens issued to an OAuth 2.0 Client from the database.
     * Delete OAuth 2.0 Access Tokens from specific OAuth 2.0 Client
     * @param clientId OAuth 2.0 Client ID
     */
    deleteOAuth2Token(clientId: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Use this endpoint to delete trusted JWT Bearer Grant Type Issuer. The ID is the one returned when you created the trust relationship.  Once deleted, the associated issuer will no longer be able to perform the JSON Web Token (JWT) Profile for OAuth 2.0 Client Authentication and Authorization Grant.
     * Delete Trusted OAuth2 JWT Bearer Grant Type Issuer
     * @param id The id of the desired grant
     */
    deleteTrustedOAuth2JwtGrantIssuer(id: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get an OAuth 2.0 client by its ID. This endpoint never returns the client secret.  OAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.
     * Get an OAuth 2.0 Client
     * @param id The id of the OAuth 2.0 Client.
     */
    getOAuth2Client(id: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider to authenticate the subject and then tell Ory now about it. If the subject authenticated, he/she must now be asked if the OAuth 2.0 Client which initiated the flow should be allowed to access the resources on the subject\'s behalf.  The consent challenge is appended to the consent provider\'s URL to which the subject\'s user-agent (browser) is redirected to. The consent provider uses that challenge to fetch information on the OAuth2 request and then tells Ory if the subject accepted or rejected the request.  The default consent provider is available via the Ory Managed Account Experience. To customize the consent provider, please head over to the OAuth 2.0 documentation.
     * Get OAuth 2.0 Consent Request
     * @param consentChallenge OAuth 2.0 Consent Request Challenge
     */
    getOAuth2ConsentRequest(consentChallenge: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider to authenticate the subject and then tell the Ory OAuth2 Service about it.  Per default, the login provider is Ory itself. You may use a different login provider which needs to be a web-app you write and host, and it must be able to authenticate (\"show the subject a login screen\") a subject (in OAuth2 the proper name for subject is \"resource owner\").  The authentication challenge is appended to the login provider URL to which the subject\'s user-agent (browser) is redirected to. The login provider uses that challenge to fetch information on the OAuth2 request and then accept or reject the requested authentication process.
     * Get OAuth 2.0 Login Request
     * @param loginChallenge OAuth 2.0 Login Request Challenge
     */
    getOAuth2LoginRequest(loginChallenge: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Use this endpoint to fetch an Ory OAuth 2.0 logout request.
     * Get OAuth 2.0 Session Logout Request
     * @param logoutChallenge
     */
    getOAuth2LogoutRequest(logoutChallenge: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Use this endpoint to get a trusted JWT Bearer Grant Type Issuer. The ID is the one returned when you created the trust relationship.
     * Get Trusted OAuth2 JWT Bearer Grant Type Issuer
     * @param id The id of the desired grant
     */
    getTrustedOAuth2JwtGrantIssuer(id: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * The introspection endpoint allows to check if a token (both refresh and access) is active or not. An active token is neither expired nor revoked. If a token is active, additional information on the token will be included. You can set additional data for a token by setting `session.access_token` during the consent flow.
     * Introspect OAuth2 Access and Refresh Tokens
     * @param token The string value of the token. For access tokens, this is the \\\&quot;access_token\\\&quot; value returned from the token endpoint defined in OAuth 2.0. For refresh tokens, this is the \\\&quot;refresh_token\\\&quot; value returned.
     * @param scope An optional, space separated list of required scopes. If the access token was not granted one of the scopes, the result of active will be false.
     */
    introspectOAuth2Token(token: string, scope?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * This endpoint lists all clients in the database, and never returns client secrets. As a default it lists the first 100 clients.
     * List OAuth 2.0 Clients
     * @param pageSize Items per Page  This is the number of items per page to return. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @param pageToken Next Page Token  The next page token. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @param clientName The name of the clients to filter by.
     * @param owner The owner of the clients to filter by.
     */
    listOAuth2Clients(pageSize?: number, pageToken?: string, clientName?: string, owner?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * This endpoint lists all subject\'s granted consent sessions, including client and granted scope. If the subject is unknown or has not granted any consent sessions yet, the endpoint returns an empty JSON array with status code 200 OK.
     * List OAuth 2.0 Consent Sessions of a Subject
     * @param subject The subject to list the consent sessions for.
     * @param pageSize Items per Page  This is the number of items per page to return. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @param pageToken Next Page Token  The next page token. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @param loginSessionId The login session id to list the consent sessions for.
     */
    listOAuth2ConsentSessions(subject: string, pageSize?: number, pageToken?: string, loginSessionId?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Use this endpoint to list all trusted JWT Bearer Grant Type Issuers.
     * List Trusted OAuth2 JWT Bearer Grant Type Issuers
     * @param maxItems
     * @param defaultItems
     * @param issuer If optional \&quot;issuer\&quot; is supplied, only jwt-bearer grants with this issuer will be returned.
     */
    listTrustedOAuth2JwtGrantIssuers(maxItems?: number, defaultItems?: number, issuer?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Use open source libraries to perform OAuth 2.0 and OpenID Connect available for any programming language. You can find a list of libraries at https://oauth.net/code/  The Ory SDK is not yet able to this endpoint properly.
     * OAuth 2.0 Authorize Endpoint
     */
    oAuth2Authorize(_options?: Configuration): Promise<RequestContext>;
    /**
     * Use open source libraries to perform OAuth 2.0 and OpenID Connect available for any programming language. You can find a list of libraries here https://oauth.net/code/  The Ory SDK is not yet able to this endpoint properly.
     * The OAuth 2.0 Token Endpoint
     * @param grantType
     * @param clientId
     * @param code
     * @param redirectUri
     * @param refreshToken
     */
    oauth2TokenExchange(grantType: string, clientId?: string, code?: string, redirectUri?: string, refreshToken?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Patch an existing OAuth 2.0 Client using JSON Patch. If you pass `client_secret` the secret will be updated and returned via the API. This is the only time you will be able to retrieve the client secret, so write it down and keep it safe.  OAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.
     * Patch OAuth 2.0 Client
     * @param id The id of the OAuth 2.0 Client.
     * @param jsonPatch OAuth 2.0 Client JSON Patch Body
     */
    patchOAuth2Client(id: string, jsonPatch: Array<JsonPatch>, _options?: Configuration): Promise<RequestContext>;
    /**
     * When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider to authenticate the subject and then tell Ory now about it. If the subject authenticated, he/she must now be asked if the OAuth 2.0 Client which initiated the flow should be allowed to access the resources on the subject\'s behalf.  The consent challenge is appended to the consent provider\'s URL to which the subject\'s user-agent (browser) is redirected to. The consent provider uses that challenge to fetch information on the OAuth2 request and then tells Ory if the subject accepted or rejected the request.  This endpoint tells Ory that the subject has not authorized the OAuth 2.0 client to access resources on his/her behalf. The consent provider must include a reason why the consent was not granted.  The response contains a redirect URL which the consent provider should redirect the user-agent to.  The default consent provider is available via the Ory Managed Account Experience. To customize the consent provider, please head over to the OAuth 2.0 documentation.
     * Reject OAuth 2.0 Consent Request
     * @param consentChallenge OAuth 2.0 Consent Request Challenge
     * @param rejectOAuth2Request
     */
    rejectOAuth2ConsentRequest(consentChallenge: string, rejectOAuth2Request?: RejectOAuth2Request, _options?: Configuration): Promise<RequestContext>;
    /**
     * When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider to authenticate the subject and then tell the Ory OAuth2 Service about it.  The authentication challenge is appended to the login provider URL to which the subject\'s user-agent (browser) is redirected to. The login provider uses that challenge to fetch information on the OAuth2 request and then accept or reject the requested authentication process.  This endpoint tells Ory that the subject has not authenticated and includes a reason why the authentication was denied.  The response contains a redirect URL which the login provider should redirect the user-agent to.
     * Reject OAuth 2.0 Login Request
     * @param loginChallenge OAuth 2.0 Login Request Challenge
     * @param rejectOAuth2Request
     */
    rejectOAuth2LoginRequest(loginChallenge: string, rejectOAuth2Request?: RejectOAuth2Request, _options?: Configuration): Promise<RequestContext>;
    /**
     * When a user or an application requests Ory OAuth 2.0 to remove the session state of a subject, this endpoint is used to deny that logout request. No HTTP request body is required.  The response is empty as the logout provider has to chose what action to perform next.
     * Reject OAuth 2.0 Session Logout Request
     * @param logoutChallenge
     */
    rejectOAuth2LogoutRequest(logoutChallenge: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * This endpoint revokes a subject\'s granted consent sessions and invalidates all associated OAuth 2.0 Access Tokens. You may also only revoke sessions for a specific OAuth 2.0 Client ID.
     * Revoke OAuth 2.0 Consent Sessions of a Subject
     * @param subject OAuth 2.0 Consent Subject  The subject whose consent sessions should be deleted.
     * @param client OAuth 2.0 Client ID  If set, deletes only those consent sessions that have been granted to the specified OAuth 2.0 Client ID.
     * @param all Revoke All Consent Sessions  If set to &#x60;true&#x60; deletes all consent sessions by the Subject that have been granted.
     */
    revokeOAuth2ConsentSessions(subject: string, client?: string, all?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * This endpoint invalidates authentication sessions. After revoking the authentication session(s), the subject has to re-authenticate at the Ory OAuth2 Provider. This endpoint does not invalidate any tokens.  If you send the subject in a query param, all authentication sessions that belong to that subject are revoked. No OpennID Connect Front- or Back-channel logout is performed in this case.  Alternatively, you can send a SessionID via `sid` query param, in which case, only the session that is connected to that SessionID is revoked. OpenID Connect Back-channel logout is performed in this case.
     * Revokes OAuth 2.0 Login Sessions by either a Subject or a SessionID
     * @param subject OAuth 2.0 Subject  The subject to revoke authentication sessions for.
     * @param sid OAuth 2.0 Subject  The subject to revoke authentication sessions for.
     */
    revokeOAuth2LoginSessions(subject?: string, sid?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Revoking a token (both access and refresh) means that the tokens will be invalid. A revoked access token can no longer be used to make access requests, and a revoked refresh token can no longer be used to refresh an access token. Revoking a refresh token also invalidates the access token that was created with it. A token may only be revoked by the client the token was generated for.
     * Revoke OAuth 2.0 Access or Refresh Token
     * @param token
     * @param clientId
     * @param clientSecret
     */
    revokeOAuth2Token(token: string, clientId?: string, clientSecret?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Replaces an existing OAuth 2.0 Client with the payload you send. If you pass `client_secret` the secret is used, otherwise the existing secret is used.  If set, the secret is echoed in the response. It is not possible to retrieve it later on.  OAuth 2.0 Clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.
     * Set OAuth 2.0 Client
     * @param id OAuth 2.0 Client ID
     * @param oAuth2Client OAuth 2.0 Client Request Body
     */
    setOAuth2Client(id: string, oAuth2Client: OAuth2Client, _options?: Configuration): Promise<RequestContext>;
    /**
     * Set lifespans of different token types issued for this OAuth 2.0 client. Does not modify other fields.
     * Set OAuth2 Client Token Lifespans
     * @param id OAuth 2.0 Client ID
     * @param oAuth2ClientTokenLifespans
     */
    setOAuth2ClientLifespans(id: string, oAuth2ClientTokenLifespans?: OAuth2ClientTokenLifespans, _options?: Configuration): Promise<RequestContext>;
    /**
     * Use this endpoint to establish a trust relationship for a JWT issuer to perform JSON Web Token (JWT) Profile for OAuth 2.0 Client Authentication and Authorization Grants [RFC7523](https://datatracker.ietf.org/doc/html/rfc7523).
     * Trust OAuth2 JWT Bearer Grant Type Issuer
     * @param trustOAuth2JwtGrantIssuer
     */
    trustOAuth2JwtGrantIssuer(trustOAuth2JwtGrantIssuer?: TrustOAuth2JwtGrantIssuer, _options?: Configuration): Promise<RequestContext>;
}
export declare class OAuth2ApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to acceptOAuth2ConsentRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
    acceptOAuth2ConsentRequest(response: ResponseContext): Promise<OAuth2RedirectTo>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to acceptOAuth2LoginRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
    acceptOAuth2LoginRequest(response: ResponseContext): Promise<OAuth2RedirectTo>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to acceptOAuth2LogoutRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
    acceptOAuth2LogoutRequest(response: ResponseContext): Promise<OAuth2RedirectTo>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createOAuth2Client
     * @throws ApiException if the response code was not in [200, 299]
     */
    createOAuth2Client(response: ResponseContext): Promise<OAuth2Client>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteOAuth2Client
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteOAuth2Client(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteOAuth2Token
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteOAuth2Token(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteTrustedOAuth2JwtGrantIssuer
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteTrustedOAuth2JwtGrantIssuer(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOAuth2Client
     * @throws ApiException if the response code was not in [200, 299]
     */
    getOAuth2Client(response: ResponseContext): Promise<OAuth2Client>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOAuth2ConsentRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
    getOAuth2ConsentRequest(response: ResponseContext): Promise<OAuth2ConsentRequest>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOAuth2LoginRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
    getOAuth2LoginRequest(response: ResponseContext): Promise<OAuth2LoginRequest>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOAuth2LogoutRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
    getOAuth2LogoutRequest(response: ResponseContext): Promise<OAuth2LogoutRequest>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTrustedOAuth2JwtGrantIssuer
     * @throws ApiException if the response code was not in [200, 299]
     */
    getTrustedOAuth2JwtGrantIssuer(response: ResponseContext): Promise<TrustedOAuth2JwtGrantIssuer>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to introspectOAuth2Token
     * @throws ApiException if the response code was not in [200, 299]
     */
    introspectOAuth2Token(response: ResponseContext): Promise<IntrospectedOAuth2Token>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listOAuth2Clients
     * @throws ApiException if the response code was not in [200, 299]
     */
    listOAuth2Clients(response: ResponseContext): Promise<Array<OAuth2Client>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listOAuth2ConsentSessions
     * @throws ApiException if the response code was not in [200, 299]
     */
    listOAuth2ConsentSessions(response: ResponseContext): Promise<Array<OAuth2ConsentSession>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listTrustedOAuth2JwtGrantIssuers
     * @throws ApiException if the response code was not in [200, 299]
     */
    listTrustedOAuth2JwtGrantIssuers(response: ResponseContext): Promise<Array<TrustedOAuth2JwtGrantIssuer>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to oAuth2Authorize
     * @throws ApiException if the response code was not in [200, 299]
     */
    oAuth2Authorize(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to oauth2TokenExchange
     * @throws ApiException if the response code was not in [200, 299]
     */
    oauth2TokenExchange(response: ResponseContext): Promise<OAuth2TokenExchange>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchOAuth2Client
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchOAuth2Client(response: ResponseContext): Promise<OAuth2Client>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to rejectOAuth2ConsentRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
    rejectOAuth2ConsentRequest(response: ResponseContext): Promise<OAuth2RedirectTo>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to rejectOAuth2LoginRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
    rejectOAuth2LoginRequest(response: ResponseContext): Promise<OAuth2RedirectTo>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to rejectOAuth2LogoutRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
    rejectOAuth2LogoutRequest(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to revokeOAuth2ConsentSessions
     * @throws ApiException if the response code was not in [200, 299]
     */
    revokeOAuth2ConsentSessions(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to revokeOAuth2LoginSessions
     * @throws ApiException if the response code was not in [200, 299]
     */
    revokeOAuth2LoginSessions(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to revokeOAuth2Token
     * @throws ApiException if the response code was not in [200, 299]
     */
    revokeOAuth2Token(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setOAuth2Client
     * @throws ApiException if the response code was not in [200, 299]
     */
    setOAuth2Client(response: ResponseContext): Promise<OAuth2Client>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setOAuth2ClientLifespans
     * @throws ApiException if the response code was not in [200, 299]
     */
    setOAuth2ClientLifespans(response: ResponseContext): Promise<OAuth2Client>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to trustOAuth2JwtGrantIssuer
     * @throws ApiException if the response code was not in [200, 299]
     */
    trustOAuth2JwtGrantIssuer(response: ResponseContext): Promise<TrustedOAuth2JwtGrantIssuer>;
}
