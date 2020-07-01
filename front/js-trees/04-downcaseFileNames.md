04 / downcaseFileNames.js

Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход директорию (объект-дерево), приводит имена всех файлов в этой и во всех вложенных директориях к нижнему регистру. Результат в виде обработанной директории возвращается наружу.

```
import { mkdir, mkfile } from '@hexlet/immutable-fs-trees';
import downcaseFileNames from './downcaseFileNames.js';

const tree = mkdir('/', [
  mkdir('eTc', [
    mkdir('NgiNx'),
    mkdir('CONSUL', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hOsts'),
]);

downcaseFileNames(tree);
// {
//   name: '/',
//   type: 'directory',
//   meta: {},
//   children: [
//     {
//       name: 'eTc',
//       type: 'directory',
//       meta: {},
//       children: [
//         {
//           name: 'NgiNx',
//           type: 'directory',
//           meta: {},
//           children: [],
//         },
//         {
//           name: 'CONSUL',
//           type: 'directory',
//           meta: {},
//           children: [{ name: 'config.json', type: 'file', meta: {} }],
//         },
//       ],
//     },
//     { name: 'hosts', type: 'file', meta: {}, },
//   ],
// }
```

### Мое решение
```
import {
  mkdir, mkfile, isFile, getName, getMeta, getChildren,
} from '@hexlet/immutable-fs-trees';
import _ from 'lodash';

const downcaseFileNames = (node) => {
  const name = getName(node);
  const meta = _.cloneDeep(getMeta(node));

  if (isFile(node)) {
    return mkfile(name.toLowerCase(), meta);
  }

  const children = getChildren(node);
  const newChildren = children.map((child) => downcaseFileNames(child));

  return mkdir(name, newChildren, meta);
};

export default downcaseFileNames;
```
