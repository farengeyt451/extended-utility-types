import type { Compare } from '../';
export declare type LessThan<X extends number, Y extends number> = Compare<X, Y> extends -1 ? true : false;
