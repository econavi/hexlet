# Solution 05

Это задание демонстрирует работу в режиме chunked.

* Используя telnet выполните запрос к hexlet.local (расположен на localhost) на порт 8080. Параметры запроса: глагол get, страница /stream, протокол http 1.1;
* Запишите ваш request в файл solution;

### Мое решение

Request:
```
$ telnet localhost 8080
GET /stream HTTP/1.1
Host: hexlet.local
```

Response:
```
HTTP/1.1 200 OK
X-Powered-By: Express
Transfer-Encoding: chunked
Connection: close
Date: Sun, 29 Mar 2020 11:35:16 GMT

58
Lol pi agmu geh rirjap kuhutmem du ezolet ho riira wufofuta vasne rilo lecizzih damejik.
47
Si huswami vigjo memkop pav ubuese ci se siozope hebjecev zuba busupic.
59
De bicizmo jori ucizo okaomu zuole viwsafi mov onoci nimdirapa ic gizjuc nel vuk vunebka.
56
Bibiwka huzbitam mevjajo ocujoro ulazuhva juuvu cimje wirju re reb jen lozji juv gibu.
59
Niz inpim anhe ewlo vigpa jareh vekajud rug mec vavar sejav ud izovi fesap fefipag imadi.
0

Connection closed by foreign host.
```