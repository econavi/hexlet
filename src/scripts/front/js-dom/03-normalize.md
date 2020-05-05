03 / normalize.js

Реализуйте и экспортируйте по умолчанию функцию `normalize`, которая нормализует имена классов для всех элементов на странице. В данном случае это означает, что происходит преобразование всех классов, написанных с использованием `kebab` нотации, в `camelCase` нотацию: `text-center` => `textCenter`
Попробуйте решить эту задачу без использования регулярных выражений.

```
// <body>
//   <div class="text-center row-b">Bam</div>
// </body>
normalize(document);
console.log(document.body.innerHTML);
// <body>
//   <div class="textCenter rowB">Bam</div>
// </body>
```

Подсказки

* Самый простой способ найти все элементы в документе это `document.body.getElementsByTagName('*')`
* Приведение к camelCase [https://lodash.com/docs#camelCase](https://lodash.com/docs#camelCase)
* Замена классов [replace](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList#Methods) у объекта classList

### Мое решение
```
import { camelCase } from 'lodash';

const normalize = (doc) => {
  const nodes = [...doc.getElementsByTagName('*')]
    .filter((node) => !!node.getAttribute('class'));

  nodes.forEach((node) => {
    const classes = node.getAttribute('class').split(' ');
    const updatedClasses = classes.map((val) => camelCase(val));
    node.setAttribute('class', updatedClasses.join(' '));
  });
};

export default normalize;
```

### Второй вариант
```
import { camelCase } from 'lodash';

const normalize = (doc) => {
  const nodes = doc.getElementsByTagName('*');
  nodes.forEach((node) => {
    const process = (item) => node.classList.replace(item, camelCase(item));
    node.classList.forEach(process);
  });
};

export default normalize;
```

### Третий вариант
```
import { camelCase } from 'lodash';

const normalize = (doc) => {
  const nodes = doc.getElementsByTagName('*');
  const replaceClass = (node, className) => node.classList.replace(className, camelCase(className));

  nodes.forEach((node) => {
    node.classList.forEach((className) => replaceClass(node, className));
  });
};

export default normalize;
```

