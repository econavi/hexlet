// eslint-disable-next-line
import { isEmpty, head, tail } from 'hexlet-pairs-data';
// eslint-disable-next-line
import { value, is } from 'hexlet-html-tags';

// BEGIN (write your solution here)
// Реализуйте и экспортируйте функцию reduce для библиотеки html-tags:

export const reduce = (fn, acc, elements) => {
  const iter = (elems, acc) => { // eslint-disable-line no-shadow
    if (isEmpty(elems)) return acc;
    const newAcc = fn(head(elems), acc);
    return iter(tail(elems), newAcc);
  };
  return iter(elements, acc);
};

// const html1 = append(make(), node('h1', 'header1'));
// const html2 = append(html1, node('h1', 'header2'));
// const html3 = append(html2, node('p', 'content'));

// reduce((element, acc) => {
//   return is('h1', element) ? acc + 1 : acc;
// }, 0, html3); // 2

// Реализуйте и экспортируйте функцию emptyTagsCount, которая считает количество пустых тегов. Тип тега задается первым параметром функции.

export const emptyTagsCount = (tagName, elements) => { // eslint-disable-line arrow-body-style
  return reduce((element, acc) => { // eslint-disable-line arrow-body-style
    return is(tagName, element) && !value(element) ? acc + 1 : acc;
  }, 0, elements);
};

// const html1 = make();
// const html2 = append(html1, node('h1', 'scheme'));
// const html3 = append(html2, node('p', 'is a lisp'));
// const html4 = append(html3, node('blockquote', ''));
// const html5 = append(html4, node('blockquote', ''));
// const html6 = append(html5, node('blockquote', 'quote'));
//
// emptyTagsCount('blockquote', html6); // 2
//
// Примечания
// Функцию headersCount можно использовать для наглядного сопоставления частного варианта свёртки с обобщённой реализацией операции отображения (собственно, reduce).
export const headersCount = (tagName, elements) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return acc;
    }

    const item = head(items);
    const newAcc = is(tagName, item) ? acc + 1 : acc;
    return iter(tail(items), newAcc);
  };
  return iter(elements, 0);
};

// Подсказки
// При необходимости вы можете самостоятельно импортировать функцию toString из библиотеки hexlet-pairs-data и использовать её для отладки решений. Эта функция возвращает строковое представление списка
// При необходимости вы можете самостоятельно импортировать функцию toString из библиотеки hexlet-html-tags и использовать её для отладки решений. Эта функция возвращает строковое представление html-списка
// Для разрешения противоречий в случае импорта нескольких функций с одинаковыми именами используйте псевдонимы (aliases)

// END

// Решение учителя:
//
// import { isEmpty, head, tail } from 'hexlet-pairs-data';
// import { value, is } from 'hexlet-html-tags';
//
// // BEGIN
// export const reduce = (func, acc, elements) => {
//   if (isEmpty(elements)) {
//     return acc;
//   }
//
//   return reduce(func, func(head(elements), acc), tail(elements));
// };
//
// export const emptyTagsCount = (tagName, elements) => {
//   const predicate = element => is(tagName, element) && value(element) === '';
//   const func = (element, acc) => (predicate(element) ? acc + 1 : acc);
//   return reduce(func, 0, elements);
// };
// // END
//
// export const headersCount = (tagName, elements) => {
//   const iter = (items, acc) => {
//     if (isEmpty(items)) {
//       return acc;
//     }
//
//     const item = head(items);
//     const newAcc = is(tagName, item) ? acc + 1 : acc;
//     return iter(tail(items), newAcc);
//   };
//   return iter(elements, 0);
// };
