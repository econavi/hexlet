import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { name, value, node, is, toString as htmlToString } from 'hexlet-html-tags'; // eslint-disable-line
import { reverse as reverseStr } from './strings'; // eslint-disable-line

// BEGIN (write your solution here)
// Реализуйте и экспортируйте функцию map для библиотеки html-tags.
// Реализация должна быть построена с использованием итеративного процесса
// (без циклов, на основе рекурсии). Параметры и их порядок у функций аналогичный.
// Первый - функция-трансформер, второй - коллекция (в нашем случае список html-тегов).

export const map = (fn, elements) => {
  if (isEmpty(elements)) return l();
  const newElement = fn(head(elements));
  return cons(newElement, map(fn, tail(elements)));
};

// const dom1 = make();
// const dom2 = append(dom1, node('h1', 'scheme'));
// const dom3 = append(dom2, node('p', 'is a lisp'));

// Отображение в результате которого в html-списке заменяются теги h1 на теги h2
// const processedDom = map((element) => {
//   if (is('h1', element)) {
//     return node('h2', value(element));
//   }
//   return element;
// }, dom3);

// Реализуйте и экспортируйте функцию mirror, которая переворачивает
// содержимое тегов, так чтобы читать его нужно было справа налево, а не слева направо.

export const mirror = (dom) => {
  if (isEmpty(dom)) return dom;
  const tag = name(head(dom));
  const content = reverseStr(value(head(dom)));
  return cons(node(tag, content), mirror(tail(dom)));
};

// const dom1 = make();
// const dom2 = append(dom1, node('h1', 'scheme'));
// const dom3 = append(dom2, node('p', 'is a lisp'));

// <h1>emehcs</h1>
// <p>psil a si</p>
// htmlToString(mirror(dom3));

// Примечание
// Функцию b2p можно использовать для наглядного сопоставления частного варианта
// операции отображения с обобщённой реализацией операции отображения (собственно, map).
export const b2p = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }

  let newElement;
  const element = head(elements);
  if (is('blockquote', element)) {
    newElement = node('p', value(element));
  } else {
    newElement = element;
  }

  return cons(newElement, b2p(tail(elements)));
};

// Подсказки
// Функция reverseStr (псевдоним функции reverse из модуля по работе со строками strings)
// делает переворот строки.

// END

// Решение учителя
// BEGIN
// Рекурсивный процесс
// export const map = (func, elements) => {
//   if (isEmpty(elements)) {
//     return l();
//   }
//
//   return cons(func(head(elements)), map(func, tail(elements)));
// };
//
// // Итеративный процесс (рекурсивно)
// export const map = (func, elements) => {
//   const iter = (items, acc) => {
//     if (isEmpty(items)) {
//       return reverse(acc);
//     }
//     return iter(tail(items), cons(func(head(items)), acc));
//   };
//
//   return iter(elements, l());
// };
//
// export const mirror = elements => (
//   map(element => node(name(element), reverseStr(value(element))), elements)
// );
// // END
