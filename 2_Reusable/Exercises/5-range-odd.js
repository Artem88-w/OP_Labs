'use strict';


const rangeOdd = (start, end) => {
  const numbers = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) numbers.push(i);
  }
  return numbers;
};

module.exports = { rangeOdd };
