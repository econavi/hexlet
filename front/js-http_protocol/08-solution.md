# Solution 08
* Используя telnet авторизуйтесь на hexlet.local (расположен на localhost:8080). Параметры запроса: глагол get, страница /admin, протокол http 1.1, имя пользователя Aladdin, пароль open sesame;
* Запишите ваш request в файл solution;

Подсказка:

Для кодирования логина и пароля используйте следующую команду в терминале: printf 'username:password' | base64


### Мое решение

Request:
```
$ telnet localhost 8080
GET /admin HTTP/1.1
Host: hexlet.local
Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==
```

Response:
```
HTTP/1.1 200 OK
X-Powered-By: Express
Connection: close
Date: Sun, 29 Mar 2020 13:30:36 GMT
Content-Length: 14

Access grantedConnection closed by foreign host.
```