/* findWhere.js

Реализуйте и экспортируйте по умолчанию функцию findWhere, которая принимает на вход массив (элементы которого — это ассоциативные массивы) и пары ключ-значение (тоже в виде массива), а возвращает первый элемент исходного массива, значения которого соответствуют переданным парам (всем переданным). Если совпадений не было, то функция должна вернуть null.

findWhere(
  [
    { title: 'Book of Fooos', author: 'FooBar', year: 1111 },
    { title: 'Cymbeline', author: 'Shakespeare', year: 1611 },
    { title: 'The Tempest', author: 'Shakespeare', year: 1611 },
    { title: 'Book of Foos Barrrs', author: 'FooBar', year: 2222 },
    { title: 'Still foooing', author: 'FooBar', year: 3333 },
    { title: 'Happy Foo', author: 'FooBar', year: 4444 },
  ],
  { author: 'Shakespeare', year: 1611 }
); // { title: 'Cymbeline', 'author: 'Shakespeare', 'year: 1611 } */


// Решение econavi (v1)
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN (write your solution here)
const findWhere = (data, query) => {
  const params = Object.entries(query);

  let result = null;

  for (let i = 0; i < data.length; i += 1) {
    if (result) return result;

    const dataItem = data[i];

    for (const [key, value] of params) {
      if ((dataItem[key] !== value)) {
        result = null;
        break;
      }
      result = dataItem;
    }
  }

  return result;
};

export default findWhere;
// END

// Решение econavi (v2)
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN (write your solution here)
const findWhere = (data, query) => {
  const params = Object.entries(query);

  let result = null;

  for (const item of data) {
    if (result) return result;

    for (const [key, value] of params) {
      if ((item[key] !== value)) {
        result = null;
        break;
      }
      result = item;
    }
  }

  return result;
};

export default findWhere;
// END

// Решение учителя
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN
const findWhere = (data, where) => {
  for (const item of data) {
    let find = true;
    const entries = Object.entries(where);
    for (const [key, value] of entries) {
      if (item[key] !== value) {
        find = false;
      }
    }
    if (find) {
      return item;
    }
  }

  return null;
};

export default findWhere;
// END
