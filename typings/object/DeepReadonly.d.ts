import type { FunctionLike, Primitive } from '../';
/**
 * Constructs a type with all deeply nested properties of `T` set to `readonly`.
 */
export declare type DeepReadonly<T> = T extends Primitive | FunctionLike ? T : T extends object ? {
    readonly [K in keyof T]: DeepReadonly<T[K]>;
} : never;
