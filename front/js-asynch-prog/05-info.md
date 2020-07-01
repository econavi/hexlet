info.js / 05

Реализуйте и экспортируйте асинхронную функцию `getDirectorySize`, которая считает размер переданной директории (не включая поддиректории). Анализ размера файла должен происходить параллельно, для этого воспользуйтесь библиотекой *async*

Пример:
```
import { getDirectorySize } from './info.js';

getDirectorySize('/usr/local/bin', (err, size) => {
  console.log(size);
});
```

Подсказка

* [fs.readdir](https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback) - чтение содержимого директории
* [path.join](https://nodejs.org/api/path.html#path_path_join_paths) - конструирует пути
* [async.map](http://caolan.github.io/async/v3/docs.html#map)
* [fs.stat](https://nodejs.org/api/fs.html#fs_fs_stat_path_options_callback) - информация о файле
* [_.sumBy](https://lodash.com/docs#sumBy) - нахождение суммы в массиве

### Мое решение
```
import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

const getDirectorySize = (dirPath, cb) => {
  fs.readdir(dirPath, (error1, fileNames) => {
    if (error1) {
      cb(error1);
      return;
    }
    const paths = fileNames.map((name) => path.join(dirPath, name));
    async.map(paths, fs.stat, (error2, stats) => {
      if (error2) {
        cb(error2);
        return;
      }
      const filesInfo = stats.filter((item) => item.isFile());
      const totalSize = _.sumBy(filesInfo, 'size');
      cb(null, totalSize);
    });
  });
};

export { getDirectorySize };
```