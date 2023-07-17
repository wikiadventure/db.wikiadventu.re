import { BaseAPIRequestFactory } from './baseapi.js';
import { Configuration } from '../configuration.js';
import { RequestContext, ResponseContext } from '../http/http.js';
import { CheckOplSyntaxResult } from '../models/CheckOplSyntaxResult.js';
import { CreateRelationshipBody } from '../models/CreateRelationshipBody.js';
import { Relationship } from '../models/Relationship.js';
import { RelationshipNamespaces } from '../models/RelationshipNamespaces.js';
import { RelationshipPatch } from '../models/RelationshipPatch.js';
import { Relationships } from '../models/Relationships.js';
/**
 * no description
 */
export declare class RelationshipApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * The OPL file is expected in the body of the request.
     * Check the syntax of an OPL file
     * @param body
     */
    checkOplSyntax(body?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Use this endpoint to create a relationship.
     * Create a Relationship
     * @param createRelationshipBody
     */
    createRelationship(createRelationshipBody?: CreateRelationshipBody, _options?: Configuration): Promise<RequestContext>;
    /**
     * Use this endpoint to delete relationships
     * Delete Relationships
     * @param namespace Namespace of the Relationship
     * @param object Object of the Relationship
     * @param relation Relation of the Relationship
     * @param subjectId SubjectID of the Relationship
     * @param subjectSetNamespace Namespace of the Subject Set
     * @param subjectSetObject Object of the Subject Set
     * @param subjectSetRelation Relation of the Subject Set
     */
    deleteRelationships(namespace?: string, object?: string, relation?: string, subjectId?: string, subjectSetNamespace?: string, subjectSetObject?: string, subjectSetRelation?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get all relationships that match the query. Only the namespace field is required.
     * Query relationships
     * @param pageToken
     * @param pageSize
     * @param namespace Namespace of the Relationship
     * @param object Object of the Relationship
     * @param relation Relation of the Relationship
     * @param subjectId SubjectID of the Relationship
     * @param subjectSetNamespace Namespace of the Subject Set
     * @param subjectSetObject Object of the Subject Set
     * @param subjectSetRelation Relation of the Subject Set
     */
    getRelationships(pageToken?: string, pageSize?: number, namespace?: string, object?: string, relation?: string, subjectId?: string, subjectSetNamespace?: string, subjectSetObject?: string, subjectSetRelation?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Get all namespaces
     * Query namespaces
     */
    listRelationshipNamespaces(_options?: Configuration): Promise<RequestContext>;
    /**
     * Use this endpoint to patch one or more relationships.
     * Patch Multiple Relationships
     * @param relationshipPatch
     */
    patchRelationships(relationshipPatch?: Array<RelationshipPatch>, _options?: Configuration): Promise<RequestContext>;
}
export declare class RelationshipApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to checkOplSyntax
     * @throws ApiException if the response code was not in [200, 299]
     */
    checkOplSyntax(response: ResponseContext): Promise<CheckOplSyntaxResult>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createRelationship
     * @throws ApiException if the response code was not in [200, 299]
     */
    createRelationship(response: ResponseContext): Promise<Relationship>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteRelationships
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteRelationships(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRelationships
     * @throws ApiException if the response code was not in [200, 299]
     */
    getRelationships(response: ResponseContext): Promise<Relationships>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRelationshipNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    listRelationshipNamespaces(response: ResponseContext): Promise<RelationshipNamespaces>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchRelationships
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchRelationships(response: ResponseContext): Promise<void>;
}
