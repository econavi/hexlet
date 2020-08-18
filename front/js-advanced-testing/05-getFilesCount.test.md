05 / getFilesCount.test.js

Протестируйте функцию `getFilesCount()`, которая считает количество всех файлов в указанной директории и всех поддиректориях.

```
const filesCount = getFilesCount('/path/to/directory');
```

У этой функции есть дополнительное поведение. Во время обхода файлов, она записывает информацию об этом (какие файлы были задействованы) в специальный файл, который называется журналом действий или логом.

Запись в файл является нежелательным побочным эффектом. Каждый запуск будет заполнять какой-то файл, который мы никак не используем. От него нужно избавится. Все что мы хотим – чтобы функция считала количество файлов. Сделать это можно так. Для записи в файл, функция `getFilesCount()`, используют другую функцию, которую можно подменить:

```
const getFilesCount = (path, log = writeDataToFile) => {
  // Где-то внутри  во время работы
  writeDataToFile(`file ${name} has been processed`);
};
```

Для подмены нужно передать вторым параметром функцию-пустышку, которая не будет ничего делать. В таком случае ее вызов внутри `getFilesCount()` хоть и отработает, но не породит побочного эффекта.

Подсказки:

* Передайте этой функции путь до директории внутри *fixtures* и убедитесь в том что она правильно посчитала количество файлов внутри

### Мое решение
```
import path from 'path';
import _ from 'lodash';
import getFunction from '../functions.js';

const getFilesCount = getFunction();

const getFixturePath = (name) => path.join('__fixtures__', name);

// BEGIN (write your solution here)
test('countFiles', async () => {
  const resultCount = await getFilesCount(getFixturePath(''), _.noop);
  expect(resultCount).toBe(7);
});
// END
```