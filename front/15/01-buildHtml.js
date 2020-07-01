/*
solution.js

Реализуйте и экспортируйте по умолчанию функцию buildHtml, которая возвращает строковое представление html.
import buildHtml from './solution';

const data = ['html', [
  ['meta', [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', { class: 'container' }, [
    ['h1', { class: 'header' }, 'html builder example'],
    ['div', [
      ['span', 'span text2'],
      ['span', 'span text3'],
    ]],
  ]],
]];

buildHtml(data);
<html>
  <meta><title>hello, hexlet!</title></meta>
  <body class="container">
    <h1 class="header">html builder example</h1>
    <div>
      <span>span text2</span>
      <span>span text3</span>
    </div>
  </body>
</html>
Подсказки

* Для объединения массива в строку, используйте метод join(separator).
* Эту задачу можно решить практически без единой условной конструкции используя полиморфизм на основе объекта (ключ, значения).
Решение учителя может повергнуть вас в шок. Оно не содержит ничего нового по сравнению с тем что вы проходили, но по максимуму использует пройденные идеи, функции высшего порядка, неизменяемость, полиморфизм. Потратьте время, разберитесь с ним.

*/

// BEGIN (write your solution here)
const buildHtml = (data) => {
  const iterAst = (ast) => {
    if (ast.type === 'tagsList') {
      return ast.body.map(iterAst).join('');
    }

    if (ast.type === 'tag') {
      const attrsLine = Object.keys(ast.options)
        .reduce((acc, key) => (`${acc} ${key}="${ast.options[key]}"`), '');

      return `<${ast.name}${attrsLine}>${iterAst(ast.body)}</${ast.name}>`;
    }

    return ast;
  };

  const iter = (tagsData) => {
    const [tagName, ...tagParams] = tagsData;

    if (tagName instanceof Array) {
      return { type: 'tagsList', body: tagsData.map(iter) };
    }

    const getAst = (param) => {
      const isArray = param instanceof Array;
      const isString = typeof param === 'string';
      const isObject = !isArray && !isString;

      if (isObject) return { options: param };

      return ({ body: isArray ? iter(param) : param });
    };

    const tagTemplate = {
      type: 'tag',
      name: tagName,
      options: {},
      body: '',
    };

    return tagParams
      .reduce((acc, param) => ({ ...acc, ...getAst(param) }), tagTemplate);
  };

  const ast = iter(data);
  return iterAst(ast);
};

export default buildHtml;
// END

/*
Решение учителя

// BEGIN
const propertyActions = [
  {
    name: 'body',
    check: arg => typeof arg === 'string',
  },
  {
    name: 'children',
    check: arg => arg instanceof Array,
  },
  {
    name: 'attributes',
    check: arg => arg instanceof Object,
  },
];

const getPropertyAction = arg => propertyActions.find(({ check }) => check(arg));

const buildAttrString = attrs =>
  Object.keys(attrs).map(key => ` ${key}="${attrs[key]}"`).join('');

const buildHtml = (data) => {
  const [first, ...rest] = data;
  const root = {
    name: first,
    attributes: {},
    body: '',
    children: [],
  };
  const tag = rest
    .reduce((acc, arg) => {
      const { name } = getPropertyAction(arg);
      return { ...acc, [name]: arg };
    }, root);

  return [`<${tag.name}${buildAttrString(tag.attributes)}>`,
    `${tag.body}${tag.children.map(buildHtml).join('')}`,
    `</${tag.name}>`,
  ].join('');
};

export default buildHtml;
// END
*/
