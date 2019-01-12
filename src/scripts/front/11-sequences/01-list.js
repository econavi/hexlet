import { l, cons, head, tail, isEmpty, toString as listToString } from 'hexlet-pairs-data';  // eslint-disable-line

// Все создаваемые функции, в рамках этого задания, должны быть
// реализованы независимо друг от друга, то есть их нельзя использовать для реализации друг друга.

// Реализуйте и экспортируйте функцию has, которая проверяет,
// является ли переданное значение элементом списка.

export const has = (list, num) => {
  if (isEmpty(list)) return false;
  if (head(list) === num) return true;
  return has(tail(list), num);
};

// const numbers = l(3, 4, 5, 8);
// has(numbers, 8); // true
// has(numbers, 0); // false

// Реализуйте и экспортируйте функцию reverse, которая переворачивает список,
// используя итеративный процесс.

export const reverse = (list) => {
  if (isEmpty(list)) return list;

  const iter = (list, accumList) => { // eslint-disable-line no-shadow
    if (isEmpty(list)) return accumList;
    return iter(tail(list), cons(head(list), accumList));
  };

  return iter(list, l());
};

// const numbers = l(3, 4, 5);
// reverse(numbers); // (5, 4, 3)

// Реализуйте и экспортируйте функцию concat, которая соединяет два списка,
// используя рекурсивный процесс (попробуйте сначала представить,
// как работала бы функция copy, которая принимает на вход список и возвращает его копию).

export const concat = (list, list2) => {
  if (isEmpty(list)) return list2;
  return cons(head(list), concat(tail(list), list2));
};

export const copy = (list) => {
  if (isEmpty(list)) return list;
  return cons(head(list), copy(tail(list)));
};

// const numbers = l(3, 4, 5, 8);
// const numbers2 = l(3, 2, 9);
// concat(numbers, numbers2); // (3, 4, 5, 8, 3, 2, 9)
