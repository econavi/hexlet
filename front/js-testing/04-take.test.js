/* tests/take.test.js

Напишите тесты для функции without(coll, [values]), которая принимает первым параметром массив и возвращает его копию, из которой исключены значения, переданные вторым и последующими параметрами.
_.without([2, 1, 2, 3], 1, 2); // [3]
Подсказки

* _.without
*/

//=============================================================

// Мое решение
// @ts-check

const getFunction = require('../functions');

const without = getFunction();

// BEGIN (write your solution here)
test('without', () => {
  expect(without([])).toEqual([]);
  expect(without([1, 2, 3])).toEqual([1, 2, 3]);
  expect(without([2, 1, 2, 3], 1, 2)).toEqual([3]);
  expect(without([2, 1, 2, 3], 6, 1)).toEqual([2, 2, 3]);
});
// END

//=============================================================

// Решение учителя
// @ts-check

const getFunction = require('../functions');

const without = getFunction();

// BEGIN
test('without', () => {
  expect(without([], 3)).toEqual([]);
  expect(without([3, 8, 9, 8, 10], 8, 10)).toEqual([3, 9]);
});
// END
