import type { Absolute } from '../';
export declare type IsNegative<N extends number> = Absolute<N> extends N ? false : true;
