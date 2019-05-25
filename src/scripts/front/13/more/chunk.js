// chunk.js
// Реализуйте и экспортируйте функцию по умолчанию, которая принимает
// на вход массив и число, которое задает размер чанка (куска).
// Функция должна вернуть массив, состоящий из чанков указанной размерности.
//
// chunk(['a', 'b', 'c', 'd'], 2);
// // → [['a', 'b'], ['c', 'd']]
//
// chunk(['a', 'b', 'c', 'd'], 3);
// // → [['a', 'b', 'c'], ['d']]

// BEGIN (write your solution here)
export default (arr, idx) => {

const iter = (elems, acc) => {
  if (!elems.length) return acc;
  const newAcc = [ ...acc, elems.slice(0, idx) ];
  return iter(elems.slice(idx), newAcc);
}

return iter(arr, []);
}
// END

// Решение учителя
// // BEGIN
// export default (coll, size) => {
//   const iter = (iterColl, acc = []) => {
//     if (iterColl.length === 0) {
//       return acc;
//     }
//     return iter(
//       iterColl.slice(size),
//       [...acc, iterColl.slice(0, size)],
//     );
//   };
//
//   return iter(coll);
// };
// // END
