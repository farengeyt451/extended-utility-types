import type { NumberLike, Range, Tuple } from '../';
declare type Guard<T extends Identity[0]> = T;
declare type Identity = [unknown[][], Tuple<unknown[][], 2>, [unknown[], Identity[3]][], [] | [unknown]];
declare type Digit<T extends unknown[] = []> = T['length'] extends 10 ? [] : [T, ...Digit<[...T, unknown]>];
declare type Filter<T extends Identity[2], N extends '0' | '1'> = {
    [K in keyof T]: T[K] extends [unknown[], Identity[3]] ? T[K][N] : never;
};
declare type Rotate<T extends Identity[3][]> = T extends [...infer U, []] ? [[], ...U] : [[], ...T];
declare type Chunk<T extends Identity[2]> = {
    [K in keyof Tuple<unknown, 2>]: K extends '0' ? Filter<T, K> : K extends '1' ? Rotate<Filter<T, K>> : never;
};
declare type Mod<T extends Tuple<unknown[], 2>, U extends Identity[3]> = [...T[0], ...T[1], ...U] extends infer S ? S extends [...Digit[9], unknown, ...infer R] ? [R, [unknown]] : [S, []] : never;
declare type Sum<T extends Identity[1], X = T[0], Y = T[1]> = {
    [K in keyof Y]: Value<K, X, Y>;
} extends infer U ? U extends Identity[2] ? Chunk<U> extends infer R ? R extends Identity[1] ? R[1] extends [][] ? R[0] : Sum<R> : never : never : never : never;
declare type Value<T extends keyof Y, X, Y> = T extends keyof X ? [X[T], Y[T]] extends infer U ? U extends Tuple<unknown[], 2> ? Mod<U, []> : never : never : [Y[T], []];
declare type Transform<N extends string> = N extends `${infer F}${infer R}` ? [...Transform<R>, Digit[F & `${Range<0, 9>}`]] : [];
declare type Sort<T extends Identity[1], X = T[0], Y = T[1]> = keyof X extends keyof X & keyof Y ? [Y, X] : T;
declare type Iterate<T extends Identity[0], U extends unknown[]> = U extends [] ? [[]] : U extends [unknown, ...infer R] ? R extends [] ? T : Sum<[T, Iterate<T, R>]> : never;
declare type Product<T extends Identity[1], U extends Identity[0] = T[0]> = T[1] extends [unknown[], ...Guard<infer R>] ? Iterate<U, T[1][0]> extends Guard<infer N> ? R extends [] ? N : Sum<[N, [[], ...Product<[U, R]>]]> : never : never;
declare type Result<T extends NumberLike[]> = Product<Sort<[Transform<`${T[0]}`>, Transform<`${T[1]}`>]>>;
declare type Stringify<T extends Identity[0]> = T extends [unknown[], ...Guard<infer R>] ? `${Stringify<R>}${T[0]['length']}` : '';
/**
 * Returns the product of `X` and `Y` as a `string`.
 */
export declare type Multiply<X extends NumberLike, Y extends NumberLike> = Stringify<Result<[X, Y]>>;
export {};
