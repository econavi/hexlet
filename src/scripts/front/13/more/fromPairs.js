// fromPairs.js
// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход массив, состоящий из массивов-пар и возвращает объект, полученный из этих пар.
//
// Примечания
// Если при конструировании объекта попадаются совпадающие ключи, то берётся ключ из последнего массива-пары:
//    fromPairs([['cat', 5], ['dog', 6], ['cat', 11]]
//    // → { 'dog': 6, 'cat': 11 }
// Примеры
// fromPairs([['fred', 30], ['barney', 40]]);
// // → { 'fred': 30, 'barney': 40 }

// BEGIN (write your solution here)
const fromPairs = (arr) => {
  return arr.reduce((acc, elem) => {
    return { ...acc, [elem[0]]: elem[1] }
  }, {});
};

export default fromPairs;
// END

// Решение учителя
// // BEGIN
// export default pairs => pairs.reduce(
//   (acc, [key, value]) => ({ ...acc, [key]: value }),
//   {},
// );
// // END
