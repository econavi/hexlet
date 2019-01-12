// eslint-disable-next-line
import { l, cons as consList, isList, isEmpty, head, tail, concat, toString as listToString } from 'hexlet-pairs-data';
// eslint-disable-next-line
import { is, toString as htmlToString, hasChildren, children, filter, reduce } from 'hexlet-html-tags';

// BEGIN (write your solution here)
// Реализуйте и экспортируйте по умолчанию функцию select, которая принимает на вход
// имя тега и html список, а возвращает список всех нод, соответствующих имени.
// Ноды возвращаются в том виде, в котором они представлены в дереве. Порядок,
// в котором ноды возвращаются — не важен.

const select = (tagname, dom) => {
  const iter = (list, acc) => {
    if (isEmpty(list)) return acc;

    const current = head(list);
    const rest = tail(list);
    const newAcc = is(tagname, current) ? consList(current, acc) : acc;

    if (!hasChildren(current)) return iter(rest, newAcc);

    return iter(rest, iter(children(current), newAcc));
  };

  return iter(dom, l());
};

export default select;

// Предположим, что у нас есть такой html:

// <h1>scheme</h1>
// <p>is a lisp</p>
// <ul>
//     <li>item 1</li>
//     <li>item 2</li>
// </ul>
// <ol>
//     <li>item 1</li>
//     <li>item 2</li>
// </ol>
// <p>
//     is a functional lang
// </p>
// <ul>
//     <li>item</li>
// </ul>
// <div>
//     <p>text</p>
// </div>
// <div>
//     <div>
//         <p>text</p>
//     </div>
// </div>
// <h1>prolog</h1>
// <p>is about logic</p>
// Тогда:

// const dom1 = make(); // Список нод, то есть это лес, а не дерево
// const dom2 = append(dom1, node('h1', 'scheme'));
// const dom3 = append(dom2, node('p', 'is a lisp'));

// const children1 = l(node('li', 'item 1'), node('li', 'item 2'));
// const dom4 = append(dom3, node('ul', children1));
// const children2 = l(node('li', 'item 1'), node('li', 'item 2'));
// const dom5 = append(dom4, node('ol', children2));
// const dom6 = append(dom5, node('p', 'is a functional language'));
// const children3 = l(node('li', 'item'));
// const dom7 = append(dom6, node('ul', children3));
// const dom8 = append(dom7, node('div', l(node('p', 'text'))));
// const dom9 = append(dom8, node('div', l(node('div', l(node('p', 'text'))))));

// const dom10 = append(dom9, node('h1', 'prolog'));
// const dom = append(dom10, node('p', 'is about logic'));

// select('li', dom);
// // [('li', 'item 1'), ('li', 'item 2'), ('li', 'item 1'), ('li', 'item 2'), ('li', 'item')]

// select('p', dom);
// // [('p', 'is a lisp'), ('p', 'text'), ('p', 'text'), ('p', 'is about logic'), ('p', 'is a functional language')]
// Подсказки
// Посмотрите в документации примеры использования функций описанных ниже.

// hasChildren — функция, которая проверяет, есть ли потомки у элемента
// children — функция, которая возвращает список потомков
// is - функция, которая проверяет соответствие ноды переданному имени

// Проанализируйте тесты

// Эту задачу можно решить разными способами, алгоритм самого простого выглядит так:

// Проходимся по списку нод редьюсом, который собирает результирующий список.
// Если текущая нода содержит детей, то запускаем select рекурсивно для детей, а результат вызова добавляем в аккумулятор.
// Если текущая нода соответствует тому, что мы ищем, добавляем её в аккумулятор.

// END

// Решение учителя

// // BEGIN
// const select = (tagName, html) => reduce((element, acc) => {
//   const acc2 = hasChildren(element) ? concat(select(tagName, children(element)), acc) : acc;
//   return is(tagName, element) ? consList(element, acc2) : acc2;
// }, l(), html);
//
// export default select;
// // END
