import { BaseAPIRequestFactory } from './baseapi.js';
import { Configuration } from '../configuration.js';
import { RequestContext, ResponseContext } from '../http/http.js';
import { CreateJsonWebKeySet } from '../models/CreateJsonWebKeySet.js';
import { JsonWebKey } from '../models/JsonWebKey.js';
import { JsonWebKeySet } from '../models/JsonWebKeySet.js';
/**
 * no description
 */
export declare class JwkApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * This endpoint is capable of generating JSON Web Key Sets for you. There a different strategies available, such as symmetric cryptographic keys (HS256, HS512) and asymetric cryptographic keys (RS256, ECDSA). If the specified JSON Web Key Set does not exist, it will be created.  A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens), and allows storing user-defined keys as well.
     * Create JSON Web Key
     * @param set The JSON Web Key Set ID
     * @param createJsonWebKeySet
     */
    createJsonWebKeySet(set: string, createJsonWebKeySet: CreateJsonWebKeySet, _options?: Configuration): Promise<RequestContext>;
    /**
     * Use this endpoint to delete a single JSON Web Key.  A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens), and allows storing user-defined keys as well.
     * Delete JSON Web Key
     * @param set The JSON Web Key Set
     * @param kid The JSON Web Key ID (kid)
     */
    deleteJsonWebKey(set: string, kid: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Use this endpoint to delete a complete JSON Web Key Set and all the keys in that set.  A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens), and allows storing user-defined keys as well.
     * Delete JSON Web Key Set
     * @param set The JSON Web Key Set
     */
    deleteJsonWebKeySet(set: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * This endpoint returns a singular JSON Web Key contained in a set. It is identified by the set and the specific key ID (kid).
     * Get JSON Web Key
     * @param set JSON Web Key Set ID
     * @param kid JSON Web Key ID
     */
    getJsonWebKey(set: string, kid: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * This endpoint can be used to retrieve JWK Sets stored in ORY Hydra.  A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens), and allows storing user-defined keys as well.
     * Retrieve a JSON Web Key Set
     * @param set JSON Web Key Set ID
     */
    getJsonWebKeySet(set: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Use this method if you do not want to let Hydra generate the JWKs for you, but instead save your own.  A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens), and allows storing user-defined keys as well.
     * Set JSON Web Key
     * @param set The JSON Web Key Set ID
     * @param kid JSON Web Key ID
     * @param jsonWebKey
     */
    setJsonWebKey(set: string, kid: string, jsonWebKey?: JsonWebKey, _options?: Configuration): Promise<RequestContext>;
    /**
     * Use this method if you do not want to let Hydra generate the JWKs for you, but instead save your own.  A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens), and allows storing user-defined keys as well.
     * Update a JSON Web Key Set
     * @param set The JSON Web Key Set ID
     * @param jsonWebKeySet
     */
    setJsonWebKeySet(set: string, jsonWebKeySet?: JsonWebKeySet, _options?: Configuration): Promise<RequestContext>;
}
export declare class JwkApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createJsonWebKeySet
     * @throws ApiException if the response code was not in [200, 299]
     */
    createJsonWebKeySet(response: ResponseContext): Promise<JsonWebKeySet>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteJsonWebKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteJsonWebKey(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteJsonWebKeySet
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteJsonWebKeySet(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getJsonWebKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    getJsonWebKey(response: ResponseContext): Promise<JsonWebKeySet>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getJsonWebKeySet
     * @throws ApiException if the response code was not in [200, 299]
     */
    getJsonWebKeySet(response: ResponseContext): Promise<JsonWebKeySet>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setJsonWebKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    setJsonWebKey(response: ResponseContext): Promise<JsonWebKey>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setJsonWebKeySet
     * @throws ApiException if the response code was not in [200, 299]
     */
    setJsonWebKeySet(response: ResponseContext): Promise<JsonWebKeySet>;
}
