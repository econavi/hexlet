/* Node.js
Реализуйте тип Node.js используя прототип.

PairedTag.js, SingleTag.js
Реализуйте прототипное наследование от типа Node. */

/*=======================================================*/

// Решение econavi
// Node.js
// BEGIN (write your solution here)
function Node(name, attributes = {}) {
  this.name = name;
  this.attributes = attributes;
}

Node.prototype.getAttributesAsLine = function getAttributesAsLine() {
  return Object.keys(this.attributes)
    .reduce((acc, key) => `${acc} ${key}="${this.attributes[key]}"`, '');
};

export default Node;
// END


// PairedTag.js
import Node from './Node';

export default function PairedTag(name, attributes, body = '', children = []) {
  Node.apply(this, [name, attributes]);
  this.body = body;
  this.children = children;
}

// BEGIN (write your solution here)
PairedTag.prototype = Object.create(Node.prototype);
// END

PairedTag.prototype.toString = function toString() {
  const value = this.children.length > 0 ? this.children.map((child) => child.toString()).join('') : this.body;
  return `<${this.name}${this.getAttributesAsLine()}>${value}</${this.name}>`;
};


// SingleTag.js
// BEGIN (write your solution here)
import Node from './Node';

function SingleTag(name, attributes) {
  Node.apply(this, [name, attributes]);
}

SingleTag.prototype = Object.create(Node.prototype);

SingleTag.prototype.toString = function toString() {
  return `<${this.name}${this.getAttributesAsLine()}>`;
};

export default SingleTag;
// END

/*=======================================================*/

// Решение учителя
// Node.js
// BEGIN
export default function Node(name, attributes = {}) {
  this.name = name;
  this.attributes = attributes;
}

Node.prototype.getAttributesAsLine = function getAttributesAsLine() {
  return Object.keys(this.attributes).reduce((acc, key) => `${acc} ${key}="${this.attributes[key]}"`, '');
};
// END


PairedTag.js
import Node from './Node';

export default function PairedTag(name, attributes, body = '', children = []) {
  Node.apply(this, [name, attributes]);
  this.body = body;
  this.children = children;
}

// BEGIN
PairedTag.prototype = Object.create(Node.prototype);
// END

PairedTag.prototype.toString = function toString() {
  const value = this.children.length > 0 ? this.children.map((child) => child.toString()).join('') : this.body;
  return `<${this.name}${this.getAttributesAsLine()}>${value}</${this.name}>`;
};


SingleTag.js
// BEGIN
import Node from './Node';

export default function SingleTag(name, attributes) {
  Node.apply(this, [name, attributes]);
}

SingleTag.prototype = Object.create(Node.prototype);

SingleTag.prototype.toString = function toString() {
  return `<${this.name}${this.getAttributesAsLine()}>`;
};
// END


