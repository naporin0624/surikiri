import { schema, normalize as normalize$1, denormalize as denormalize$1 } from 'normalizr';

// normalize
function createEntity(name, references) {
    return new schema.Entity(name, references);
}
function normalize(data, schema) {
    return normalize$1(data, schema);
}
function denormalize(data, schema, entities) {
    return denormalize$1(data, schema, entities);
}

export { createEntity, denormalize, normalize };
