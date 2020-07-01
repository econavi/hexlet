/* Реализуйте и экспортируйте по умолчанию функцию get, которая извлекает из массива элемент по указанному индексу, если индекс существует, либо возвращает значение по умолчанию. Функция принимает на вход три аргумента:
* Массив
* Индекс
* Значение по умолчанию (равно null)
Примеры

cities = ['moscow', 'london', 'berlin', 'porto'];

get(cities, 1); // london
get(cities, 4); // null
get(cities, 10, 'paris'); // paris */

// Решение econavi
// BEGIN (write your solution here)
const get = (arr, index, defaultValue = null) => {
  if (index < 0 || index > arr.length - 1) return defaultValue;
  return arr[index];
};

export default get;
// END

// Решение учителя (более грамотная проверка)
// BEGIN
const get = (arr, index, defaultValue = null) => {
  if (arr[index] === undefined) {
    return defaultValue;
  }

  return arr[index];
};

export default get;
// END
