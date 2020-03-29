
# Solution 03
* Используя telnet выполните запрос к hexlet.local (расположен на localhost) на порт 8080. Параметры запроса: глагол post, страница /upload, протокол http 1.1, тело: my request body. Не забудьте установить заголовки необходимые для отправки body;
* Запишите ваш request в файл solution;

### Мое решение

```
$ telnet localhost 8080
POST /upload HTTP/1.1
Host: hexlet.local
Content-type: text/plain
Content-length: 15

my request body
```
