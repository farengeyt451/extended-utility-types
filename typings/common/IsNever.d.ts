/**
 * Returns `true` if `T` is `never`; otherwise, `false`.
 */
export declare type IsNever<T> = [T] extends [never] ? true : false;
