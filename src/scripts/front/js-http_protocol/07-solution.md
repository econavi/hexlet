# Solution 07
Задание демонстрирует перенаправления (redirect)

* Используя telnet выполните запрос к hexlet.local (расположен на localhost) на порт 8080.
* Параметры запроса: глагол post, страница /session/new, протокол http 1.1;
* Запишите ваш request в файл solution;
 
### Мое решение

Request:
```
$ telnet localhost 8080
POST /session/new HTTP/1.1
Host: hexlet.local
```

Response:
```
HTTP/1.1 302 Found
X-Powered-By: Express
Connection: close
Location: /
Vary: Accept
Content-Type: text/plain; charset=utf-8
Content-Length: 23
Date: Sun, 29 Mar 2020 12:44:08 GMT

Found. Redirecting to /Connection closed by foreign host.
```