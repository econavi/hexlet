/* tests/gt.test.js

Напишите тесты для функции _.gt(value, other), которая возвращает true в том случае, если value > other, и false в иных случаях.
gt(3, 1); // true

gt(3, 3); // false

gt(1, 3); // false

Подсказки
* _.gt
*/

//============================================================================

// Мое решение
// @ts-check

const getFunction = require('../functions');

const gt = getFunction();

// BEGIN (write your solution here)
test('gt', () => {
  expect(gt(3, 1)).toBeTruthy();
  expect(gt(1, 3)).not.toBeTruthy();
  expect(gt(3, 3)).not.toBeTruthy();
  expect(gt(3)).not.toBeTruthy();
  expect(gt()).not.toBeTruthy();
});
// END

//============================================================================

// Решение учителя
// @ts-check

const getFunction = require('../functions');

const gt = getFunction();

// BEGIN
test('gt', () => {
  expect(gt(0, 0)).toBe(false);
  expect(gt(1, 0)).toBe(true);
  expect(gt(1, -3)).toBe(true);
});
// END
