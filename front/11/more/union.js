// union.js
// Напишите и экспортируйте по умолчанию функцию union, которая принимает на вход два списка и возвращает третий, являющийся объединением уникальных значений двух исходных списков.
//
// const list1 = l(2, 3, 2, 1, 7);
// const list2 = l(1, 5, 3, 5, 8, 9);
//
// const result = union(list1, list2);
// // (2, 3, 1, 7, 5, 8, 9)
// Подсказки
// Порядок уникальных значений в итоговом списке должен соответствовать порядку появления этих значений в исходных списках (сначала в первом переданном списке, потом - во втором).

// eslint-disable-next-line
import { l, isEmpty, cons, reduce, has, reverse, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
const uniqueList = (list) => {
  const makeUniqueList = (elem, acc) => (!(has(acc, elem)) ? cons(elem, acc) : acc);
  const result = reduce(makeUniqueList, l(), list);
  return reverse(result);
};

const concatLists = (elem, acc) => {
  return cons(elem, acc);
};

const union = (list1, list2) => {
  const uniqueList1 = uniqueList(list1);
  const uniqueList2 = uniqueList(list2);
  const newList = reduce(concatLists, uniqueList2, reverse(uniqueList1));

  return uniqueList(newList);
};

export default union;
// END

// Решение учителя

// BEGIN
// const appendUniq = (base, list) => {
//   const result = reduce(
//     (value, acc) => (has(acc, value) ? acc : cons(value, acc)),
//     reverse(base),
//     list,
//   );
//   return reverse(result);
// };
//
// export default (list1, list2) => appendUniq(appendUniq(l(), list1), list2);
// END
