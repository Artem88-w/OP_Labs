'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { random } = require('./1-random.js');

const withRandom = (value, check) => {
  const original = Math.random;
  Math.random = () => value;
  try {
    check();
  } finally {
    Math.random = original;
  }
};

test('random: includes both bounds', () => {
  withRandom(0, () => assert.equal(random(15, 30), 15));
  withRandom(1 - Number.EPSILON, () => {
    assert.equal(random(15, 30), 30);
  });
});

test('random(max): uses zero as the lower bound', () => {
  withRandom(0, () => assert.equal(random(10), 0));
  withRandom(1 - Number.EPSILON, () => assert.equal(random(10), 10));
});

test('random: zero and equal bounds', () => {
  for (const value of [0, 0.5, 1 - Number.EPSILON]) {
    withRandom(value, () => {
      assert.equal(random(0), 0);
      assert.equal(random(7, 7), 7);
    });
  }
});

test('random: returns integers in a negative range', () => {
  withRandom(0, () => assert.equal(random(-5, -2), -5));
  withRandom(1 - Number.EPSILON, () => assert.equal(random(-5, -2), -2));
  for (const value of [0, 0.1, 0.3, 0.5, 0.9, 1 - Number.EPSILON]) {
    withRandom(value, () => {
      const result = random(-5, -2);
      assert.ok(Number.isInteger(result));
      assert.ok(result >= -5 && result <= -2);
    });
  }
});
