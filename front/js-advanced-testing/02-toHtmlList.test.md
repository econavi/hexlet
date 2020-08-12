02 / toHtmlList.test.js

Протестируйте функцию, которая преобразует различные входные форматы в выходной HTML.

```
// Поддерживаются yml/json/csv
const html1 = await toHtmlList('/path/to/yaml/file');
const html2 = await toHtmlList('/path/to/json/file');
const html3 = await toHtmlList('/path/to/csv/file');
```

Каждый из входных файлов для этой функции содержит список элементов из которых формируется элемент `<ul>`. Входные данные и выходной HTML можно подсмотреть в фикстурах.

Ваша задача, пропустить через эту функцию входные файлы и сравнить результат работы функции с ожидаемым значением находящимся в файле `__fixtures__/result.html`. Функция принимает на вход путь к файлу.

Подсказки:

* [test.each](https://jestjs.io/docs/en/api#testeachtablename-fn-timeout)
* [.trim](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim) – позволяет удалять концевые пробелы

### Мое решение
```
import { promises as fs } from 'fs';

const toHtmlList = getFunction();

// BEGIN (write your solution here)
const getData = (fileName) => fs.readFile(`./__fixtures__/${fileName}`, 'utf-8');

let expectedResult;

beforeAll(async () => {
  expectedResult = await getData('result.html').then((res) => res.trim());
});

test.each(['csv', 'json', 'yml'])('toHtml %#', async (extFile) => {
  const currentPath = `./__fixtures__/list.${extFile}`;
  const result = await toHtmlList(currentPath);

  expect(result).toBe(expectedResult);
});
```