file.js / 11

Это упражнение вы уже делали, но теперь тоже самое нужно сделать с помощью промисов.

Реализуйте и экспортируйте асинхронную функцию `getDirectorySize`, которая считает размер переданной директории (не включая поддиректории).

Пример:
```
import { getDirectorySize } from './file.js';

getDirectorySize('/usr/local/bin').then(console.log);
```

Подсказка

* [fs.readdir](https://nodejs.org/api/fs.html#fs_fspromises_readdir_path_options) - чтение содержимого директории
* [path.join](https://nodejs.org/api/path.html#path_path_join_paths) - конструирует пути
* [fs.stat](https://nodejs.org/api/fs.html#fs_fspromises_stat_path_options) - информация о файле
* [_.sumBy](https://lodash.com/docs#sumBy) - нахождение суммы в массиве


### Мое решение
```
import path from 'path';
import _ from 'lodash';
import { promises as fs } from 'fs';

const getDirectorySize = (dirpath) => {
  const promise = fs.readdir(dirpath).then((fileNames) => {
    const filePaths = fileNames.map((fileName) => path.join(dirpath, fileName));
    const promises = filePaths.map(fs.stat);
    return Promise.all(promises);
  });

  return promise.then((statsData) => _.sumBy(statsData.filter((stat) => stat.isFile()), 'size'));
};

export { getDirectorySize };
```