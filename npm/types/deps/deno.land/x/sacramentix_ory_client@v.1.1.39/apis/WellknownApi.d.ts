import { BaseAPIRequestFactory } from './baseapi.js';
import { Configuration } from '../configuration.js';
import { RequestContext, ResponseContext } from '../http/http.js';
import { JsonWebKeySet } from '../models/JsonWebKeySet.js';
/**
 * no description
 */
export declare class WellknownApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * This endpoint returns JSON Web Keys required to verifying OpenID Connect ID Tokens and, if enabled, OAuth 2.0 JWT Access Tokens. This endpoint can be used with client libraries like [node-jwks-rsa](https://github.com/auth0/node-jwks-rsa) among others.
     * Discover Well-Known JSON Web Keys
     */
    discoverJsonWebKeys(_options?: Configuration): Promise<RequestContext>;
}
export declare class WellknownApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to discoverJsonWebKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
    discoverJsonWebKeys(response: ResponseContext): Promise<JsonWebKeySet>;
}
