import * as dntShim from "../../../../../../_dnt.shims.js";
export declare class SurrealHTTP<TFetcher = typeof dntShim.fetch> {
    private url;
    private authorization?;
    private namespace?;
    private database?;
    private fetch;
    constructor(url: string, { fetcher, }?: {
        fetcher?: TFetcher;
    });
    ready(): boolean;
    setTokenAuth(token: string): void;
    createRootAuth(username: string, password: string): void;
    clearAuth(): void;
    use({ ns, db }: {
        ns?: string;
        db?: string;
    }): void;
    request<T = unknown>(path: string, options?: {
        method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
        plainBody?: boolean;
        body?: Record<string, unknown> | string;
    }): Promise<T>;
}
