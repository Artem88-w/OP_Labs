const values = [
  7, 'hello', true, -12, false, 'JavaScript', 0, 3.5,
  'student', true, null, undefined, { id: 1 }, [1, 2],
  25n, Symbol('tag'), () => 'done', 'finish',
];

const typeCounters = {};

for (const value of values) {
  const type = typeof value;

  if (typeCounters[type] === undefined) {
    typeCounters[type] = 0;
  }

  typeCounters[type] += 1;
}

console.dir(typeCounters);