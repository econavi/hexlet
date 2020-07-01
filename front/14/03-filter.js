/*
filter.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход предикат и дерево, а возвращает отфильтрованное дерево по предикату.

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('nginx', [
      mkdir('conf.d'),
    ]),
    mkdir('consul', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hosts'),
]);

filter(n => n.type === 'directory', tree);
// {
//   name: '/',
//   type: 'directory',
//   meta: {},
//   children: [
//     {
//       name: 'etc',
//       type: 'directory',
//       meta: {},
//       children: [
//         {
//           name: 'nginx',
//           type: 'directory',
//           meta: {},
//           children: [{
//             name: 'conf.d',
//             type: 'directory',
//             meta: {},
//             children: [],
//           }],
//         },
//         {
//           name: 'consul',
//           type: 'directory',
//           meta: {},
//           children: [],
//         },
//       ],
//     },
//   ],
// }
*/

// BEGIN (write your solution here)
const filter = (f, node) => {
  if (!f(node)) {
    return null;
  }

  if (node.type === 'file') {
    return node;
  }

  return { ...node, children: node.children.map(n => filter(f, n)).filter(v => v) };
};

export default filter;
// END

/*
Решение учителя
// BEGIN
const filter = (f, node) => {
  if (!f(node)) {
    return null;
  }
  if (node.type !== 'directory') {
    return node;
  }

  const children = node.children.map(n => filter(f, n)).filter(v => v);
  return { ...node, children };
};

export default filter;
// END
*/
