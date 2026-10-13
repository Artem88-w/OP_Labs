'use strict';

const { name } = require('./Exercises/1-let.js');
const { year } = require('./Exercises/2-const.js');
const { hello } = require('./Exercises/3-hello.js');
const { range } = require('./Exercises/4-range.js');
const { rangeOdd } = require('./Exercises/5-range-odd.js');
const { calculate } = require('./Exercises/6-calculate.js');
const { fn } = require('./Exercises/7-objects.js');
const { createUser } = require('./Exercises/8-create.js');
const arrayBook = require('./Exercises/9-array.js');
const hashBook = require('./Exercises/a-hash.js');

console.log('1. Ім’я:', name);
console.log('2. Рік народження:', year);
console.log('3. Привітання:');
hello(name);
console.log('4. Числа від 15 до 30:', range(15, 30));
console.log('5. Непарні числа від 15 до 30:', rangeOdd(15, 30));
console.log('6. Середні значення квадратів і кубів:', calculate());
console.log('7. Об’єкти після змін:', fn());
console.log('8. Новий користувач:', createUser('Marcus Aurelius', 'Roma'));
console.log('9. Телефон з масиву:', arrayBook.findPhoneByName(name));
console.log('10. Телефон з довідника:', hashBook.findPhoneByName(name));
