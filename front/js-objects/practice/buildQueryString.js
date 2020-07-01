/* buildQueryString.js

Query String (строка запроса) - часть адреса страницы в интернете содержащая константы и их значения. Она начинается после вопросительного знака и идет до конца адреса. Пример:

# query string: page=5
https://ru.hexlet.io/blog?page=5

Если параметров несколько, то они отделяются амперсандом &:

# query string: page=5&per=10
https://ru.hexlet.io/blog?per=10&page=5



Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход список параметров и возвращает сформированный query string из этих параметров:

import bqs from '../buildQueryString';

bqs({ per: 10, page: 1 });
// page=1&per=10

Имена параметров в выходной строке должны располагаться в алфавитном порядке (то есть их нужно отсортировать). */

// Решение econavi (v1)
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN (write your solution here)
const bqs = (data) => {
  const params = Object.entries(data).sort();

  const arr = [];
  for (const [key, value] of params) {
    arr.push(`${key}=${value}`);
  }

  if (!arr.length) return '';

  let result = '';
  for (let i = 0; i < arr.length; i += 1) {
    const delimiter = i === arr.length - 1 ? '' : '&';
    result += arr[i] + delimiter;
  }

  return result;
};

export default bqs;
// END


// Решение econavi (v2)
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN (write your solution here)
const bqs = (data) => {
  const params = Object.entries(data).sort();

  const arr = [];
  for (const [key, value] of params) {
    arr.push(`${key}=${value}`, '&');
  }

  const lastIndex = arr.length - 1;
  const result = arr[lastIndex] === '&' ? arr.slice(0, lastIndex) : arr;

  return result.join('');
};

export default bqs;
// END


// Решение econavi (v3)
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN (write your solution here)
const bqs = (data) => {
  const params = Object.entries(data);

  const result = [];
  for (const [key, value] of params) {
    result.push(`${key}=${value}`);
  }

  return result.sort().join('&');
};

export default bqs;
// END

// Решение учителя
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN
export default (params) => {
  const keys = Object.keys(params);
  const result = [];

  for (const key of keys) {
    result.push(`${key}=${params[key]}`);
  }

  return result.sort().join('&');
};
// END


