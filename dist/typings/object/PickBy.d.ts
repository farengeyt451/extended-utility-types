import type { KeyBy } from '../';
/**
 * Constructs a type by picking `K` based on `U` from `T`.
 */
export declare type PickBy<T, U, K extends KeyBy<T, U>> = Pick<T, K>;
