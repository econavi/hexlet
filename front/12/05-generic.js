// Реализуйте функцию getMethod, которая производит поиск конкретной реализации функции для переданного типа.

import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { l, cons as consList, isEmpty, head, tail, toString as listToString } from 'hexlet-pairs-data';
import { attach, typeTag, contents } from './type';

let methods = l();

export const getMethod = (obj, methodName) => {
  // BEGIN (write your solution here)
  const objType = typeTag(obj);
  const iter = (list) => {
    if (isEmpty(list)) return null;

    const listItem = head(list);
    const listItemType = typeTag(listItem);

    if (objType === listItemType) {
      const listItemFunctionName = car(cdr(listItem));

      if (methodName === listItemFunctionName) {
        const listItemFunctionBody = cdr(cdr(listItem));
        return listItemFunctionBody;
      }
    }

    return iter(tail(list));
  };

  return iter(methods);
  // END
};

export const definer = type =>
  (methodName, f) => {
    methods = consList(attach(type, cons(methodName, f)), methods);
  };


// Решение учителя
// import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
// import { l, cons as consList, isEmpty, head, tail } from 'hexlet-pairs-data';
// import { attach, typeTag, contents } from './type';
//
// let methods = l();
//
// export const getMethod = (obj, methodName) => {
//   // BEGIN
//   const currentType = typeTag(obj);
//   const iter = (elements) => {
//     if (isEmpty(elements)) {
//       return null;
//     }
//     const element = head(elements);
//     if (currentType === typeTag(element)) {
//       const method = contents(element);
//       if (methodName === car(method)) {
//         return cdr(method);
//       }
//     }
//
//     return iter(tail(elements));
//   };
//
//   return iter(methods);
//   // END
// };
//
// export const definer = type =>
//   (methodName, f) => {
//     methods = consList(attach(type, cons(methodName, f)), methods);
//   };
