// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';
// eslint-disable-next-line
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from 'hexlet-pairs-data';

export const make = () => l();

// BEGIN (write your solution here)
// Реализуйте абстракцию для создания html. Она включает в себя следующие функции:
// make — конструктор. Уже реализован. Не принимает параметров, и создает html-список.
// node — создает новый тег. Содержит два элемента, имя тега и его содержимое.
export const node = (tagName, tagValue) => cons(tagName, tagValue);

// Дополнительно реализуйте селекторы тега: name и value.
export const name = tag => car(tag);
export const value = tag => cdr(tag);

// const tag = node('div', 'what is love?');
// name(tag); // => div
// value(tag); // => what is love?

// append — добавляет элемент (тег), созданный с помощью node, в html-список.
// Возвращает новый html-список. Новый элемент должен добавляться в начало ("голову") списка.
export const append = (list, node) => consList(node, list); // eslint-disable-line no-shadow

// toString — возвращает текстовое представление html на основании html-списка.
export const toString = (list) => {
  if (isEmpty(list)) return '';

  const getReverList = (list, res) => { // eslint-disable-line no-shadow
    if (isEmpty(list)) return res;
    return getReverList(tail(list), cons(head(list), res));
  };

  const invertedList = getReverList(list, l());

  const getResult = (list, acc) => { // eslint-disable-line no-shadow
    if (isEmpty(list)) return acc;
    acc += `<${name(head(list))}>${value(head(list))}</${name(head(list))}>`; // eslint-disable-line no-param-reassign
    return getResult(tail(list), acc);
  };

  return getResult(invertedList, '');
};

// Пример использования этого интерфейса:
//
// Создаем новый html-список
// const dom1 = make();
//
// Создаем тег и сразу добавляем его в html
// // const dom2 = append(dom1, node('h1', 'hello, world'));
// Еще раз
// const dom3 = append(dom2, node('h2', 'header2'));
//
// Создаем новый тег
// const tag = node('h3', 'header3');
// Добавляем созданный тег в html-список
// const dom = append(dom3, tag);
//
// Преобразуем html-список в строчку
// toString(dom);
// => <h1>hello, world</h1><h2>header2</h2><h3>header3</h3>
//
// Пример без создания промежуточных переменных
// toString(append(make(), node('p', 'this is Sparta!')));
// <p>this is Sparta!</p>

// Экспортируйте все созданные функции.

// END

// Решение учителя
// export const append = (dom, element) => consList(element, dom);
//
// export const node = (tag, content) => cons(tag, content);
//
// export const name = element => car(element);
// export const value = element => cdr(element);
//
// export const toString = (elements) => {
//   if (isEmpty(elements)) {
//     return '';
//   }
//   const element = head(elements);
//   const tag = name(element);
//   return `${toString(tail(elements))}<${tag}>${value(element)}</${tag}>`;
// };
