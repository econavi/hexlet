/*
flatten.js

Реализуйте и экспортируйте по умолчанию функцию flatten, которая делает плоским вложенный массив.
const list = [1, 2, [3, 5], [[4, 3], 2]];

// [1, 2, 3, 5, 4, 3, 2]
flatten(list);
Подсказки

* Array.isArray - проверяет является ли элемент массивом.
*/

// BEGIN (write your solution here)
const flatten = arr => arr
  .reduce((acc, item) => [...acc, ...Array.isArray(item)
    ? flatten(item) : [item]], []);

export default flatten;
// END

/*
Решение учителя

// BEGIN
const flatten = list => list.reduce((acc, element) => {
  const result = (Array.isArray(element) ? [...acc, ...flatten(element)] : [...acc, element]);
  return result;
}, []);

export default flatten;
// END
*/
