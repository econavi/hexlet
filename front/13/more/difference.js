// difference.js
// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход два массива,
// а возвращает массив, составленный из элементов первого, которых нет во втором.
//
// difference([2, 1], [2, 3]);
// // → [1]

// BEGIN (write your solution here)
const difference = (arr1, arr2) => {
  return arr1.filter(el => !arr2.includes(el))
};

export default difference;
// END

// Решение учителя
// // BEGIN
// export default (array1, array2) => {
//   const set = new Set(array2);
//   return array1.filter(value => !set.has(value));
// };
// // END
