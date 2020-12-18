'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var normalizr = require('normalizr');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var normalizr__default = /*#__PURE__*/_interopDefaultLegacy(normalizr);

// normalize
function createEntity(name, references) {
    return new normalizr.schema.Entity(name, references);
}
function normalize(data, schema) {
    return normalizr__default['default'].normalize(data, schema);
}
function denormalize(data, schema, entities) {
    return normalizr__default['default'].denormalize(data, schema, entities);
}

exports.createEntity = createEntity;
exports.denormalize = denormalize;
exports.normalize = normalize;
