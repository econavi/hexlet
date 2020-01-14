/* arrays.js

Реализуйте и экспортируйте по умолчанию функцию union(...arrays), которая находит объединение всех переданных массивов. Функция принимает на вход от одного массива и больше. Результирующий массив должен содержать только уникальные элементы всех переданных массивов.
Примеры использования

union([3]); // [3]
union([3, 2], [2, 2, 1]); // [3, 2, 1]
union(['a', 3, false], [true, false, 3], [false, 5, 8]); // ['a', 3, false, true, 5, 8]

Объединение работает только для плоских массивов, то есть массивов внутри которых нет других массивов.
Подсказки

* Используйте метод concat для соединения массивов. С работой данного метода можно ознакомиться в документации.
* Для получения уникальных значений массива используйте функцию uniq из библиотеки lodash. Ознакомиться с работой данной функции можно на странице документации библиотеки. */

// Моё решение (через жопу)
import { uniq } from 'lodash';

// BEGIN (write your solution here)
const union = (...data) => {
  const result = [];

  for (const item of data) {
    result.push(...item);
  }

  return uniq(result);
};

export default union;
// END

// Решение учителя
import { uniq } from 'lodash';

// BEGIN
export default (first, ...rest) => {
  const concated = first.concat(...rest);
  return uniq(concated);
};
// END
