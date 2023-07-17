import type { OryUser } from "../../../guard/orySession.js";
export declare function getAccount(user: OryUser): Promise<any>;
export type Account = {
    id: string;
    name: string;
    email: string;
};
