
/* Текущая версия htmlBuilder должна уметь работать с одиночными тегами. Список тегов, которые являются одиночными, находится в singleTagsList.
Пример:
// 

['br'];

// <img src="/path">
['img', { src: '/path' }];
solution.js

Реализуйте и экспортируйте функции parse и render.
* Функция render принимает на вход ast и возвращает строковое представление.
* Функция parse принимает на вход исходную структуру и возвращает представление в виде ast.
const data = ['html', [
  ['meta', { id: 'uniq-key' }, [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', [
    ['br'],
  ]],
]];

const ast = parse(data);

{ name: 'html', attributes: {}, body: '', children: [
  { name: 'meta', attributes: { id: 'uniq-key' }, body: '', children: [
    { name: 'title', attributes: {}, body: 'hello, hexlet!', children: [] },
  ]},
  { name: 'body', attributes: {}, body: '', children: [
    { name: 'br', attributes: {}, body: '', children: [] },
  ]},
]}
*/



// Решение econavi
const singleTagsList = new Set(['hr', 'img', 'br']);

// BEGIN (write your solution here)
// Функция parse принимает на вход исходную структуру и возвращает представление в виде ast.
export const parse = (data) => {
  const [tagName, ...tagParams] = data;

  if (tagName instanceof Array) {
    return { type: 'tagsList', body: data.map(parse) };
  }

  const tagTemplate = {
    type: 'tag',
    name: tagName,
    options: {},
    body: '',
  };

  const getParam = (elem) => {
    const isArray = elem instanceof Array;
    const isString = typeof elem === 'string';
    const isObject = !isArray && !isString;

    if (isObject) return { options: elem };

    return ({ body: isArray ? parse(elem) : elem });
  };

  return tagParams.reduce((acc, param) => ({ ...acc, ...getParam(param) }), tagTemplate);
};

// Функция render принимает на вход ast и возвращает строковое представление.
export const render = (ast) => {
  if (ast.type === 'tagsList') {
    return ast.body.map(render).join('');
  }

  if (ast.type === 'tag') {
    const attrsString = Object.keys(ast.options)
      .reduce((acc, key) => (`${acc} ${key}="${ast.options[key]}"`), '');

    const singleTag = singleTagsList.has(ast.name);
    const tailTag = singleTag ? '' : `</${ast.name}>`;

    return `<${ast.name}${attrsString}>${render(ast.body)}${tailTag}`;
  }

  return ast;
};
// END


// Решение учителя
import { identity } from 'lodash';

const singleTagsList = new Set(['hr', 'img', 'br']);

// BEGIN
export const render = (data) => {
  const {
    name,
    attributes,
    body,
    children,
  } = data;
  const attrsLine = Object.keys(attributes)
    .map(key => ` ${key}="${attributes[key]}"`).join('');
  const content = children.length > 0 ? children.map(render).join('') : body;

  if (singleTagsList.has(name)) {
    return `<${name}${attrsLine}>`;
  }

  return `<${name}${attrsLine}>${content}</${name}>`;
};

const propertyActions = [
  {
    name: 'body',
    check: arg => typeof arg === 'string',
    process: identity,
  },
  {
    name: 'children',
    check: arg => arg instanceof Array,
    process: (children, f) => children.map(f),
  },
  {
    name: 'attributes',
    check: arg => arg instanceof Object,
    process: identity,
  },
];

const getPropertyAction = arg => propertyActions.find(({ check }) => check(arg));

export const parse = (data) => {
  const [first, ...rest] = data;
  const root = {
    name: first,
    attributes: {},
    body: '',
    children: [],
  };
  return rest.reduce((acc, arg) => {
    const { name, process } = getPropertyAction(arg);
    return { ...acc, [name]: process(arg, parse) };
  }, root);
};
// END
