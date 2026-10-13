'use strict';

const { random } = require('./Exercises/1-random.js');
const { generateKey } = require('./Exercises/2-generate-key.js');
const { ipToIntLoop, ipToInt } = require('./Exercises/3-ip.js');
const { introspect } = require('./Exercises/4-introspection.js');

console.log('1. random(5, 10):', random(5, 10));
console.log('1. random(10):', random(10));

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
console.log('2. Random key:', generateKey(16, characters));

console.log('3. IPv4, loop:', ipToIntLoop('10.0.0.1'));
for (const ip of [
  '127.0.0.1', '10.0.0.1', '192.168.1.10',
  '165.225.133.150', '0.0.0.0', '8.8.8.8',
]) {
  console.log(`3. ${ip}:`, ipToInt(ip));
}
console.log('3. Default address:', ipToInt());

const iface = {
  m1: (x) => [x],
  m2(x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  },
};
console.log('4. Introspection:', introspect(iface));
