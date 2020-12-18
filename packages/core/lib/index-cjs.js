'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var normalizr = require('normalizr');

// normalize
function createEntity(name, references) {
    return new normalizr.schema.Entity(name, references);
}
function normalize(data, schema) {
    return normalizr.normalize(data, schema);
}
function denormalize(data, schema, entities) {
    return normalizr.denormalize(data, schema, entities);
}

exports.createEntity = createEntity;
exports.denormalize = denormalize;
exports.normalize = normalize;
