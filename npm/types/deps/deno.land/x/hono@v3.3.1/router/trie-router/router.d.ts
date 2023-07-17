import type { Result, Router } from '../../router.js';
import { Node } from './node.js';
export declare class TrieRouter<T> implements Router<T> {
    name: string;
    node: Node<T>;
    constructor();
    add(method: string, path: string, handler: T): void;
    match(method: string, path: string): Result<T> | null;
}
