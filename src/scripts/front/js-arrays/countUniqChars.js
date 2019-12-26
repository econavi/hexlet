/* Реализуйте и экспортируйте по умолчанию функцию countUniqChars, которая получает на вход строку и считает, сколько символов (уникальных символов) использовано в этой строке. Например, в строке 'yy' всего один уникальный символ — y. А в строке '111yya!' — четыре уникальных символа: 1, y, a и !.
Задание необходимо выполнить без использования стронних библиотек.
Примеры

const text1 = 'yyab';
countUniqChars(text1); // 3

const text2 = 'You know nothing Jon Snow';
countUniqChars(text2); // 13

const text3 = '';
countUniqChars(text3); // 0
Примечания

Если передана пустая строка, то функция должна вернуть 0, так как пустая строка вообще не содержит символов. */

// Решение econavi
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN (write your solution here)
export default (str) => new Set(str).size;

// или другой вариант:
const countUniqChars = (str) => {
  if (!str.length) return 0;

  const arr = str.split('');
  const newArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    const item = arr[i];

    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  }

  return newArr.length;
};

export default countUniqChars;
// END

// Решение учителя
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN
const countUniqChars = (text) => {
  const uniqChars = [];

  for (const char of text) {
    if (!uniqChars.includes(char)) {
      uniqChars.push(char);
    }
  }

  return uniqChars.length;
};

export default countUniqChars;
// END
