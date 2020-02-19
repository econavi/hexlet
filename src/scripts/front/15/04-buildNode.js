/* 
buildNode.js

Реализуйте и экспортируйте функцию по умолчанию, задача которой, создавать объект подходящего типа. Типы: SingleTag и PairedTag. Список имен тегов, которые относятся к SingleTag: hr, br, img.

PairedTag.js

Реализуйте тип PairedTag со следующим интерфейсом:
* Конструктор, который принимает на вход: name, attributes, body, children.
* Метод toString, который возвращает текстовое представление узла (html) на всю глубину.

SingleTag.js

Реализуйте тип SingleTag со следующим интерфейсом:
* Конструктор, который принимает на вход: name, attributes
* Метод toString, который возвращает текстовое представление узла (html) на всю глубину.
Обратите внимание на то что у SingleTag нет body и children */

// Мое решение:
// buildNode.js
import PairedTag from './PairedTag';
import SingleTag from './SingleTag';

// BEGIN (write your solution here)
const SingleTagList = ['hr', 'br', 'img'];

const buildNode = (name = '', attributes = {}, body = '', children = []) => (
  SingleTagList.includes(name)
    ? new SingleTag(name, attributes)
    : new PairedTag(name, attributes, body, children)
);

export default buildNode;
// END


// PairedTag.js
// BEGIN (write your solution here)
class PairedTag {
  constructor(name = '', attributes = {}, body = '', children = []) {
    this.name = name;
    this.attributes = attributes;
    this.body = body;
    this.children = children;
  }

  toString() {
    const attrsLine = Object.keys(this.attributes)
      .map((key) => ` ${key}="${this.attributes[key]}"`).join('');
    
    return `<${this.name}${attrsLine}>${this.body}${this.children.join('')}</${this.name}>`;
  }
}

export default PairedTag;
// END


// SingleTag.js
// BEGIN (write your solution here)
class SingleTag {
  constructor(name = '', attributes = {}) {
    this.name = name;
    this.attributes = attributes;
  }

  toString() {
    const attrsLine = Object.keys(this.attributes)
      .map((key) => ` ${key}="${this.attributes[key]}"`).join('');

    return `<${this.name}${attrsLine}>`;
  }
}

export default SingleTag;
// END


// Решение учителя:
// buildNode.js
// Более грамотное решение при передачи параметров через rest
import PairedTag from './PairedTag';
import SingleTag from './SingleTag';

// BEGIN
const singleTagsList = new Set(['hr', 'br', 'img']);
export default (name, ...args) => {
  const CurrentClass = singleTagsList.has(name) ? SingleTag : PairedTag;
  return new CurrentClass(name, ...args);
};
// END

// PairedTag.js
// Присутствует проверка на отсутствие дочерних элементов
// BEGIN
export default class {
  constructor(name, attributes = {}, body = '', children = []) {
    this.name = name;
    this.attributes = attributes;
    this.body = body;
    this.children = children;
  }

  toString() {
    const value = this.children.length > 0 ? this.children.join('') : this.body;
    return `<${this.name}${this.getAttributesAsLine()}>${value}</${this.name}>`;
  }

  getAttributesAsLine() {
    return Object.entries(this.attributes)
      .map(([key, value]) => ` ${key}="${value}"`)
      .join('');
  }
}
// END

// SingleTag.js
// BEGIN
export default class {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
  }

  toString() {
    return `<${this.name}${this.getAttributesAsLine()}>`;
  }

  getAttributesAsLine() {
    return Object.entries(this.attributes)
      .map(([key, value]) => ` ${key}="${value}"`)
      .join('');
  }
}
// END
