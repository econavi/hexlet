CustomPromise.js

В данном испытании вы собственными силами начнёте реализовывать "облегчённую" версию объекта Promise. Последующие испытания будут раскрывать тему и дополнять её новой функциональностью.

В данном испытании необходимо создать только класс, без асинхронности, но с цепочкой вызовов. Для этого реализуйте в классе `CustomPromise` конструктор, принимающий колбек `executor(resolve)` и метод `then(callback)`;

В решении должны отсутствовать встроенные Promise и ключевое слово `async`.

Примеры использования:
```
import CustomPromise from '../CustomPromise.js';

const promise = new CustomPromise((resolve) => resolve('Hello, world!'));
promise
  .then((value) => {
    console.log(value); // 'Hello, world!'
  });

const result = await promise
  .then((value) => value.replace('Hello', 'Goodbye'))
  .then((value) => value.toUpperCase());
console.log(result); // GOODBYE, WORLD!
```

Подсказки:

Вам понадобится вспомогательный метод, чтобы замыкать значения.

Изучите кейсы использования в тестах, они опираются на возможности промисов из [документации](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

В решении учителя используется связывание через `bind()`, но в процессе решения можно упростить себе задачу, используя стрелочные функции.

### Мое решение
```
class CustomPromise {
  constructor(executor) {
    executor(this.onResolve);
  }

  onResolve = (data) => {
    this.result = data;
  }

  then(callback) {
    const result = callback(this.result);
    return new CustomPromise((resolve) => resolve(result));
  }
}

export default CustomPromise;