url.js

Реализуйте абстракцию для работы с урлами. Она должна извлекать и менять части адреса. Интерфейс:
* make(url) - Конструктор. Создает урл.
* setProtocol(data, protocol) - Сеттер. Меняет схему.
* getProtocol(data) - Селектор (геттер). Извлекает схему.
* setHost(data, host) - Сеттер. Меняет хост.
* getHost(data) - Геттер. Извлекает хост.
* setPath(data, path) - Сеттер. Меняет строку запроса.
* getPath(data) - Геттер. Извлекает строку запроса.
* setQueryParam(data, key, value) - Сеттер. Устанавливает значение для параметра запроса.
* getQueryParam(data, paramName, default = null) - Геттер. Извлекает значение для параметра запроса. Третьим параметром функция принимает значение по умолчанию, которое возвращается тогда, когда в запросе не было такого параметра
* toString(data) - Геттер. Преобразует урл в строковой вид.

```
const url = make('https://hexlet.io/community?q=low');

setProtocol(url, 'http:');
toString(url); // 'http://hexlet.io/community?q=low'

setPath(url, '/404');
toString(url); // 'http://hexlet.io/404?q=low'

setQueryParam(url, 'page', 5);
toString(url); // 'http://hexlet.io/404?q=low&page=5'

setQueryParam(url, 'q', 'high');
toString(url); // 'http://hexlet.io/404?q=high&page=5'
```

Подсказки

* [Работа с адресами — URL](https://nodejs.org/api/url.html)


### Мое решение
```
import { URL } from 'url';

const make = (address) => new URL(address);

const getProtocol = (data) => data.protocol;
const getHost = (data) => data.host;
const getPath = (data) => data.pathname;

const getQueryParam = (data, key, defaultValue = null) => (
  data.searchParams.get(key) || defaultValue
);

const setProtocol = (data, protocol) => {
  data.protocol = protocol;
};

const setHost = (data, host) => {
  data.hostname = host;
};

const setPath = (data, path) => {
  data.pathname = path;
};

const setQueryParam = (data, key, value) => (
  data.searchParams.set(key, value)
);

const toString = (data) => data.toString();

export {
  make,
  getProtocol,
  setProtocol,
  getHost,
  setHost,
  getPath,
  setPath,
  getQueryParam,
  setQueryParam,
  toString,
};
```