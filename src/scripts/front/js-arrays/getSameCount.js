/* Реализуйте и экспортируйте по умолчанию функцию getSameCount, которая считает количество общих уникальных элементов для двух массивов. Аргументы:
* Первый массив
* Второй массив
Примеры

getSameCount([], []); // 0
getSameCount([4, 4], [4, 4]); // 1
getSameCount([1, 10, 3], [10, 100, 35, 1]); // 2
getSameCount([1, 3, 2, 2], [3, 1, 1, 2]); // 3
Подсказки

* Для получения уникальных значений массива используйте uniq из библиотеки lodash. */

// Решение econavi (сделал лишнюю проверку в начале. А может не лишнюю а, guard expression, так тоже норм)
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
import { uniq } from 'lodash';

// BEGIN (write your solution here)
const getSameCount = (arr1, arr2) => {
  if (!arr1.length || !arr2.length) return 0;

  const uniqArr1 = uniq(arr1);
  const uniqArr2 = uniq(arr2);

  let count = 0;
  for (const i of uniqArr1) {
    if (uniqArr2.includes(i)) {
      count += 1;
    }
  }

  return count;
};

export default getSameCount;
// END

// Решение учителя (без проверки. В остально тоже самое)
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN
const getSameCount = (coll1, coll2) => {
  let count = 0;
  const uniqColl1 = uniq(coll1);
  const uniqColl2 = uniq(coll2);

  for (const item1 of uniqColl1) {
    for (const item2 of uniqColl2) {
      if (item1 === item2) {
        count += 1;
      }
    }
  }

  return count;
};

export default getSameCount;
// END