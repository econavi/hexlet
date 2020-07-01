// Query String (строка запроса) - часть адреса страницы в интернете содержащая константы и их значения. Она начинается после вопросительного знака и идет до конца адреса. Пример:
//
// # query string: page=5
// https://ru.hexlet.io/blog?page=5
// Если параметров несколько, то они отделяются амперсандом &
//
// # query string: page=5&per=10
// https://ru.hexlet.io/blog?per=10&page=5
// buildQueryString.js
// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход список параметров и возвращает сформированный query string из этих параметров:
//
// import bqs from '../buildQueryString';
//
// bqs({ per: 10, page: 1 });
// // page=1&per=10
// Имена параметров в выходной строке должны располагаться в алфавитном порядке (то есть их нужно отсортировать)

// BEGIN (write your solution here)
export default (props) => {
  const keys = Object.keys(props);
  const sorted = keys.sort();

  return sorted.reduce((acc, key) => {
    if (!key) return acc;
    return acc ? `${acc}&${key}=${props[key]}` : `${key}=${props[key]}`;
  }, '');
};
// END

// Решение учителя
// // BEGIN
// export default (params) => {
//   const keys = Object.keys(params).sort();
//   return keys.map(k => `${k}=${params[k]}`).join('&');
// };
// // END
