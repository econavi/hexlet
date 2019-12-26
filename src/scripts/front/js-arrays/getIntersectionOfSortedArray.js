/* Реализуйте и экспортируйте по умолчанию функцию getIntersectionOfSortedArray, которая принимает на вход два отсортированных массива и находит их пересечение.
Алгоритм

Поиск пересечения двух неотсортированных массивов — операция, в рамках которой выполняется вложенный цикл с полной проверкой каждого элемента первого массива на вхождение во второй.
Сложность данного алгоритма O(n * m) (произведение n и m), где n и m — размерности массивов. Если массивы отсортированы, то можно реализовать алгоритм, сложность которого уже O(n + m), что значительно лучше.
Суть алгоритма довольно проста. В коде вводятся два указателя (индекса) на каждый из массивов. Начальное значение каждого указателя 0. Затем идёт проверка элементов, находящихся под этими индексами в обоих массивах. Если они совпадают, то значение заносится в результирующий массив, а оба индекса инкрементируются. Если значение в первом массиве больше, чем во втором, то инкрементируется указатель второго массива, иначе — первого.
Примеры

getIntersectionOfSortedArray([10, 11, 24], [10, 13, 14, 18, 24, 30]); // [10, 24]

getIntersectionOfSortedArray([10, 11, 24], [-2, 3, 4]); // []

getIntersectionOfSortedArray([], [2]); // [] */


// Решение econavi (через цикл, как у учителя)
// BEGIN (write your solution here)
const getIntersectionOfSortedArray = (arr1, arr2) => {
  let count1 = 0;
  let count2 = 0;
  let flag;
  const result = [];

  do {
    flag = true;
    if (count1 >= arr1.length || count2 >= arr2.length) {
      return result;
    }

    if (arr1[count1] === arr2[count2]) {
      result.push(arr1[count1]);
      count1 += 1;
      count2 += 1;
    }

    if (arr1[count1] > arr2[count2]) {
      count2 += 1;
    }

    if (arr1[count1] < arr2[count2]) {
      count1 += 1;
    }
  } while (flag);

  return result;
};

export default getIntersectionOfSortedArray;
// END


// Решение econavi  (через рекурсию)
// BEGIN (write your solution here)
const getIntersectionOfSortedArray = (arr1, arr2, acc = []) => {
  const size1 = arr1.length;
  const size2 = arr2.length;
  if (!size1 || !size2) {
    return acc;
  }

  if (arr1[0] > arr2[0]) {
    arr2.shift();
    return getIntersectionOfSortedArray(arr1, arr2, acc);
  }

  if (arr1[0] < arr2[0]) {
    arr1.shift();
    return getIntersectionOfSortedArray(arr1, arr2, acc);
  }

  const newAcc = [...acc, arr1[0]];
  arr1.shift();
  arr2.shift();

  return getIntersectionOfSortedArray(arr1, arr2, newAcc);
};

export default getIntersectionOfSortedArray;
// END

// Решение учителя
// Решение учителя более лаконичное — используется более простая проверка в условии выхода из цикла while.
// Я использовал do...while и дополнительный флаг для выхода из цикла.
// Была попытка использовать while (true), но Линтер не захотел пропускать.
// BEGIN
const getIntersectionOfSortedArray = (arr1, arr2) => {
  const size1 = arr1.length;
  const size2 = arr2.length;

  let i1 = 0;
  let i2 = 0;
  const result = [];

  while (i1 < size1 && i2 < size2) {
    if (arr1[i1] === arr2[i2]) {
      result.push(arr1[i1]);
      i1 += 1;
      i2 += 1;
    } else if (arr1[i1] > arr2[i2]) {
      i2 += 1;
    } else {
      i1 += 1;
    }
  }

  return result;
};

export default getIntersectionOfSortedArray;
// END
