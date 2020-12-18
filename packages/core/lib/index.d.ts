import { schema } from "normalizr";
import { Flatten, NestArray, Nothing, ReplaceArray, UnionToIntersection } from "./utility";
declare const $entity: unique symbol;
declare type ID = string | number;
declare type Entity<T extends string> = {
    readonly [$entity]?: T;
    id: ID;
};
declare type ReferenceKeys<T> = {
    [K in keyof T]-?: Exclude<Flatten<T[K]>, Nothing> extends Entity<string> ? K : never;
}[keyof T];
declare type References<T> = {
    [K in ReferenceKeys<T>]-?: ReplaceArray<Exclude<T[K], Nothing>, schema.Entity<Flatten<Exclude<T[K], Nothing>>>>;
};
declare type Normalize<T> = {
    [K in keyof T]: Exclude<Flatten<T[K]>, Nothing> extends Entity<string> ? ReplaceArray<T[K], ID> : T[K];
};
declare type PickShallowEntity<T> = {
    [K in keyof T]-?: Exclude<Flatten<T[K]>, Nothing> extends Entity<string> ? Exclude<Flatten<T[K]>, Nothing> : never;
}[keyof T];
declare type UnionEntities<T> = T extends never ? never : PickShallowEntity<T> | UnionEntities<PickShallowEntity<T>>;
declare type ToWithKey<T> = T extends Entity<infer U> ? {
    [K in U]: T;
} : never;
declare type Schema<T> = Flatten<T> extends Entity<string> ? ReplaceArray<T, schema.Entity<Flatten<T>>> : never;
declare type MapEntities<T> = {
    [K in keyof T]: {
        [key: string]: Normalize<T[K]>;
    };
};
declare type Entities<T> = MapEntities<UnionToIntersection<ToWithKey<UnionEntities<T>>>>;
declare type Normalized<T> = {
    result: ReplaceArray<T, ID>;
    entities: Entities<Flatten<T>>;
};
declare function createEntity<E>(name: E extends Entity<infer U> ? U : never, references: References<E>): schema.Entity<E>;
declare function normalize<T>(data: T, schema: Schema<T>): Normalized<T>;
declare function denormalize<D extends NestArray<E["id"]>, E extends Entity<string>>(data: D, schema: ReplaceArray<D, schema.Entity<E>>, entities: Entities<E>): E;
export { Entity, Normalize, MapEntities, createEntity, normalize, denormalize };
