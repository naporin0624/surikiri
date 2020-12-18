// normalize
import normalizr, { schema } from "normalizr";
function createEntity(name, references) {
    return new schema.Entity(name, references);
}
function normalize(data, schema) {
    return normalizr.normalize(data, schema);
}
function denormalize(data, schema, entities) {
    return normalizr.denormalize(data, schema, entities);
}
export { createEntity, normalize, denormalize };
