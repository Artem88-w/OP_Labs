'use strict';

// First version: shift each byte and sum the values in a loop.
const ipToIntLoop = (ip = '127.0.0.1') => {
  const bytes = ip.split('.').map(Number);
  let result = 0;
  for (let i = 0; i < bytes.length; i++) {
    const shift = (3 - i) * 8;
    result += bytes[i] << shift;
  }
  return result;
};

// Optimized version: apply the same shifts and sum using reduce.
const ipToInt = (ip = '127.0.0.1') => {
  const bytes = ip.split('.').map(Number);
  return bytes.reduce((result, byte, i) => {
    const shift = (3 - i) * 8;
    return result + (byte << shift);
  }, 0);
};

module.exports = { ipToIntLoop, ipToInt };
