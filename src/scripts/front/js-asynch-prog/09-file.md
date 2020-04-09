file.js / 09

Реализуйте и экспортируйте асинхронную функцию `touch`, которая создает файл если его не существует.


```
import { touch } from './file.js';

touch('/myfile').then(() => console.log('created!'));
```


Подсказка

[fs.access](https://nodejs.org/api/fs.html#fs_fspromises_access_path_mode) - проверка существования файла

### Мое решение
```
import { promises as fs } from 'fs';

const touch = (filePath) => fs
  .access(filePath)
  .catch(() => {
    fs.writeFile(filePath, '');
  });

export { touch };
```