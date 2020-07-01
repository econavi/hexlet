// uniq.js

// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив и возвращает новый массив, полученный из исходного удалением повторяющихся элементов.
// uniq([2, 1, 2, 3]); // [2, 1, 3]

// Взаимный порядок оставшихся элементов в новом массиве должен сохраняться.
// uniq([2, 1, 2, 3]); // [2, 1, 3], a не [1, 2, 3] или не [3, 1, 2]

// Подсказки
// Для формирования новой коллекции (другой конфигурации) из старой подходит reduce.
// Метод arr.includes(value) проверяет, входит ли элемент в коллекцию.
// Метод arr.concat(value) объединяет исходный массив (на котором вызван метод) с другими массивами и/или значениями (переданными в качестве аргументов). Метод иммутабелен, возвращает новый массив. Примеры и подробности использования см. в документации: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

// BEGIN (write your solution here)
export default (arr) => {
  const res = arr.reduce((acc, val) => {
    if ( !(acc.includes(val)) ) {
      return acc.concat(val);
    }
    return acc;
  }, []);

  return res;
};
// END

// Решение учителя
// // BEGIN
// export default coll => coll.reduce(
//   (acc, value) => (
//     acc.includes(value) ? acc : acc.concat(value)
//   ), // первый параметр reduce — callback-функция
//   [], // второй параметр reduce — аккумулятор
// );
// // END
