'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { introspect } = require('./4-introspection.js');

test('introspect: assignment example', () => {
  const iface = {
    m1: (x) => [x],
    m2(x, y) {
      return [x, y];
    },
    m3(x, y, z) {
      return [x, y, z];
    },
  };
  assert.deepEqual(introspect(iface), [
    ['m1', 1],
    ['m2', 2],
    ['m3', 3],
  ]);
});

test('introspect: skips non-function properties', () => {
  const iface = {
    name: 'Artem',
    year: 2008,
    enabled: true,
    data: null,
    items: [],
    run() {},
  };
  assert.deepEqual(introspect(iface), [['run', 0]]);
});

test('introspect: an empty object', () => {
  assert.deepEqual(introspect({}), []);
});

test('introspect: own keys without changing the object', () => {
  const iface = Object.create({ inherited: () => null });
  const own = (x, y) => x + y;
  iface.own = own;
  iface.value = 10;
  assert.deepEqual(introspect(iface), [['own', 2]]);
  assert.deepEqual(Object.keys(iface), ['own', 'value']);
  assert.equal(iface.own, own);
  assert.equal(iface.value, 10);
});
