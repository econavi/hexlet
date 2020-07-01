02 / prettify.js

Реализуйте функцию `prettify`, которая находит текст (дочерние текстовые ноды) внутри элемента `div` и оборачивает текст в параграф. Экспортируйте функцию по умолчанию.

```
// <body>
//   <p>Boom</p>
//   text
//   <div>Bam</div>
// </body>
const elements = prettify(document);
console.log(document.body.innerHTML);
// <body>
//   <p>Boom</p>
//   text
//   <div><p>Bam</p></div>
// </body>
```

Подсказки

* Очистка строки от пробельных символов: [trim](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim)

### Мое решение
```
const prettify = (doc) => {
  const divs = doc.querySelectorAll('div');
  divs.forEach((div) => {
    const textNodes = [...div.childNodes]
      .filter((node) => node instanceof Text)
      .filter((node) => node.textContent.trim() !== '');

    textNodes.forEach((node) => {
      const p = document.createElement('p');
      p.textContent = node.textContent;
      node.replaceWith(p);
    });
  });
};

export default prettify;
```