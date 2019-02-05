import { l, reverse, toString as listToString, isList, cons, reduce } from 'hexlet-pairs-data'; // eslint-disable-line

// BEGIN (write your solution here)
// Реализуйте и экспортируйте по умолчанию функцию flatten, которая делает плоским вложенный список.

// const list = l(1, 2, l(3, 5), l(l(4, 3), 2));

// // (1, 2, 3, 5, 4, 3, 2)
// flatten(list);


const makeFlatList = (elem, acc) => (isList(elem) ? reduce(makeFlatList, acc, elem) : cons(elem, acc));

const flatten = list => reverse(reduce(makeFlatList, l(), list));

export default flatten;
// END

// Решение учителя

// BEGIN
// const flatten = (list) => {
//   const iter = (elements, accumulator) =>
//     reduce((element, acc) =>
//       (!isList(element) ? cons(element, acc) : iter(element, acc)), accumulator, elements);
//
//   return reverse(iter(list, l()));
// };
//
// export default flatten;
// END
