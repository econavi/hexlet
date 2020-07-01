file.js / 08

Реализуйте и экспортируйте асинхронную функцию `reverse`, которая изменяет порядок расположения строк в файле на обратный.

```
import { reverse } from './file.js';

// До
// one
// two

reverse(filepath);

// После
// two
// one
```

### Мое решение
```
import { promises as fs } from 'fs';

const reverse = (filepath) => fs.readFile(filepath, 'utf-8')
  .then((content) => {
    const preparedContent = content.split('\n').reverse().join('\n');
    return fs.writeFile(filepath, preparedContent);
  });

export { reverse };
```