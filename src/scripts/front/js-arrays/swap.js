/* Реализуйте и экспортируйте по умолчанию функцию swap, которая меняет местами два элемента относительно переданного индекса. Например, если передан индекс 5, то функция меняет местами элементы, находящиеся по индексам 4 и 6.
Параметры функции:
* Массив
* Индекс
Если хотя бы одного из индексов не существует, функция возвращает исходный массив.
import swap from './arrays';

const names = ['john', 'smith', 'karl'];

const result = swap(names, 1);
console.log(result); // => ['karl', 'smith', 'john']

const result = swap(names, 2);
console.log(result); // => ['john', 'smith', 'karl']

const result = swap(names, 0);
console.log(result); // => ['john', 'smith', 'karl'] */

// Решение econavi
/* eslint-disable no-param-reassign */
// BEGIN (write your solution here)
export default (arr, index) => {
  if (index < 1 || index > arr.length - 2) {
    return arr;
  }

  const first = arr[index - 1];
  const second = arr[index + 1];

  arr[index - 1] = second;
  arr[index + 1] = first;

  return arr;
};
// END

// Решение учителя 
// (на мой взгляд с более очевидной проверкой переданного индекса — center.
// В моем решении я использую магическое число 2, что не очень хорошо)

/* eslint-disable no-param-reassign */
// BEGIN
const swap = (coll, center) => {
  const lastIndex = coll.length - 1;
  const isSwappable = (center > 0) && (center < lastIndex);

  if (!isSwappable) {
    return coll;
  }

  const prevIndex = center - 1;
  const nextIndex = center + 1;

  const temp = coll[prevIndex];
  coll[prevIndex] = coll[nextIndex];
  coll[nextIndex] = temp;

  return coll;
};

export default swap;
// END
