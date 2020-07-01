filter.js

Реализуйте и экспортируйте функцию `filter`, которая принимает на вход предикат и дерево, а возвращает отфильтрованное дерево по предикату.

```
const tree = mkdir('/', [
  mkdir('eTc', [
    mkdir('NgiNx', [
      mkfile('config.json')
    ]),
  ]),
]);

filter((n) => n.type === 'directory', tree);
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
//           children: [],
//         },
//       ],
//     },
//   ],
// }
```

### Мое решение
```
import { isFile, getChildren } from '@hexlet/immutable-fs-trees';

const filter = (fn, node) => {
  if (!fn(node)) {
    return null;
  }

  if (isFile(node)) {
    return node;
  }

  const children = getChildren(node).filter((v) => fn(v));
  return {
    ...node,
    children: children.map((child) => filter(fn, child)),
  };
};

export { filter };
```