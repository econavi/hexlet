ls.js

Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход путь (абсолютный или относительный) и возвращает информацию о файлах и директориях, расположенных по этому пути. Данные возвращаются в виде массива объектов, где каждый элемент — это информация о конкретном файле: его путь и описание доступов (`stat.mode`). Объекты в массиве должны быть отсортированы по имени файла.

## Примеры
```
import ls from '../ls.js';

await ls('/var');
// [
//   { filepath: '/var/local', mode: 17917 },
//   { filepath: '/var/lock', mode: 17407 },
//   { filepath: '/var/log', mode: 16877 },
// ];

await ls('/etc/passwd');
// [{ filepath: '/etc/passwd', mode: 33188 }];

await ls('../../../../etc/passwd');
// [{ filepath: '/etc/passwd', mode: 33188 }];
```

Эта функция должна уметь обрабатывать не только директории, но и файлы. В таком случае отдается массив с одним объектом — информацией по текущему файлу.

## Подсказки

* `readdir()` — чтение директории
* `stat()` — информация о файле.
* `isFile()` — является ли файлом, `mode` - описание доступа.


### Мое решение
```
import path from 'path';
import { promises as fs } from 'fs';

const ls = async (filepath) => {
  const absolutePath = path.resolve(filepath);

  const stat = await fs.stat(absolutePath);
  if (stat.isFile()) {
    return [{ filepath: absolutePath, mode: stat.mode }];
  }

  const fileNames = await fs.readdir(absolutePath);
  const filePaths = fileNames.map((name) => `${absolutePath}/${name}`);

  const promises = filePaths.map((filePath) => fs.stat(filePath));
  const stats = await Promise.all(promises);

  return stats.map((fileStat, i) => ({ filepath: filePaths[i], mode: fileStat.mode }));
};

export default ls;
```