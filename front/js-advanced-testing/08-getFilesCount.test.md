08 / getFilesCount.test.js

Протестируйте функцию `getFilesCount(path, log)`, которая считает количество всех файлов в указанной директории и всех поддиректориях. В отличие от предыдущей версии задания, здесь нас интересует только то, что эта функция выполняет логирование. Мы хотим убедиться, что она отправляет сообщение в лог. Для этого придётся воспользоваться моком.

**Подсказки**

- [toHaveBeenCalledTimes](https://jestjs.io/docs/en/expect#tohavebeencalledtimesnumber)
- [toHaveBeenCalledWith](https://jestjs.io/docs/en/expect#tohavebeencalledwitharg1-arg2-)

### Мое решение

```
import path from 'path';
import { jest } from '@jest/globals';
import getFunction from '../functions.js';

const getFilesCount = getFunction();

const getFixturePath = (name) => path.join('__fixtures__', name);

test('getFilesCount', () => {
  const logCallback = jest.fn();
  getFilesCount(getFixturePath('nested'), logCallback);
  expect(logCallback).toHaveBeenCalledTimes(1);
  expect(logCallback).toHaveBeenCalledWith('Go!');
});
```