file.js / 10

Реализуйте и экспортируйте асинхронную функцию `getTypes`, которая анализирует список переданных путей и возвращает массив (в промисе), с описанием того, что находится по каждому из путей:

```
import { getTypes } from './file.js';

getTypes(['/etc', '/etc/hosts', '/undefined']).then(console.log);
// ['directory', 'file', null]
```

Эта функция должна отрабатывать успешно в любом случае. Если во время выполнения асинхронной операции возникла ошибка, то значением для этого пути будет `null`. Для простоты считаем, что в эту функцию всегда передается как минимум один путь для обработки (иначе придется задействовать механизм, который проходится в курсах далее).

Подсказки

* [fs.stat](https://nodejs.org/api/fs.html#fs_fspromises_stat_path_options) - информация о файле или директории. Для проверки на директорию используйте метод `isDirectory`.
* Методы `then` и `catch` не меняют сам промис, а возвращают новый


### Мое решение
```
import { promises as fs } from 'fs';

const getTypes = (filePaths) => filePaths.reduce((acc, path) => acc
  .then((prevAcc) => fs.stat(path).then((stats) => {
    const fileType = stats.isDirectory() ? 'directory' : 'file';
    return [...prevAcc, fileType];
  }).catch(() => [...prevAcc, null])), Promise.resolve([]));

export { getTypes };
```