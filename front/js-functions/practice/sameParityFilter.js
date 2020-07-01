/* sameParityFilter.js

Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив и возвращает новый, состоящий из элементов, у которых такая же чётность, как и у первого элемента входного массива.
Примеры

sameParity([-1, 0, 1, -3, 10, -2]); // [-1, 1, -3]
sameParity([2, 0, 1, -3, 10, -2]); // [2, 0, 10, -2]
sameParity([]); // [] */
 

// Мое решение: 
// Лохонулся — нужно было возвращать булево значение в isEven, как у учителя.
// Не пришлось бы костылять с Math.abs
// 0 === -0 // true

// BEGIN (write your solution here)
const isEven = (num) => num % 2;

export default (arr) => {
  const status = Math.abs(isEven(arr[0]));

  return arr.filter(
    (el) => Math.abs(isEven(el)) === status,
  );
};
// END


// Решение учителя
// BEGIN
const isEven = (num) => num % 2 === 0;

export default (arr) => {
  if (arr.length === 0) {
    return [];
  }

  const firstItemParity = isEven(arr[0]);
  return arr.filter((el) => isEven(el) === firstItemParity);
};
// END

