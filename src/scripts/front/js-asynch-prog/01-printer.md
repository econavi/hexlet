printer.js / 01

Реализуйте асинхронную функцию, которая читает данные файла по указанному пути и выводит их в консоль.
```
import print from './printer.js';

print('./myfile');
```
Подсказки

* В теории был пример асинхронного чтения файла. Нужно сделать по аналогии.


### Мое решение
```
import fs from 'fs';

const readFile = (path) => fs
  .readFile(path, 'utf-8', (error, data) => console.log(data));

export default readFile;
```