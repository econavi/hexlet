/* eslint-disable no-param-reassign */
/*
Реализуйте функцию apply, которая выполняет операции с массивом. Всего нужно реализовать четыре операции:
* reset - Возвращает пустой массив
* get - Получение значения по индексу
* change - Обновление значения по индексу
* Операция по умолчанию - Если имя операции не передано или не соответствует ни одному из вышеперечисленных, необходимо вернуть исходный массив

import apply from '../arrays';

const cities = ['moscow', 'london', 'berlin', 'porto'];

// возврат пустого массива
apply(cities, 'reset'); // []
// получение значения по индексу
apply(cities, 'get', 1); // 'london'
// изменение значения по индексу
apply(cities, 'change', 0, 'miami'); // ['miami', 'london', 'berlin', 'porto']
// операция по умолчанию
apply(cities); // ['moscow', 'london', 'berlin', 'porto']
*/

// Решение econavi (совпадает с решением учителя)
const apply = (arr, operationName, index, value) => {
  // BEGIN (write your solution here)
  switch (operationName) {
    case 'reset':
      return [];
    case 'get':
      return arr[index];
    case 'change':
      arr[index] = value;
      return arr;
    default:
      return arr;
  }
  // END
};

export default apply;