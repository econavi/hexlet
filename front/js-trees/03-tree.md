03 / tree.js

Реализуйте и экспортируйте функцию `compressImages`, которая принимает на вход директорию, находит внутри нее картинки и "сжимает" их. Под сжиманием понимается уменьшение свойства `size` в метаданных в два раза. Функция должна вернуть обновленную директорию со сжатыми картинками и всеми остальными данными, которые были внутри этой директории.

Картинками считаются все файлы заканчивающиеся на *.jpg*.
```
const tree = mkdir('my documents', [
  mkfile('avatar.jpg', { size: 100 }),
  mkfile('passport.jpg', { size: 200 }),
  mkfile('family.jpg', { size: 150 }),
  mkfile('addresses', { size: 125 }),
  mkdir('presentations')
]);

const newTree = compressImages(tree);
// То же самое, что и tree, но во всех картинках размер уменьшен в два раза
```

### Мое решение
```
import _ from 'lodash';
import {
  mkdir, mkfile, isFile, getChildren, getName, getMeta,
} from '@hexlet/immutable-fs-trees';

const compressImages = (dir) => {
  const children = getChildren(dir);
  const newChildren = children.map((child) => {
    const name = getName(child);
    if (!isFile(child) || !name.endsWith('jpg')) {
      return child;
    }

    const meta = getMeta(child);
    const newMeta = _.cloneDeep(meta);
    newMeta.size /= 2;

    return mkfile(name, newMeta);
  });

  const newMeta = _.cloneDeep(getMeta(dir));
  return mkdir(getName(dir), newChildren, newMeta);
};

export { compressImages };
```