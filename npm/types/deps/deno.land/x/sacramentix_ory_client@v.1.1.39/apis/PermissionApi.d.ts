import { BaseAPIRequestFactory } from './baseapi.js';
import { Configuration } from '../configuration.js';
import { RequestContext, ResponseContext } from '../http/http.js';
import { CheckPermissionResult } from '../models/CheckPermissionResult.js';
import { ExpandedPermissionTree } from '../models/ExpandedPermissionTree.js';
import { PostCheckPermissionBody } from '../models/PostCheckPermissionBody.js';
import { PostCheckPermissionOrErrorBody } from '../models/PostCheckPermissionOrErrorBody.js';
/**
 * no description
 */
export declare class PermissionApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.sh/docs/keto/concepts/api-overview).
     * Check a permission
     * @param namespace Namespace of the Relationship
     * @param object Object of the Relationship
     * @param relation Relation of the Relationship
     * @param subjectId SubjectID of the Relationship
     * @param subjectSetNamespace Namespace of the Subject Set
     * @param subjectSetObject Object of the Subject Set
     * @param subjectSetRelation Relation of the Subject Set
     * @param maxDepth
     */
    checkPermission(namespace?: string, object?: string, relation?: string, subjectId?: string, subjectSetNamespace?: string, subjectSetObject?: string, subjectSetRelation?: string, maxDepth?: number, _options?: Configuration): Promise<RequestContext>;
    /**
     * To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.sh/docs/keto/concepts/api-overview).
     * Check a permission
     * @param namespace Namespace of the Relationship
     * @param object Object of the Relationship
     * @param relation Relation of the Relationship
     * @param subjectId SubjectID of the Relationship
     * @param subjectSetNamespace Namespace of the Subject Set
     * @param subjectSetObject Object of the Subject Set
     * @param subjectSetRelation Relation of the Subject Set
     * @param maxDepth
     */
    checkPermissionOrError(namespace?: string, object?: string, relation?: string, subjectId?: string, subjectSetNamespace?: string, subjectSetObject?: string, subjectSetRelation?: string, maxDepth?: number, _options?: Configuration): Promise<RequestContext>;
    /**
     * Use this endpoint to expand a relationship tuple into permissions.
     * Expand a Relationship into permissions.
     * @param namespace Namespace of the Subject Set
     * @param object Object of the Subject Set
     * @param relation Relation of the Subject Set
     * @param maxDepth
     */
    expandPermissions(namespace: string, object: string, relation: string, maxDepth?: number, _options?: Configuration): Promise<RequestContext>;
    /**
     * To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.sh/docs/keto/concepts/api-overview).
     * Check a permission
     * @param maxDepth
     * @param postCheckPermissionBody
     */
    postCheckPermission(maxDepth?: number, postCheckPermissionBody?: PostCheckPermissionBody, _options?: Configuration): Promise<RequestContext>;
    /**
     * To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.sh/docs/keto/concepts/api-overview).
     * Check a permission
     * @param maxDepth nolint:deadcode,unused
     * @param postCheckPermissionOrErrorBody
     */
    postCheckPermissionOrError(maxDepth?: number, postCheckPermissionOrErrorBody?: PostCheckPermissionOrErrorBody, _options?: Configuration): Promise<RequestContext>;
}
export declare class PermissionApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to checkPermission
     * @throws ApiException if the response code was not in [200, 299]
     */
    checkPermission(response: ResponseContext): Promise<CheckPermissionResult>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to checkPermissionOrError
     * @throws ApiException if the response code was not in [200, 299]
     */
    checkPermissionOrError(response: ResponseContext): Promise<CheckPermissionResult>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to expandPermissions
     * @throws ApiException if the response code was not in [200, 299]
     */
    expandPermissions(response: ResponseContext): Promise<ExpandedPermissionTree>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postCheckPermission
     * @throws ApiException if the response code was not in [200, 299]
     */
    postCheckPermission(response: ResponseContext): Promise<CheckPermissionResult>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postCheckPermissionOrError
     * @throws ApiException if the response code was not in [200, 299]
     */
    postCheckPermissionOrError(response: ResponseContext): Promise<CheckPermissionResult>;
}
