info.js / 03

Реализуйте и экспортируйте асинхронную функцию `compareFileSizes`, которая сравнивает размеры двух файлов. Если первый больше второго, то она возвращает единицу, если размеры равны, то возвращает ноль, иначе — -1.

```
import { compareFileSizes } from './info.js';

compareFileSizes('file1', 'file2', (_err, result) => console.log(result));
```

Подсказка

* Для реализации этого задания, нужно воспользоваться функцией [fs.stat](https://nodejs.org/api/fs.html#fs_fs_stat_path_options_callback), которая использовалась в примерах теории
* [Math.sign](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/sign)


### Мое решение
```
import fs from 'fs';

const compareFileSizes = (filePath1, filePath2, cb) => {
  fs.stat(filePath1, (error1, stats1) => {
    fs.stat(filePath2, (error2, stats2) => {
      const diff = stats1.size - stats2.size;
      cb(null, Math.sign(diff));
    });
  });
};

export { compareFileSizes };
```