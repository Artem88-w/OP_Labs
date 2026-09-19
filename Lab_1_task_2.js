function inc(num) {
  num.n += 1;
}

const obj = { n: 777 };
inc(obj);

console.dir(obj);