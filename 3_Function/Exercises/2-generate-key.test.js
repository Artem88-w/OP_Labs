'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { generateKey } = require('./2-generate-key.js');

test('generateKey: correct length and allowed characters', () => {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  for (const length of [0, 1, 16, 100]) {
    const key = generateKey(length, characters);
    assert.equal(typeof key, 'string');
    assert.equal(key.length, length);
    for (const character of key) {
      assert.ok(characters.includes(character));
    }
  }
});

test('generateKey: selects the first and last characters', () => {
  const original = Math.random;
  const values = [0, 0.25, 0.5, 1 - Number.EPSILON];
  let index = 0;
  Math.random = () => values[index++];
  try {
    assert.equal(generateKey(4, 'abcd'), 'abcd');
  } finally {
    Math.random = original;
  }
});

test('generateKey: a single-character set', () => {
  assert.equal(generateKey(5, 'x'), 'xxxxx');
});

test('generateKey: zero length produces an empty string', () => {
  assert.equal(generateKey(0, ''), '');
});
