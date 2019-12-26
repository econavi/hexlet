/* Реализуйте и экспортируйте по умолчанию функцию calculateSum, которая высчитывает сумму всех элементов массива, которые делятся без остатка на 3 (три)

Примеры:
const coll1 = [8, 9, 21, 19, 18, 22, 7];
calculateSum(coll1); // 48

const coll2 = [2, 0, 17, 3, 9, 15, 4];
calculateSum(coll2); // 27

В случае пустого массива функция должна вернуть значение null (используйте в коде для этого guard expression):
const coll = [];
calculateAverage(coll); // null */

// Решение econavi
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN (write your solution here)
export default (coll) => {
  if (!coll.length) return null;

  let sum = 0;

  for (const num of coll) {
    if (num % 3 === 0) {
      sum += num;
    }
  }

  return sum;
};
// END

// Решение учителя (совпадает)
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN
export default (coll) => {
  if (coll.length === 0) {
    return null;
  }

  let sum = 0;
  for (const item of coll) {
    if (item % 3 === 0) {
      sum += item;
    }
  }

  return sum;
};
// END
