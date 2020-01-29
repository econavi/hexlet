/* arrays.js

Реализуйте функцию getDifference, которая принимает на вход два массива, а возвращает массив, составленный из элементов первого, которых нет во втором. Сделайте решение функциональным.
Пример использования

getDifference([2, 1], [2, 3]); // [1]
Другие примеры смотрите в модуле с тестами. */

// Моё решение
// BEGIN (write your solution here)
export default (col1, col2) => col1.filter((el) => !col2.includes(el));
// END

// Решение учителя
// BEGIN
export default (items1, items2) => (
  items1.filter((item) => !items2.includes(item))
);
// END
