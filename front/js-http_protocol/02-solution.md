# Solution 02

* Используя telnet выполните запрос к hexlet.local (расположен на localhost) на порт 8080. Параметры запроса: глагол get, страница /, протокол http 1.1;
* Запишите ваш request в файл solution;

### Мое решение
```
GET / HTTP/1.1
host: hexlet.local
```

### Решение учителя
```
GET / HTTP/1.1
Host: hexlet.local
Connection: close
```