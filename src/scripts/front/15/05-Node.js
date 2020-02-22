/* Node.js

Реализуйте базовый класс Node таким чтобы он содержал в себе общую логику
PairedTag.js, SingleTag.js

Реализуйте типы тегов как подтипы типа Node. */

/* ============================================================= */

/*
Решение econavi

При наследовании имеет смысл писать constructor если в нем есть какая-то логика.
Такая конструкция безсмысленна:
constructor(...args) {
  super(...args);
}

Запихнул в базовый класс всю логику хотя body и children могут быть только у парных тегов. Работает, но следовало оставить только общую(!) логику name и attributes, как в решении учителя.

Методы getName(), getBody(), getChildren() в базовом классе лишние, например, что бы получить имя достаточно обратить к this.name в подклассе.
*/

// Node.js
// BEGIN (write your solution here)
class Node {
  constructor(name, attributes = {}, body = '', children = []) {
    this.name = name;
    this.attributes = attributes;
    this.body = body;
    this.children = children;
  }

  getName() {
    return this.name;
  }

  getAttributesAsLine() {
    return Object.entries(this.attributes)
      .map(([key, value]) => ` ${key}="${value}"`)
      .join('');
  }

  getBody() {
    return this.body;
  }

  getChildren() {
    return this.children;
  }
}

export default Node;
// END


// SingleTag.js
// BEGIN (write your solution here)
/* eslint-disable no-useless-constructor */
import Node from './Node';

class SingleTag extends Node {
  constructor(...args) {
    super(...args);
  }

  toString() {
    const name = this.getName();
    const attrs = this.getAttributesAsLine();

    return `<${name}${attrs}>`;
  }
}

export default SingleTag;
// END


// PairedTag.js
// BEGIN (write your solution here)
/* eslint-disable no-useless-constructor */
import Node from './Node';

class PairedTag extends Node {
  constructor(...args) {
    super(...args);
  }

  toString() {
    const name = this.getName();
    const attrs = this.getAttributesAsLine();
    const children = this.getChildren();

    const value = children.length > 0 ? children.join('') : this.getBody();
    return `<${name}${attrs}>${value}</${name}>`;
  }
}

export default PairedTag;
// END


/* ============================================================= */

// Решение учителя
// Node.js
// BEGIN
export default class {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
  }

  getAttributesAsLine() {
    return Object.keys(this.attributes)
      .reduce((acc, key) => `${acc} ${key}="${this.attributes[key]}"`, '');
  }
}
// END


// SingleTag.js
// BEGIN
import Node from './Node';

export default class extends Node {
  toString() {
    return `<${this.name}${this.getAttributesAsLine()}>`;
  }
}
// END


// PairedTag.js
// BEGIN
import Node from './Node';

export default class extends Node {
  constructor(name, attributes, body = '', children = []) {
    super(name, attributes);
    this.body = body;
    this.children = children;
  }

  toString() {
    const value = this.children.length > 0
      ? this.children.join('')
      : this.body;

    return `<${this.name}${this.getAttributesAsLine()}>${value}</${this.name}>`;
  }
}
// END
