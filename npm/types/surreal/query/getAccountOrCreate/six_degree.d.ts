import type { OryUser } from "../../../guard/orySession.js";
import { Lang } from "../../../utils/lang.js";
import { Account } from "./index.js";
export declare function getSixDegreeAccount(user: OryUser, lang: Lang): Promise<SixDegreeAccount>;
export type SixDegreeAccount = Account & {
    six_degree: {
        highest_degree?: number;
        query_count: number;
        highest_path_count?: number;
        achievements: {
            achieved: string | null;
            title: string;
            description: string;
            id: string;
            lang: string;
        }[];
    };
};
