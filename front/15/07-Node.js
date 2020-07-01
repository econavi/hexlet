/* В этом упражнении реализация наших типов (Node и ее подтипов) будет опираться на следующие свойства js:
* Функция это объект
* Позднее связывание
* Побочные эффекты (apply)
Node.js

Реализуйте базовый тип Node используя подход описанный в видео.
PairedTag.js, SingleTag.js

Реализуйте типы тегов как подтипы типа Node.
Подсказки

При определении функции внутри конструктора есть одна деталь. Функция создается каждый раз заново, а это ведет к двум проблемам:
1. Лишний расход памяти. Ведь достаточно создать одну функцию и использовать ее повторно.
2. Сравнение объектов даже в случае deepEqual будет давать false. Ведь функция это объект, а объекты друг другу не равны (даже если структура одинаковая), если это не один и тот же объект. А это сильно затрудняет проверки на равенство деревьев (или поддеревьев), а также делает крайне сложным тестирование.
По этим причинам функцию нужно описывать вне конструктора (выше в файле), а внутри присваивать ее соответствующему свойству. */

/* ============================================= */
// Решение econavi

// Лоханулся — забыл вытащить функции getAttributesAsLine и toString из конструкторов (см. подсказки).

// Node.js
// BEGIN (write your solution here)
function Node(name, attributes = {}) {
  this.name = name;
  this.getAttributesAsLine = () => Object.keys(attributes)
    .reduce((acc, key) => `${acc} ${key}="${attributes[key]}"`, '');
}

export default Node;
// END


// SingleTag.js
// BEGIN (write your solution here)
import Node from './Node';

function SingleTag(name, attributes) {
  Node.apply(this, [name, attributes]);
  this.toString = () => `<${this.name}${this.getAttributesAsLine()}>`;
}

export default SingleTag;
// END


// PairedTag.js
// BEGIN (write your solution here)
import Node from './Node';

function PairTag(name, attributes, body, children) {
  Node.apply(this, [name, attributes]);
  this.value = children.length > 0
    ? children.join('')
    : body;
  this.toString = () => `<${this.name}${this.getAttributesAsLine()}>${this.value}</${this.name}>`;
}

export default PairTag;
// END

/* ============================================= */
// Решение учителя

// Node.js
// BEGIN
function getAttributesAsLine() {
  return Object.keys(this.attributes).reduce(
    (acc, key) => `${acc} ${key}="${this.attributes[key]}"`,
    '',
  );
}

export default function Node(name, attributes = {}) {
  this.name = name;
  this.attributes = attributes;

  this.getAttributesAsLine = getAttributesAsLine;
}
// END


// SingleTag.js
// BEGIN
import Node from './Node';

function toString() {
  return `<${this.name}${this.getAttributesAsLine()}>`;
}

export default function SingleTag(name, attributes = {}) {
  Node.apply(this, [name, attributes]);
  this.toString = toString;
}
// END


// PairedTag.js
// BEGIN
import Node from './Node';

function toString() {
  const value = this.children.length > 0
    ? this.children.join('') : this.body;
  return `<${this.name}${this.getAttributesAsLine()}>${value}</${this.name}>`;
}

export default function PairedTag(name, attributes = {}, body = '', children = []) {
  Node.apply(this, [name, attributes]);
  this.body = body;
  this.children = children;
  this.toString = toString;
}
// END
