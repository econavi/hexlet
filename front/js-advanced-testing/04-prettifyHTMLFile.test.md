04 / prettifyHTMLFile.test.js

Протестируйте функцию, которая форматирует указанный HTML-файл.

```
// содержимое до форматирования
// <div><p>hello <b>world</b></p></div>
await prettifyHTMLFile('/path/to/file');

// содержимое после форматирования:
// <div>
//     <p>hello <b>world</b></p>
// </div>
```

### Мое решение

```
import os from 'os';
import path from 'path';
import { promises as fs } from 'fs';
import getFunction from '../functions.js';

const prettifyHTMLFile = getFunction();

// BEGIN (write your solution here)
const getFixturePath = (filename) => path.join('__fixtures__', filename);
const getDataFile = (file) => fs.readFile(getFixturePath(file), 'utf-8');

test('prettify html', async () => {
  // Взять содержимое файла before
  const beforeData = await getDataFile('before.html');

  // Записать во временную папку
  const newBeforePath = path.join(os.tmpdir(), 'before.html');
  await fs.writeFile(newBeforePath, beforeData);

  // Прогнать через функцию
  await prettifyHTMLFile(newBeforePath);

  // Сравнить результат с файлом after
  const newBeforeData = await fs.readFile(newBeforePath, 'utf-8');
  const actualData = await getDataFile('after.html');

  expect(newBeforeData).toBe(actualData);
});
// END
```