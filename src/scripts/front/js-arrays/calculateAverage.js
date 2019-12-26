/* Реализуйте и экспортируйте по умолчанию функцию calculateAverage, которая высчитывает среднее арифметическое элементов массива. Благодаря этой функции мы наконец-то посчитаем среднюю температуру по больнице :)
Примеры

const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5];
calculateAverage(temperatures1); // 38.5

const temperatures2 = [36, 37.4, 39, 41, 36.6];
calculateAverage(temperatures2); // 38
В случае пустого массива функция должна вернуть значение null (используйте в коде для этого guard expression):
const temperatures = [];
calculateAverage(temperatures); // => null */

// Решение econavi
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN (write your solution here)
export default (arr) => {
  const size = arr.length;
  if (!size) return null;
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum / size;
};
// END

// Решение учителя (совпадает)
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN
export default (coll) => {
  const count = coll.length;

  if (count === 0) {
    return null;
  }

  let sum = 0;
  for (const item of coll) {
    sum += item;
  }

  return sum / count;
};
// END
