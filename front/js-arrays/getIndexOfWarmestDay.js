/* У вас есть набор данных, описывающих изменение температуры воздуха в одном городе в течение нескольких суток. Данные представлены массивом, в котором каждый элемент — это массив, содержащий список температур в течение одних суток.
Рассмотрим статистику температур (например, по состоянию на утро, день и вечер) за три дня. Для первого дня значения температур составляют: -5°, 7°, 1°; для второго дня: 3°, 2°, 3°; и для третьего дня: -1°, -1°, 10° . Массив, отражающий такую статистику, будет выглядеть так:
const data = [
  [-5, 7, 1],
  [3, 2, 3],
  [-1, -1, 10],
];
arrays.js

Реализуйте и экспортируйте по умолчанию функцию getIndexOfWarmestDay, которая находит самый тёплый день (тот, в котором была зарегистрирована максимальная температура) и возвращает индекс этого дня в исходном массиве.
Примеры

const data = [
  [-5, 7, 1],
  [3, 2, 3],
  [-1, -1, 10],
];

getIndexOfWarmestDay(data); // 2
Подсказки

* Если на вход поступил пустой массив, то функция должна вернуть null.
* Если существует несколько дней с максимальной температурой, то функция возвращает индекс последнего из этих дней (то есть выбирается день с наибольшим индексом). */

// Решение econavi
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN (write your solution here)
const getIndexOfWarmestDay = (coll) => {
  if (coll.length === 0) return null;

  let max = coll[0][0];
  let index = 0;

  for (let i = 0; i < coll.length; i += 1) {
    for (const item of coll[i]) {
      if (item >= max) {
        max = item;
        index = i;
      }
    }
  }

  return index;
};

export default getIndexOfWarmestDay;
// END

// Решение учителя 
// (стартовое, нейтральное значение для максимальной температуры задано более грамотно с помощью Number.NEGATIVE_INFINITY)
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN
const getIndexOfWarmestDay = (data) => {
  let index = null;
  let max = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < data.length; i += 1) {
    const temperatures = data[i];
    for (const value of temperatures) {
      if (value >= max) {
        index = i;
        max = value;
      }
    }
  }

  return index;
};

export default getIndexOfWarmestDay;
// END
