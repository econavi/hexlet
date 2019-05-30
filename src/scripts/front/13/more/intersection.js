// intersection.js
// Реализуйте и экспортируйте функцию по умолчанию, которая находит пересечение двух массивов. Пересечение двух массивов A и B — это массив только с теми элементами A и B, которые одновременно принадлежат обоим массивам, без дублей.
//
// Обратите внимание, что порядок значений в пересечении должен соответствовать порядку появления этих значений в исходных массивах (сначала в первом переданном массиве, потом - во втором).
//
// intersection([2, 1], [2, 3]);
// // → [2]
//
// intersection([3, 1, 3], [3, 3, 2]);
// // → [3]
//
// intersection(
//       ['kirill', 'rakhim', 'alex', 'dima', 'dzhamshut'],
//       ['ippolit', 'rakhim', 'dima', 'schtirlitz', 'kirill', 'alex', 'alibaba'],
//     );
// // → ['kirill', 'rakhim', 'alex', 'dima']

// BEGIN (write your solution here)
const intersection = (arr1, arr2) => {
  const set = new Set(arr1);
  return [...set].filter(el => arr2.includes(el));
};

export default intersection;
// END

// Решение учителя
//
// // BEGIN
// export default (array1, array2) => {
//   const filtered = array1.filter(value => array2.includes(value));
//   return [...new Set(filtered)];
// };
// // END
