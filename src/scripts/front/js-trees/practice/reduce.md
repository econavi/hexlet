reduce.js

Реализуйте и экспортируйте функцию `reduce` обрабатывающую файловые деревья.

```
const tree = mkdir('/', [
  mkdir('eTc', [
    mkdir('NgiNx', [
      mkfile('config.json')
    ]),
  ]),
]);

reduce((acc, n) => acc + 1, tree, 0); // 4
```

### Мое решение
```
import { isFile, getChildren } from '@hexlet/immutable-fs-trees';

const reduce = (fn, node, acc) => {
  const newAcc = fn(acc, node);
  if (isFile(node)) {
    return newAcc;
  }

  const children = getChildren(node);
  return children.reduce((iAcc, child) => reduce(fn, child, iAcc), newAcc);
};

export { reduce };
```