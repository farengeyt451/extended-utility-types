import type { Slice, Tuple } from '../';
/**
 * Returns the difference of `X` and `Y`.
 */
export declare type Subtract<X extends number, Y extends number> = Slice<Tuple<unknown, X>, Y>['length'] & number;
