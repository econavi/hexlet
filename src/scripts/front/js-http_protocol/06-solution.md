# Solution 06

* Используя telnet выполните запрос к hexlet.local (расположен на localhost) на порт 8080. Передайте в строке запроса следующие параметры: key равный value и another_key равный another_value. Параметры запроса: глагол get, страница /, протокол http 1.1;
* Запишите ваш request в файл solution;

### Мое решение

Request:
```
$ telnet localhost 8080
GET /?key=value&another_key=another_value HTTP/1.1
Host: hexlet.local
Connection: close
```

Response:
```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 12
ETag: W/"c-r0WEeVxJ7IpMIG20rN7HX9ndB4c"
Date: Sun, 29 Mar 2020 12:25:56 GMT
Connection: close

You've done!Connection closed by foreign host.
```