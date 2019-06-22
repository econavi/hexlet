// map.js
// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход функцию-обработчик и дерево, а возвращает отображенное дерево.
//
// const tree = mkdir('/', [
//   mkdir('eTc', [
//     mkdir('NgiNx'),
//     mkdir('CONSUL', [
//       mkfile('config.json'),
//     ]),
//   ]),
//   mkfile('hOsts'),
// ]);
//
// map(n => ({ ...n, name: n.name.toUpperCase() }), tree);
// // {
// //   name: '/',
// //   type: 'directory',
// //   meta: {},
// //   children: [
// //     {
// //       name: 'ETC',
// //       type: 'directory',
// //       meta: {},
// //       children: [
// //         {
// //           name: 'NGINX',
// //           type: 'directory',
// //           meta: {},
// //           children: [],
// //         },
// //         {
// //           name: 'CONSUL',
// //           type: 'directory',
// //           meta: {},
// //           children: [{ name: 'CONFIG.JSON', type: 'file', meta: {} }],
// //         },
// //       ],
// //     },
// //     { name: 'HOSTS', type: 'file', meta: {} },
// //   ],
// // }

// BEGIN (write your solution here)
const map = (f, node) => {
  const newNode = f(node);

  if (node.type === 'file') {
    return newNode;
  }

  return { ...newNode, children: newNode.children.map(n => map(f, n)) };
};

export default map;
// END

// Решение учителя
// // BEGIN
// const map = (f, node) => {
//   const updatedNode = f(node);
//
//   return node.type === 'directory'
//     ? { ...updatedNode, children: node.children.map(n => map(f, n)) } : updatedNode;
// };
//
// export default map;
// // END
