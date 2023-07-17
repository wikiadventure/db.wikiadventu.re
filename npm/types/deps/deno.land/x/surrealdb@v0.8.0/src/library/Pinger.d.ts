export declare class Pinger {
    private pinger?;
    private interval;
    constructor(interval?: number);
    start(callback: () => void): void;
    stop(): void;
}
