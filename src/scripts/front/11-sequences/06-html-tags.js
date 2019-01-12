import { toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { node, value, is, toString as htmlToString,  map, filter, reduce } from 'hexlet-html-tags'; // eslint-disable-line
import { wc } from './utils'; // eslint-disable-line

// BEGIN (write your solution here)
// Реализуйте и экспортируйте функцию extractHeaders, которая извлекает тексты
// всех заголовков h2 из переданного html и возвращает html в котором каждый из этих
// текстов обернут в p.

export const extractHeaders = (dom) => {
  const h2Elems = filter(elem => is('h2', elem), dom);
  return map(elem => node('p', value(elem)), h2Elems);
};

// const html1 = append(make(), node('h2', 'header1'));
// const html2 = append(html1, node('h2', 'header2'));
// const html3 = append(html2, node('p', 'content'));
// // => <h2>header1</h2><h2>header2</h2><p>content</p>

// htmlToString(extractHeaders(html3));
// // => <p>header1</p><p>header2</p>

// Реализуйте и экспортируйте функцию wordsCount, которая считает
// вхождения слова в определенный тег.
// Для подсчета слов в тексте одного тега воспользуйтесь вспомогательной функцией wc,
// которая уже импортирована в модуль html-tags.

export const wordsCount = (tagName, word, dom) => {
  const targetTags = filter(elem => is(tagName, elem), dom);
  if (!targetTags) return 0;
  const valueList = map(elem => value(elem), targetTags);
  // eslint-disable-next-line no-confusing-arrow
  const getResult = (elem, acc) => wc(word, elem) ? acc + wc(word, elem) : acc;
  return reduce(getResult, 0, valueList);
};

// const html1 = append(make(), node('h2', 'header1 lisp'));
// const html2 = append(html1, node('p', 'content'));
// const html3 = append(html2, node('h2', 'lisp header2 lisp'));
// const html4 = append(html3, node('p', 'content lisp'));

// wordsCount('h2', 'lisp', html4); // 3

// Подсказки
// Подсчет слов в тексте: wc(word, text), где word искомое слово, а text это текст,
// в котором ведется поиск.
//   wc('what', 'what, what, who, what'); // 3
//   wc('la', 'loli'); // 0

// END

// Решение учителя
// BEGIN
// export const extractHeaders = (elements) => {
//   const filtered = filter(element => is('h2', element), elements);
//   return map(element => node('p', value(element)), filtered);
// };
//
// export const wordsCount = (tagName, word, elements) => {
//   const filtered = filter(element => is(tagName, element), elements);
//   const values = map(element => value(element), filtered);
//   return reduce((text, acc) => wc(word, text) + acc, 0, values);
// };
// END
