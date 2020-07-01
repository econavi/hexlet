/* strings.js

Реализуйте внутреннюю функцию takeLast, которая возвращает последние n символов строки в обратном порядке. Количество символов передаётся в takeLast вторым параметром. Если передаётся пустая строка или строка меньше необходимой длины, функция должна вернуть null.
Примеры

run('');       // null
run('cb');     // null
run('power');  // rewo
run('hexlet'); // telx */

// Моё решение
const run = (text) => {
  // BEGIN (write your solution here)
  const takeLast = (str, size) => {
    if (str.length < size) return null;

    return str.slice(-size).split('').reverse().join('');
  };
  // END

  return takeLast(text, 4);
};

export default run;

// Решение учителя
const run = (text) => {
  // BEGIN
  const takeLast = (str, length) => {
    if (str === '' || str.length < length) {
      return null;
    }

    let result = '';
    for (let i = str.length - 1; result.length < length; i -= 1) {
      result = `${result}${str[i]}`;
    }

    return result;
  };
  // END

  return takeLast(text, 4);
};

export default run;
