import type { Tail, Tuple } from '../';
declare type Populate<S extends string, T extends unknown[] = []> = S extends '' ? T : `${T['length']}` extends S ? T : Populate<S, [...T, unknown]>;
declare type Mod<X extends unknown[], Y extends any[], Z extends any[]> = [
    ...X,
    ...Y[0],
    ...(Z[0] extends undefined ? [] : Z[0])
] extends infer U ? U extends [...Tuple<unknown, 10>, ...infer R] ? [R, [unknown]] : [U, []] : never;
declare type Iterate<X extends any[], Y extends any[], T extends any[] = [], U extends any[] = []> = X[0] extends undefined ? Y[0] extends undefined ? U extends [unknown] ? [[unknown], ...T] : T : Iterate<Y, X, T, U> : Iterate<Tail<X>, Tail<Y>, [Mod<U, X, Y>[0], ...T], Mod<U, X, Y>[1]>;
declare type Split<S extends string> = S extends `${infer F}${infer R}` ? [Populate<F>, ...Split<R>] : Populate<S>;
declare type Swap<S extends string, U extends string = ''> = S extends `${infer F}${infer R}` ? Swap<R, `${F}${U}`> : U;
declare type Result<T extends [number, number]> = Iterate<Split<Swap<`${T[0]}`>>, Split<Swap<`${T[1]}`>>>;
declare type Stringify<T extends unknown[], U extends string = ''> = T extends [unknown[], ...infer R] ? Stringify<R, `${U}${T[0]['length']}`> : U;
/**
 * Returns the sum of `X` and `Y` as a `string`.
 *
 * @example
 * ```ts
 * type T0 = Sum<92385923, 2190476>;
 * //	^ = type T0 = "94576399"
 * ```
 */
export declare type Sum<X extends number, Y extends number> = Stringify<Result<[X, Y]>>;
export {};
