points.js / 03

В этой задаче, тесты написаны для отрезков, которые в свою очередь используют точки. Ваша задача, реализовать интерфейсные функции для работы с точками. Внутреннее представление точек должно быть основано на полярной системе координат, хотя интерфейс предполагает работу с декартовой системой (снаружи). Для обозначения координат используются целые числа.

Реализуйте и экспортируйте интерфейсные функции точек:
* makeDecartPoint. Принимает на вход координаты и возвращает точку. Уже реализован.
* getX
* getY

Примеры
```
const x = 4;
const y = 8;

// point хранит в себе данные в полярной системе координат
const point = makeDecartPoint(x, y);

// Здесь происходит преобразование из полярной в декартову
getX(point); // 4
getY(point); // 8
```
Подсказки

* Трансляция декартовых координат в полярные была описана в теории
* Получить x можно по формуле `radius * cos(angle)`
* Получить y можно по формуле `radius * sin(angle)`

### Мое решение
```
const makeDecartPoint = (x, y) => {
  const point = {
    angle: Math.atan2(y, x),
    radius: Math.sqrt((x ** 2) + (y ** 2)),
  };

  return point;
};

// BEGIN (write your solution here)
const getCoordinateOfPoint = (point, direction) => {
  const { angle, radius } = point;

  if (direction === 'x') {
    return Math.round(radius * Math.cos(angle));
  }

  return Math.round(radius * Math.sin(angle));
};

const getX = (point) => getCoordinateOfPoint(point, 'x');

const getY = (point) => getCoordinateOfPoint(point, 'y');
// END

export { makeDecartPoint, getX, getY };
```