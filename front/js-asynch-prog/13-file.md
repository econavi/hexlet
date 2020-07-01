file.js / 13

Реализуйте и экспортируйте асинхронную функцию `exchange`, которая обменивает содержимое двух файлов.

```
import { exchange } from './file.js';

exchange('/myfile1', '/myfile2');
```

### Мое решение
```
import { promises as fs } from 'fs';

const exchange = async (filepath1, filepath2) => {
  const content1 = fs.readFile(filepath1, 'utf-8');
  const content2 = fs.readFile(filepath2, 'utf-8');
  const [value1, value2] = await Promise.all([content1, content2]);
  const writing1 = fs.writeFile(filepath1, value2);
  const writing2 = fs.writeFile(filepath2, value1);
  await Promise.all([writing1, writing2]);
};

export { exchange };
```
