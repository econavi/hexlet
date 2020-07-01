// difference.js

// Реализуйте и экспортируйте функцию по умолчанию,
// которая принимает на вход два множества и возвращает множество,
// составленное из таких элементов, которые есть в первом множестве,
// но нет во втором.

// difference(new Set([2, 1]), new Set([2, 3]));
// → [1]

// BEGIN (write your solution here)
export default (set1, set2) => {
  const result = Array.from(set1).reduce((acc, elem) => {
    if (!set2.has(elem)) {
      return acc.add(elem);
    }
    return acc;
  }, new Set());

  return result;
};
// END

// Решение учителя
// BEGIN
// export default (set1, set2) =>
//   new Set(Array.from(set1).filter(value => !set2.has(value)));
// END
