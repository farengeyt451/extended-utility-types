declare type RightShift<N> = N extends `${infer T}${infer U}` ? (T extends '0' | '1' ? `${T}${RightShift<U>}` : never) : never;
export declare type BitRightShift<N> = `0${RightShift<N>}`;
export {};
