/* Реализуйте и экспортируйте по умолчанию функцию addPrefix, которая добавляет к каждому элементу массива переданный префикс и возвращает получившийся массив. Функция предназначена для работы со строковыми элементами. Аргументы:
* Массив
* Префикс
После префикса автоматически добавляется пробел.
import addPrefix from './arrays';

const names = ['john', 'smith', 'karl'];

const newNames = addPrefix(names, 'Mr');
console.log(newNames);
// => ['Mr john', 'Mr smith', 'Mr karl'];
Подсказки

* Не меняйте исходный массив */

// Решение econavi
// BEGIN (write your solution here)
export default (arr, prefix) => {
  if (!arr.length) return [];
  const newArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    newArr.push(`${prefix} ${arr[i]}`);
  }

  return newArr;
};
// END

// Решение учителя (нет проверки на пустой массив)
// BEGIN
export default (coll, prefix) => {
  const result = [];

  for (let i = 0; i < coll.length; i += 1) {
    result[i] = `${prefix} ${coll[i]}`;
  }

  return result;
};
// END
