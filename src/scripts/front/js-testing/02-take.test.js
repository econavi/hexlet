/* tests/take.test.js

Напишите тесты для функции take(items, n), которая возвращает первые n элементов из массива:
take([1, 2, 3], 2); // [1, 2]
take([], 2); // []
take([4, 3], 9); // [4, 3]
Подсказки

* _.take
* Выберите правильный способ сравнения: по ссылке или по значению */

// ==========================================================

// Мое решение
const assert = require('assert');
const getFunction = require('../functions');

const take = getFunction();

// BEGIN (write your solution here)
assert.deepEqual(take([]), []);
assert.deepEqual(take([1, 2, 3], 2), [1, 2]);
assert.deepEqual(take([1, 2, 3], 9), [1, 2, 3]);
assert.deepEqual(take([1, 2, 3]), [1]);
// END

// ==========================================================

// Решение учителя
const assert = require('assert');
const getFunction = require('../functions');

const take = getFunction();

// BEGIN
assert.deepEqual(take(['one', 'two', 8], 9), ['one', 'two', 8]);
assert.deepEqual(take([1, 2]), [1]);
assert.deepEqual(take(['one', 'two', 'three'], 2), ['one', 'two']);
assert.deepEqual(take(['one', 'two', 'three'], 0), []);
assert.deepEqual(take([]), []);
// END
