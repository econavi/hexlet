/* Реализуйте и экспортируйте по умолчанию функцию findIndex, которая возвращает первый встретившийся индекс переданного элемента в случае, если элемент присутствует в массиве, и -1 в случае, если он отсутствует.
Параметры функции:
* Массив
* Элемент
const temperatures = [37.5, 34, 39.3, 40, 38.7, 41.5, 40];

findIndex(temperatures, 34); // 1
findIndex(temperatures, 40); // 3
findIndex(temperatures, 3);  // -1 */

// Решение econavi (отличия от решения учителя выдерживают тему урока)
// BEGIN (write your solution here)
export default (coll, target) => {
  let result = -1;

  for (let i = 0; i < coll.length; i += 1) {
    if (target === coll[i]) {
      result = i;
      break;
    }
  }

  return result;
};
// END

// Решение учителя (немного упрощено)
// BEGIN
const findIndex = (coll, element) => {
  for (let i = 0; i < coll.length; i += 1) {
    if (element === coll[i]) {
      return i;
    }
  }

  return -1;
  // The same solution can be obtained by calling the indexOf() method on the array.
  // coll.indexOf(element);
};

export default findIndex;
// END
