'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { ipToIntLoop, ipToInt } = require('./3-ip.js');

const cases = [
  ['127.0.0.1', 2130706433],
  ['10.0.0.1', 167772161],
  ['192.168.1.10', -1062731510],
  ['165.225.133.150', -1511946858],
  ['0.0.0.0', 0],
  ['8.8.8.8', 0x08080808],
  ['1.2.3.4', 0x01020304],
  ['128.0.0.0', -2147483648],
  ['255.255.255.255', -1],
];

for (const [name, convert] of [
  ['loop', ipToIntLoop],
  ['reduce', ipToInt],
]) {
  test(`IPv4 (${name}): examples and boundary values`, () => {
    for (const [ip, expected] of cases) {
      assert.equal(convert(ip), expected, ip);
    }
  });

  test(`IPv4 (${name}): default address`, () => {
    assert.equal(convert(), 2130706433);
    assert.equal(convert(undefined), 2130706433);
  });
}
