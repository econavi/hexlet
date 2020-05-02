map.js

Реализуйте и экспортируйте функцию `map`, которая принимает на вход функцию-обработчик и дерево, а возвращает отображенное дерево.

```
const tree = mkdir('/', [
  mkdir('eTc', [
    mkdir('NgiNx', [
      mkfile('config.json')
    ]),
  ]),
]);

map(n => ({ ...n, name: n.name.toUpperCase() }), tree);
// {
//   name: '/',
//   type: 'directory',
//   meta: {},
//   children: [
//     {
//       name: 'ETC',
//       type: 'directory',
//       meta: {},
//       children: [
//         {
//           name: 'NGINX',
//           type: 'directory',
//           meta: {},
//           children: [{ name: 'CONFIG.JSON', type: 'file', meta: {} }],
//         },
//       ],
//     },
//   ],
// }
```

### Мое решение
```
import { isDirectory, getChildren } from '@hexlet/immutable-fs-trees';

const map = (fn, node) => {
  const updatedNode = fn(node);

  return isDirectory(node)
    ? { ...updatedNode, children: getChildren(node).map((child) => map(fn, child)) }
    : updatedNode;
};

export { map };
```