/* Реализуйте и экспортируйте по умолчанию функцию bubbleSort, которая сортирует массив используя пузырьковую сортировку. Постарайтесь не подглядывать в текст теории и попробуйте воспроизвести алгоритм по памяти.
import bubbleSort from '../arrays';

bubbleSort([]); // []
bubbleSort([3, 10, 4, 3]); // [3, 3, 4, 10] */

// Решение econavi
/* eslint-disable no-param-reassign */
// BEGIN (write your solution here)
const bubbleSort = (arr) => {
  let size = arr.length;
  let flag;
  do {
    flag = false;

    for (let i = 0; i < size; i += 1) {
      if (arr[i] > arr[i + 1]) {
        const tmpl = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmpl;
        flag = true;
      }
    }

    size -= 1;
  } while (flag);

  return arr;
};

export default bubbleSort;
// END

// Решение учителя
/* eslint-disable no-param-reassign */
// BEGIN
const bubbleSort = (arr) => {
  let size = arr.length;
  let swapped;
  do {
    swapped = false;
    const stepsCount = size - 1;
    for (let i = 0; i < stepsCount; i += 1) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    size -= 1;
  } while (swapped);

  return arr;
};

export default bubbleSort;
// END
