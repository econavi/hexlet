import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { make, append, node, value, is, toString as htmlToString, map } from 'hexlet-html-tags'; // eslint-disable-line

// BEGIN (write your solution here)
// Реализуйте и экспортируйте функцию filter для библиотеки html-tags,
// используя итеративный процесс:

export const filter = (fn, elements) => {
  if (isEmpty(elements)) return l();

  const iter = (items, acc) => {
    if (isEmpty(items)) return acc;
    if (!fn(head(items))) {
      return iter(tail(items), acc);
    }
    return iter(tail(items), cons(head(items), acc));
  };

  return reverse(iter(elements, l()));
};

// const html1 = append(make(), node('h1', 'header1'));
// const html2 = append(html1, node('h1', 'header2'));
// const html3 = append(html2, node('p', 'content'));
//
// const processedHtml = filter((element) =>
//   !is('h1', element), html3);
//
// //<p>content</p>
// htmlToString(processedHtml);

// Реализуйте и экспортируйте функцию quotes, которая извлекает из html тексты цитат
// и возвращает список цитат.

export const quotes = (elements) => {
  const isBlockquote = node => is('blockquote', node); // eslint-disable-line no-shadow
  return map(elem => value(elem), filter(isBlockquote, elements));
};

// const dom1 = make();
// const dom2 = append(dom1, node('h1', 'scheme'));
// const dom3 = append(dom2, node('p', 'is a lisp'));
// const dom4 = append(dom3, node('blockquote', 'live is life'));
// const dom5 = append(dom4, node('blockquote', 'i am sexy, and i know it'));
//
// listToString(quotes(dom5)); // ('i am sexy, and i know it', 'live is life');

// Примечание
// Функцию removeHeaders можно использовать для наглядного сопоставления частного
// варианта операции фильтрации с обобщённой реализацией операции отображения (собственно, filter).
export const removeHeaders = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }

  const element = head(elements);
  const tailElements = tail(elements);
  if (is('h1', element)) {
    return removeHeaders(tailElements);
  }
  return cons(element, removeHeaders(tailElements));
};

// END

// Решение учителя:
//
// import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
// import { make, append, node, value, is, toString as htmlToString, map } from 'hexlet-html-tags'; // eslint-disable-line
//
// // BEGIN
// export const filter = (func, elements) => {
//   const iter = (items, acc) => {
//     if (isEmpty(items)) {
//       return reverse(acc);
//     }
//     const item = head(items);
//     const newAcc = func(item) ? cons(item, acc) : acc;
//     return iter(tail(items), newAcc);
//   };
//
//   return iter(elements, l());
// };
//
// export const quotes = (elements) => {
//   const filtered = filter(element => is('blockquote', element), elements);
//   const result = map(value, filtered);
//   return result;
// };
// // END
//
// export const removeHeaders = (elements) => {
//   if (isEmpty(elements)) {
//     return l();
//   }
//
//   const element = head(elements);
//   const tailElements = tail(elements);
//   if (is('h1', element)) {
//     return removeHeaders(tailElements);
//   }
//   return cons(element, removeHeaders(tailElements));
// };
