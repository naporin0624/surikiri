export declare type Nothing = undefined | null;
export declare type Flatten<T> = T extends Array<infer U> ? Flatten<U> : T;
export declare type NestArray<T> = T | Array<NestArray<T>>;
export declare type ReplaceArray<T, V> = T extends Array<infer U> ? Array<ReplaceArray<U, V>> : V;
export declare type UnionToIntersection<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
