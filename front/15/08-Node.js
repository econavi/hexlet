/* PairedTag.js, SingleTag.js
Реализуйте типы тегов PairedTag и SingleTag (как подтипы типа Node). Добавьте необходимые функции в их прототипы. */

// Решение econavi
// SingleTag.js
// BEGIN (write your solution here)
import Node from './Node';

function SingleTag(name, attributes) {
  Node.apply(this, [name, attributes]);
}

SingleTag.prototype.toString = function toString() {
  return `<${this.name}${this.getAttributesAsLine()}>`;
};

export default SingleTag;
// END


// PairTag.js
// Забыл назанчить значения параметров функции body и children по умолчанию
// BEGIN (write your solution here)
import Node from './Node';

function PairTag(name, attributes, body, children) {
  Node.apply(this, [name, attributes]);
  this.value = children.length > 0
    ? children.join('')
    : body;
}

PairTag.prototype.toString = function toString() {
  return `<${this.name}${this.getAttributesAsLine()}>${this.value}</${this.name}>`;
};

export default PairTag;
// END


// Решение учителя
// SingleTag.js
// BEGIN
import Node from './Node';

export default function SingleTag(name, attributes) {
  Node.apply(this, [name, attributes]);
}

SingleTag.prototype.toString = function toString() {
  return `<${this.name}${this.getAttributesAsLine()}>`;
};
// END


// PairTag.js
// BEGIN
import Node from './Node';

export default function PairedTag(name, attributes, body = '', children = []) {
  Node.apply(this, [name, attributes]);
  this.body = body;
  this.children = children;
}

PairedTag.prototype.toString = function toString() {
  const value = this.children.length > 0 ? this.children.join('') : this.body;
  return `<${this.name}${this.getAttributesAsLine()}>${value}</${this.name}>`;
};
// END
