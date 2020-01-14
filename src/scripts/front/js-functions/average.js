/* math.js
Реализуйте и экспортируйте по умолчанию функцию average, которая возвращает среднее арифметическое всех переданных аргументов. Если функции не передать ни одного аргумента, то она должна вернуть null.

Примеры использования
average(0); // 0
average(0, 10); // 5
average(-3, 4, 2, 10); // 3.25
average(); // null
Подсказки
Используйте функцию sum из библиотеки lodash. */

// Решение econavi
import { sum } from 'lodash';

// BEGIN (write your solution here)
const average = (...numbers) => {
  const { length } = numbers;
  if (!length) return null;

  return sum(numbers) / length;
};

export default average;
// END

// Решение учителя
import { sum } from 'lodash';

// BEGIN
const average = (...numbers) => {
  const count = numbers.length;

  if (count === 0) {
    return null;
  }

  return sum(numbers) / count;
};

export default average;
// END
