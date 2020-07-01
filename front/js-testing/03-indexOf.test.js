/* tests/indexOf.test.js

Напишите тесты для функции indexOf(items, value, [fromIndex=0]), которая возвращает индекс первого вхождения переданного элемента в массив, начиная поиск с индекса fromIndex, значение которого по умолчанию равно нулю:
indexOf([1, 2, 1, 2], 2); // 1
indexOf([1, 2, 1, 2], 2, 2); // 3
indexOf([2, 'one', 'cat', false], 8); // -1
Подсказки
* _.indexOf
*/


// ==========================================================

// Мое решение
// @ts-check

const assert = require('power-assert');
const getFunction = require('../functions');

const indexOf = getFunction();

// BEGIN (write your solution here)
assert(indexOf([]) === -1);
assert(indexOf([1, 2, 1, 2], 2) === 1);
assert(indexOf([1, 2, 1, 2], 2, 2) === 3);
assert(indexOf([2, 'one', 'cat', false], 8) === -1);

// END

// ==========================================================

// Решение учителя
// @ts-check

const assert = require('power-assert');
const getFunction = require('../functions');

const indexOf = getFunction();

// BEGIN
assert(indexOf(['one', 'two', 8], 'two') === 1);
assert(indexOf([1, 8, 9, 3, 9], 9) === 2);
assert(indexOf([1, 8, 9, 3, 9], 9, 3) === 4);
assert(indexOf([], 9) === -1);
// END
