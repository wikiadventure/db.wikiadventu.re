import { type LiveQueryResponse, type Result, WebsocketStatus } from "../types.js";
export declare class SurrealSocket {
    private url;
    private onOpen?;
    private onClose?;
    private ws?;
    private status;
    private queue;
    private liveQueue;
    private unprocessedLiveResponses;
    ready: Promise<void>;
    private resolveReady;
    closed: Promise<void>;
    private resolveClosed;
    socketClosureReason: Record<number, string>;
    constructor({ url, onOpen, onClose, }: {
        url: string;
        onOpen?: () => unknown;
        onClose?: () => unknown;
    });
    open(): void;
    send(method: string, params: unknown[], callback: (data: Result) => unknown): Promise<void>;
    listenLive(queryUuid: string, callback: (data: LiveQueryResponse) => unknown): Promise<void>;
    kill(queryUuid: string): Promise<void>;
    private handleLiveBatch;
    close(reason: keyof typeof this.socketClosureReason): Promise<void>;
    get connectionStatus(): WebsocketStatus;
    private resetReady;
    private resetClosed;
}
