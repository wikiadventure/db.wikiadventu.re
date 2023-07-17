import { BaseAPIRequestFactory } from './baseapi.js';
import { Configuration } from '../configuration.js';
import { RequestContext, ResponseContext } from '../http/http.js';
import { ActiveProjectInConsole } from '../models/ActiveProjectInConsole.js';
import { CloudAccount } from '../models/CloudAccount.js';
import { CreateProjectApiKeyRequest } from '../models/CreateProjectApiKeyRequest.js';
import { CreateProjectBody } from '../models/CreateProjectBody.js';
import { GetProjectMetricsResponse } from '../models/GetProjectMetricsResponse.js';
import { JsonPatch } from '../models/JsonPatch.js';
import { Project } from '../models/Project.js';
import { ProjectApiKey } from '../models/ProjectApiKey.js';
import { ProjectMetadata } from '../models/ProjectMetadata.js';
import { SetActiveProjectInConsoleBody } from '../models/SetActiveProjectInConsoleBody.js';
import { SetProject } from '../models/SetProject.js';
import { SuccessfulProjectUpdate } from '../models/SuccessfulProjectUpdate.js';
/**
 * no description
 */
export declare class ProjectApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Creates a new project.
     * Create a Project
     * @param createProjectBody
     */
    createProject(createProjectBody?: CreateProjectBody, _options?: Configuration): Promise<RequestContext>;
    /**
     * Create an API token for a project.
     * Create project API token
     * @param project The Project ID or Project slug
     * @param createProjectApiKeyRequest
     */
    createProjectApiKey(project: string, createProjectApiKeyRequest?: CreateProjectApiKeyRequest, _options?: Configuration): Promise<RequestContext>;
    /**
     * Deletes an API token and immediately removes it.
     * Delete project API token
     * @param project The Project ID or Project slug
     * @param tokenId The Token ID
     */
    deleteProjectApiKey(project: string, tokenId: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Use this API to get your active project in the Ory Network Console UI.
     * Returns the Ory Network Project selected in the Ory Network Console
     */
    getActiveProjectInConsole(_options?: Configuration): Promise<RequestContext>;
    /**
     * Get a projects you have access to by its ID.
     * Get a Project
     * @param projectId Project ID  The project\&#39;s ID.
     */
    getProject(projectId: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * This endpoint requires the user to be a member of the project with the role `OWNER` or `DEVELOPER`.
     * Get all members associated with this project
     * @param projectId Project ID  The project\&#39;s ID.
     */
    getProjectMembers(projectId: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Retrieves project metrics for the specified event type and time range
     * @param projectId Project ID
     * @param eventType The event type to query for
     * @param resolution The resolution of the buckets  The minimum resolution is 1 hour.
     * @param _from The start time of the time window
     * @param to The end time of the time window
     */
    getProjectMetrics(projectId: string, eventType: string, resolution: string, _from: Date, to: Date, _options?: Configuration): Promise<RequestContext>;
    /**
     * A list of all the project\'s API tokens.
     * List a project\'s API Tokens
     * @param project The Project ID or Project slug
     */
    listProjectApiKeys(project: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Lists all projects you have access to.
     * List All Projects
     */
    listProjects(_options?: Configuration): Promise<RequestContext>;
    /**
     * Deprecated: Use the `patchProjectWithRevision` endpoint instead to specify the exact revision the patch was generated for.  This endpoints allows you to patch individual Ory Network project configuration keys for Ory\'s services (identity, permission, ...). The configuration format is fully compatible with the open source projects for the respective services (e.g. Ory Kratos for Identity, Ory Keto for Permissions).  This endpoint expects the `version` key to be set in the payload. If it is unset, it will try to import the config as if it is from the most recent version.  If you have an older version of a configuration, you should set the version key in the payload!  While this endpoint is able to process all configuration items related to features (e.g. password reset), it does not support operational configuration items (e.g. port, tracing, logging) otherwise available in the open source.  For configuration items that can not be translated to the Ory Network, this endpoint will return a list of warnings to help you understand which parts of your config could not be processed.
     * Patch an Ory Network Project Configuration
     * @param projectId Project ID  The project\&#39;s ID.
     * @param jsonPatch
     */
    patchProject(projectId: string, jsonPatch?: Array<JsonPatch>, _options?: Configuration): Promise<RequestContext>;
    /**
     * !! Use with extreme caution !!  Using this API endpoint you can purge (completely delete) a project and its data. This action can not be undone and will delete ALL your data.  !! Use with extreme caution !!
     * Irrecoverably purge a project
     * @param projectId Project ID  The project\&#39;s ID.
     */
    purgeProject(projectId: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * This also sets their invite status to `REMOVED`. This endpoint requires the user to be a member of the project with the role `OWNER`.
     * Remove a member associated with this project
     * @param projectId Project ID  The project\&#39;s ID.
     * @param memberId Member ID
     */
    removeProjectMember(projectId: string, memberId: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Use this API to set your active project in the Ory Network Console UI.
     * Sets the Ory Network Project active in the Ory Network Console
     * @param setActiveProjectInConsoleBody
     */
    setActiveProjectInConsole(setActiveProjectInConsoleBody?: SetActiveProjectInConsoleBody, _options?: Configuration): Promise<RequestContext>;
    /**
     * This endpoints allows you to update the Ory Network project configuration for individual services (identity, permission, ...). The configuration is fully compatible with the open source projects for the respective services (e.g. Ory Kratos for Identity, Ory Keto for Permissions).  This endpoint expects the `version` key to be set in the payload. If it is unset, it will try to import the config as if it is from the most recent version.  If you have an older version of a configuration, you should set the version key in the payload!  While this endpoint is able to process all configuration items related to features (e.g. password reset), it does not support operational configuration items (e.g. port, tracing, logging) otherwise available in the open source.  For configuration items that can not be translated to the Ory Network, this endpoint will return a list of warnings to help you understand which parts of your config could not be processed.  Be aware that updating any service\'s configuration will completely override your current configuration for that service!
     * Update an Ory Network Project Configuration
     * @param projectId Project ID  The project\&#39;s ID.
     * @param setProject
     */
    setProject(projectId: string, setProject?: SetProject, _options?: Configuration): Promise<RequestContext>;
}
export declare class ProjectApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createProject
     * @throws ApiException if the response code was not in [200, 299]
     */
    createProject(response: ResponseContext): Promise<Project>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createProjectApiKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    createProjectApiKey(response: ResponseContext): Promise<ProjectApiKey>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteProjectApiKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteProjectApiKey(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getActiveProjectInConsole
     * @throws ApiException if the response code was not in [200, 299]
     */
    getActiveProjectInConsole(response: ResponseContext): Promise<ActiveProjectInConsole>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getProject
     * @throws ApiException if the response code was not in [200, 299]
     */
    getProject(response: ResponseContext): Promise<Project>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getProjectMembers
     * @throws ApiException if the response code was not in [200, 299]
     */
    getProjectMembers(response: ResponseContext): Promise<Array<CloudAccount>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getProjectMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
    getProjectMetrics(response: ResponseContext): Promise<GetProjectMetricsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listProjectApiKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
    listProjectApiKeys(response: ResponseContext): Promise<Array<ProjectApiKey>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listProjects
     * @throws ApiException if the response code was not in [200, 299]
     */
    listProjects(response: ResponseContext): Promise<Array<ProjectMetadata>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchProject
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchProject(response: ResponseContext): Promise<SuccessfulProjectUpdate>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to purgeProject
     * @throws ApiException if the response code was not in [200, 299]
     */
    purgeProject(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeProjectMember
     * @throws ApiException if the response code was not in [200, 299]
     */
    removeProjectMember(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setActiveProjectInConsole
     * @throws ApiException if the response code was not in [200, 299]
     */
    setActiveProjectInConsole(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setProject
     * @throws ApiException if the response code was not in [200, 299]
     */
    setProject(response: ResponseContext): Promise<SuccessfulProjectUpdate>;
}
