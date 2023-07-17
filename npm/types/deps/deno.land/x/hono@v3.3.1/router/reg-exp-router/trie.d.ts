import type { ParamMap, Context } from './node.js';
import { Node } from './node.js';
export type { ParamMap } from './node.js';
export type ReplacementMap = number[];
export declare class Trie {
    context: Context;
    root: Node;
    insert(path: string, index: number, pathErrorCheckOnly: boolean): ParamMap;
    buildRegExp(): [RegExp, ReplacementMap, ReplacementMap];
}
