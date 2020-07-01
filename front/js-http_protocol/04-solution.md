# Solution 04

* Выполните авторизацию на сайте hexlet.local (расположен на localhost:8080). Для этого отправьте следующие данные формы: username со значением admin, password со значением secret на урл /session/new. Используйте глагол post и тип application/x-www-form-urlencoded;
* Запишите ваш HTTP-запрос в файл solution;

### Мое решение

Request:
```
$ telnet localhost 8080
POST /session/new HTTP/1.1
Host: hexlet.local
Content-Type: application/x-www-form-urlencoded
Content-Length: 30


username=admin&password=secret
```

Response:
```
HTTP/1.1 200 OK
X-Powered-By: Express
Connection: close
Content-Type: text/html; charset=utf-8
Content-Length: 12
ETag: W/"c-r0WEeVxJ7IpMIG20rN7HX9ndB4c"
Date: Sun, 29 Mar 2020 09:07:35 GMT


You've done!Connection closed by foreign host.
```