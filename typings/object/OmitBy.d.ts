import type { KeyBy } from '../';
/**
 * Constructs a type by omitting `K` based on `U` from `T`.
 */
export declare type OmitBy<T, U, K extends KeyBy<T, U>> = Omit<T, K>;
