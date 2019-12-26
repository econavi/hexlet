/* Реализуйте и экспортируйте по умолчанию функцию makeCensored, которая заменяет каждое вхождение указанных слов в предложении на последовательность $#%! и возвращает полученную строку. Аргументы:
* Текст
* Набор стоп слов
Словом считается любая непрерывная последовательность символов, включая любые спецсимволы (без пробелов).
Примеры

import makeCensored from '../strings.js';

const sentence = 'When you play the game of thrones, you win or you die';
const result = makeCensored(sentence, ['die', 'play']);
// When you $#%! the game of thrones, you win or you $#%!

const sentence2 = 'chicken chicken? chicken! chicken';
const result2 = makeCensored(sentence2, ['?', 'chicken']);
// '$#%! chicken? chicken! $#%!';
Подсказки

* Тернарная операция может сослужить вам хорошую службу в этой практике. */

// Решение econavi
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN (write your solution here)
export default (sentence, stopList) => {
  const replacement = '$#%!';
  const separator = ' ';

  const sentenceDivided = sentence.split(separator);

  const newArr = [];
  for (const item of sentenceDivided) {
    const newItem = stopList.includes(item) ? replacement : item;
    newArr.push(newItem);
  }

  return newArr.join(separator);
};
// END

// Решение учителя (примерно тоже самое — суть одна)
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN
const makeCensored = (text, stopWords) => {
  const words = text.split(' ');

  const result = [];
  for (const word of words) {
    const newWord = stopWords.includes(word) ? '$#%!' : word;
    result.push(newWord);
  }

  return result.join(' ');
};

export default makeCensored;
// END
