const values = [
  7, 'hello', true, -12, false, 'JavaScript', 0, 3.5,
  'student', true, null, undefined, { id: 1 }, [1, 2],
  25n, Symbol('tag'), () => 'done', 'finish',
];

const typeCounters = {
  number: 0,
  string: 0,
  boolean: 0,
  object: 0,
  undefined: 0,
  bigint: 0,
  symbol: 0,
  function: 0,
};

for (const value of values) {
  const type = typeof value;
  typeCounters[type] += 1;
}

console.dir(typeCounters);