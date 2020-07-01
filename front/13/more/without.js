// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход
// массив и элементы, которые должны отсутствовать в возвращаемом массиве.
//
// without([2, 1, 2, 3], 1, 2, 5);
// // → [3]

// BEGIN (write your solution here)
export default (arr, ...nums) => arr.filter(el => !nums.includes(el));
// END

// Решение учителя
// // BEGIN
// export default (array, ...rest) => {
//   const set = new Set(rest);
//   return array.filter(value => !set.has(value));
// };
// // END
