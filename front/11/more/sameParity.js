// eslint-disable-next-line
import { l, isEmpty, head, tail, filter, toString as listToString } from 'hexlet-pairs-data';

// sameParity.js
// Реализуйте и экспортируйте функцию по умолчанию, которая принимает
// на вход список и возвращает новый, состоящий из элементов, у которых
// такая же четность, как и у первого элемента входного списка.

// sameParity(l(-1, 0, 1, -3, 10, -2)); // (-1, 1, -3)

// sameParity(l()); // ()

// BEGIN (write your solution here)

const sameParity = (list) => {
  if (isEmpty(list)) return l();
  const parity = head(list) % 2;
  return filter(
    elem => elem % 2 === parity || elem % 2 === -parity,
    list,
  );
};

export default sameParity;
// END

// Решение учителя

// BEGIN
// export default (list) => {
//   if (isEmpty(list)) {
//     return l();
//   }
//
//   const firstItem = head(list);
//   const expectedRest = Math.abs(firstItem % 2);
//
//   return filter(value => expectedRest === Math.abs(value % 2), list);
// };
// END
