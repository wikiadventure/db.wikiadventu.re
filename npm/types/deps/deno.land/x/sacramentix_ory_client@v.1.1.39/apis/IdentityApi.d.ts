import { BaseAPIRequestFactory } from './baseapi.js';
import { Configuration } from '../configuration.js';
import { RequestContext, ResponseContext } from '../http/http.js';
import { BatchPatchIdentitiesResponse } from '../models/BatchPatchIdentitiesResponse.js';
import { CreateIdentityBody } from '../models/CreateIdentityBody.js';
import { CreateRecoveryCodeForIdentityBody } from '../models/CreateRecoveryCodeForIdentityBody.js';
import { CreateRecoveryLinkForIdentityBody } from '../models/CreateRecoveryLinkForIdentityBody.js';
import { Identity } from '../models/Identity.js';
import { IdentitySchemaContainer } from '../models/IdentitySchemaContainer.js';
import { JsonPatch } from '../models/JsonPatch.js';
import { PatchIdentitiesBody } from '../models/PatchIdentitiesBody.js';
import { RecoveryCodeForIdentity } from '../models/RecoveryCodeForIdentity.js';
import { RecoveryLinkForIdentity } from '../models/RecoveryLinkForIdentity.js';
import { Session } from '../models/Session.js';
import { UpdateIdentityBody } from '../models/UpdateIdentityBody.js';
/**
 * no description
 */
export declare class IdentityApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Creates or delete multiple [identities](https://www.ory.sh/docs/kratos/concepts/identity-user-model). This endpoint can also be used to [import credentials](https://www.ory.sh/docs/kratos/manage-identities/import-user-accounts-identities) for instance passwords, social sign in configurations or multifactor methods.
     * Create and deletes multiple identities
     * @param patchIdentitiesBody
     */
    batchPatchIdentities(patchIdentitiesBody?: PatchIdentitiesBody, _options?: Configuration): Promise<RequestContext>;
    /**
     * Create an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model).  This endpoint can also be used to [import credentials](https://www.ory.sh/docs/kratos/manage-identities/import-user-accounts-identities) for instance passwords, social sign in configurations or multifactor methods.
     * Create an Identity
     * @param createIdentityBody
     */
    createIdentity(createIdentityBody?: CreateIdentityBody, _options?: Configuration): Promise<RequestContext>;
    /**
     * This endpoint creates a recovery code which should be given to the user in order for them to recover (or activate) their account.
     * Create a Recovery Code
     * @param createRecoveryCodeForIdentityBody
     */
    createRecoveryCodeForIdentity(createRecoveryCodeForIdentityBody?: CreateRecoveryCodeForIdentityBody, _options?: Configuration): Promise<RequestContext>;
    /**
     * This endpoint creates a recovery link which should be given to the user in order for them to recover (or activate) their account.
     * Create a Recovery Link
     * @param createRecoveryLinkForIdentityBody
     */
    createRecoveryLinkForIdentity(createRecoveryLinkForIdentityBody?: CreateRecoveryLinkForIdentityBody, _options?: Configuration): Promise<RequestContext>;
    /**
     * Calling this endpoint irrecoverably and permanently deletes the [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model) given its ID. This action can not be undone. This endpoint returns 204 when the identity was deleted or when the identity was not found, in which case it is assumed that is has been deleted already.
     * Delete an Identity
     * @param id ID is the identity\&#39;s ID.
     */
    deleteIdentity(id: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model) credential by its type You can only delete second factor (aal2) credentials.
     * Delete a credential for a specific identity
     * @param id ID is the identity\&#39;s ID.
     * @param type Type is the credential\&#39;s Type. One of totp, webauthn, lookup
     */
    deleteIdentityCredentials(id: string, type: 'totp' | 'webauthn' | 'lookup', _options?: Configuration): Promise<RequestContext>;
    /**
     * Calling this endpoint irrecoverably and permanently deletes and invalidates all sessions that belong to the given Identity.
     * Delete & Invalidate an Identity\'s Sessions
     * @param id ID is the identity\&#39;s ID.
     */
    deleteIdentitySessions(id: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Calling this endpoint deactivates the specified session. Session data is not deleted.
     * Deactivate a Session
     * @param id ID is the session\&#39;s ID.
     */
    disableSession(id: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Calling this endpoint extends the given session ID. If `session.earliest_possible_extend` is set it will only extend the session after the specified time has passed.  Retrieve the session ID from the `/sessions/whoami` endpoint / `toSession` SDK method.
     * Extend a Session
     * @param id ID is the session\&#39;s ID.
     */
    extendSession(id: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Return an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model) by its ID. You can optionally include credentials (e.g. social sign in connections) in the response by using the `include_credential` query parameter.
     * Get an Identity
     * @param id ID must be set to the ID of identity you want to get
     * @param includeCredential Include Credentials in Response  Include any credential, for example &#x60;password&#x60; or &#x60;oidc&#x60;, in the response. When set to &#x60;oidc&#x60;, This will return the initial OAuth 2.0 Access Token, OAuth 2.0 Refresh Token and the OpenID Connect ID Token if available.
     */
    getIdentity(id: string, includeCredential?: Array<'password' | 'totp' | 'oidc' | 'webauthn' | 'lookup_secret'>, _options?: Configuration): Promise<RequestContext>;
    /**
     * Return a specific identity schema.
     * Get Identity JSON Schema
     * @param id ID must be set to the ID of schema you want to get
     */
    getIdentitySchema(id: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * This endpoint is useful for:  Getting a session object with all specified expandables that exist in an administrative context.
     * Get Session
     * @param id ID is the session\&#39;s ID.
     * @param expand ExpandOptions is a query parameter encoded list of all properties that must be expanded in the Session. Example - ?expand&#x3D;Identity&amp;expand&#x3D;Devices If no value is provided, the expandable properties are skipped.
     */
    getSession(id: string, expand?: Array<string>, _options?: Configuration): Promise<RequestContext>;
    /**
     * Lists all [identities](https://www.ory.sh/docs/kratos/concepts/identity-user-model) in the system.
     * List Identities
     * @param perPage Items per Page  This is the number of items per page.
     * @param page Pagination Page  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist.
     * @param credentialsIdentifier CredentialsIdentifier is the identifier (username, email) of the credentials to look up.
     */
    listIdentities(perPage?: number, page?: number, credentialsIdentifier?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Returns a list of all identity schemas currently in use.
     * Get all Identity Schemas
     * @param perPage Items per Page  This is the number of items per page.
     * @param page Pagination Page  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist.
     */
    listIdentitySchemas(perPage?: number, page?: number, _options?: Configuration): Promise<RequestContext>;
    /**
     * This endpoint returns all sessions that belong to the given Identity.
     * List an Identity\'s Sessions
     * @param id ID is the identity\&#39;s ID.
     * @param perPage Items per Page  This is the number of items per page.
     * @param page Pagination Page  This value is currently an integer, but it is not sequential. The value is not the page number, but a reference. The next page can be any number and some numbers might return an empty list.  For example, page 2 might not follow after page 1. And even if page 3 and 5 exist, but page 4 might not exist.
     * @param active Active is a boolean flag that filters out sessions based on the state. If no value is provided, all sessions are returned.
     */
    listIdentitySessions(id: string, perPage?: number, page?: number, active?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * Listing all sessions that exist.
     * List All Sessions
     * @param pageSize Items per Page  This is the number of items per page to return. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @param pageToken Next Page Token  The next page token. For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
     * @param active Active is a boolean flag that filters out sessions based on the state. If no value is provided, all sessions are returned.
     * @param expand ExpandOptions is a query parameter encoded list of all properties that must be expanded in the Session. If no value is provided, the expandable properties are skipped.
     */
    listSessions(pageSize?: number, pageToken?: string, active?: boolean, expand?: Array<string>, _options?: Configuration): Promise<RequestContext>;
    /**
     * Partially updates an [identity\'s](https://www.ory.sh/docs/kratos/concepts/identity-user-model) field using [JSON Patch](https://jsonpatch.com/). The fields `id`, `stateChangedAt` and `credentials` can not be updated using this method.
     * Patch an Identity
     * @param id ID must be set to the ID of identity you want to update
     * @param jsonPatch
     */
    patchIdentity(id: string, jsonPatch?: Array<JsonPatch>, _options?: Configuration): Promise<RequestContext>;
    /**
     * This endpoint updates an [identity](https://www.ory.sh/docs/kratos/concepts/identity-user-model). The full identity payload (except credentials) is expected. It is possible to update the identity\'s credentials as well.
     * Update an Identity
     * @param id ID must be set to the ID of identity you want to update
     * @param updateIdentityBody
     */
    updateIdentity(id: string, updateIdentityBody?: UpdateIdentityBody, _options?: Configuration): Promise<RequestContext>;
}
export declare class IdentityApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to batchPatchIdentities
     * @throws ApiException if the response code was not in [200, 299]
     */
    batchPatchIdentities(response: ResponseContext): Promise<BatchPatchIdentitiesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createIdentity
     * @throws ApiException if the response code was not in [200, 299]
     */
    createIdentity(response: ResponseContext): Promise<Identity>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createRecoveryCodeForIdentity
     * @throws ApiException if the response code was not in [200, 299]
     */
    createRecoveryCodeForIdentity(response: ResponseContext): Promise<RecoveryCodeForIdentity>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createRecoveryLinkForIdentity
     * @throws ApiException if the response code was not in [200, 299]
     */
    createRecoveryLinkForIdentity(response: ResponseContext): Promise<RecoveryLinkForIdentity>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteIdentity
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteIdentity(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteIdentityCredentials
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteIdentityCredentials(response: ResponseContext): Promise<Identity>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteIdentitySessions
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteIdentitySessions(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to disableSession
     * @throws ApiException if the response code was not in [200, 299]
     */
    disableSession(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to extendSession
     * @throws ApiException if the response code was not in [200, 299]
     */
    extendSession(response: ResponseContext): Promise<Session>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIdentity
     * @throws ApiException if the response code was not in [200, 299]
     */
    getIdentity(response: ResponseContext): Promise<Identity>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIdentitySchema
     * @throws ApiException if the response code was not in [200, 299]
     */
    getIdentitySchema(response: ResponseContext): Promise<any>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSession
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSession(response: ResponseContext): Promise<Session>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listIdentities
     * @throws ApiException if the response code was not in [200, 299]
     */
    listIdentities(response: ResponseContext): Promise<Array<Identity>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listIdentitySchemas
     * @throws ApiException if the response code was not in [200, 299]
     */
    listIdentitySchemas(response: ResponseContext): Promise<Array<IdentitySchemaContainer>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listIdentitySessions
     * @throws ApiException if the response code was not in [200, 299]
     */
    listIdentitySessions(response: ResponseContext): Promise<Array<Session>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSessions
     * @throws ApiException if the response code was not in [200, 299]
     */
    listSessions(response: ResponseContext): Promise<Array<Session>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchIdentity
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchIdentity(response: ResponseContext): Promise<Identity>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateIdentity
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateIdentity(response: ResponseContext): Promise<Identity>;
}
