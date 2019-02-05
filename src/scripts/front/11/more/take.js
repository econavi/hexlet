// eslint-disable-next-line
import { l, isEmpty, head, tail, cons, toString as listToString } from 'hexlet-pairs-data';

// take.js
// Реализуйте и экспортируйте по умолчанию функцию take, которая возвращает список,
// состоящий из первых n (значение передается первым параметром) элементов исходного
// (переданного вторым параметром) списка. Остальные детали работы функции демонстрирует
// нижеприведённый код:

// take(3, l()); // ()
// take(3, l(1, 2)); // (1, 2)
// take(1, l(7, 2)); // (7)
// Подсказки
// Используйте рекурсивный процесс

// BEGIN (write your solution here)
const take = (n, list) => {
  if (isEmpty(list)) return l();

  const iter = (ls, acc, count) => {
    if (count === n || isEmpty(ls)) return acc;
    const meter = count + 1;

    return cons(head(ls), iter(tail(ls), l(), meter));
  };

  return iter(list, l(), 0);
};
export default take;
// END

// Решение учителя
// BEGIN
// const take = (count, list) => {
//   if (isEmpty(list) || count === 0) {
//     return l();
//   }
//
//   return cons(head(list), take(count - 1, tail(list)));
// };
//
// export default take;
// END
