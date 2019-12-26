/* Реализуйте функцию getSameParity, которая принимает на вход массив чисел и возвращает новый, состоящий из элементов, у которых такая же чётность, как и у первого элемента входного массива. Экспортируйте функцию по умолчанию.
Примеры

getSameParity([]);        // []
getSameParity([1, 2, 3]); // [1, 3]
getSameParity([1, 2, 8]); // [1]
getSameParity([2, 2, 8]); // [2, 2, 8]
Подсказки

* Проверка чётности - остаток от деления: item % 2 === 0 — чётное число
* Если на вход функции передан пустой массив, то она должна вернуть пустой массив. */

// Решение econavi (неуклюжая проверка для push.
// Решение учителя более грамотное)

// BEGIN (write your solution here)
const getSameParity = (coll) => {
  if (coll.length === 0) {
    return [];
  }

  const isEven = coll[0] % 2 === 0;

  const result = [];
  for (let i = 0; i < coll.length; i += 1) {
    if (isEven && coll[i] % 2 === 0) {
      result.push(coll[i]);
    }
    if (coll[i] % 2 !== 0) {
      result.push(coll[i]);
    }
  }

  return result;
};

export default getSameParity;
// END

// Решение учителя (более локаничная проверка в основном коде)
// BEGIN
const getSameParity = (coll) => {
  if (coll.length === 0) {
    return [];
  }

  const result = [];
  const remainder = coll[0] % 2;

  for (let i = 0; i < coll.length; i += 1) {
    const item = coll[i];
    if (item % 2 === remainder) {
      result.push(item);
    }
  }

  return result;
};

export default getSameParity;
// END
