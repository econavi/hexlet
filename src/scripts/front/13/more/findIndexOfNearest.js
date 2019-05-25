// findIndexOfNearest.js
// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив чисел и искомое число.
// Задача функции — найти в массиве ближайшее число к искомому и вернуть его индекс в массиве.
//
// Если в массиве содержится несколько чисел, одновременно являющихся ближайшими к искомому числу,
// то возвращается наименьший из индексов ближайших чисел.
//
// Примеры
// findIndexOfNearest([], 2);              // null
// findIndexOfNearest([15, 10, 3, 4], 0);  // 2
// findIndexOfNearest([7, 5, 3, 2], 4);    // 1
// findIndexOfNearest([7, 5, 4, 4, 3], 4); // 2

// BEGIN (write your solution here)
const findIndexOfNearest = (arr, number) => {
  if (!arr.length) return null;

  const objectsArr = arr.reduce((acc, elem, index) => {
    return [...acc, { index: index, value: elem }];
  }, []);

  const sortedArr = objectsArr.sort((a, b) => {
    if (a.value < b.value) return -1;
    if (a.value > b.value) return 1;
    if (a.value === b.value) return 0;
  });

  const getResult = (arr) => {
    const maxObj = arr.filter(el => el.value >= number)[0];
    const minObj = arr.filter(el => el.value < number).sort((a,b) => b - a)[0];
    const toMin = minObj ? number - minObj.value : 0;
    const toMax = maxObj.value - number;

    if (toMin && toMin < toMax) return minObj.index;

    return maxObj.index;
  };

  return getResult(sortedArr);

};

export default findIndexOfNearest;
// END

// Решение учителя
// // BEGIN
// export default (arr, num) => {
//   if (arr.length === 0) {
//     return null;
//   }
//   return arr.reduce(
//     (currIndex, e, i) => (Math.abs(e - num) < Math.abs(arr[currIndex] - num) ? i : currIndex),
//     0,
//   );
// };
// // END
