segments.js / 02

Отрезок — еще один графический примитив. В коде описывается парой точек, одна из которых — начало отрезка, другая — конец. Обычный отрезок не имеет направления, поэтому вы сами вольны выбирать то, какую точку считать началом, а какую концом.
В этом задании подразумевается, что вы уже понимаете принцип построения абстракции и способны самостоятельно принять решение о том, как она будет реализована. Напомню, что сделать это можно разными способами и нет одного правильного.

Реализуйте и экспортируйте указанные ниже функции:
* makeSegment. Принимает на вход две точки и возвращает отрезок.
* getMidpointOfSegment. Принимает на вход отрезок и возвращает точку находящуюся на середине отрезка.
* getBeginPoint. Принимает на вход отрезок и возвращает точку начала отрезка.
* getEndPoint. Принимает на вход отрезок и возвращает точку конца отрезка.

Пример
```
const beginPoint = makeDecartPoint(3, 2);
const endPoint = makeDecartPoint(0, 0);
segment = makeSegment(beginPoint, endPoint);

getMidpointOfSegment(segment); // (1.5, 1)
getBeginPoint(segment); // (3, 2)
getEndPoint(segment); // (0, 0)
```
Подсказки

* Средняя точка вычисляется по формуле  
x = (x1 + x2) / 2 и y = (y1 + y2) / 2.


### Мое решение
```
import { makeDecartPoint, getX, getY } from './points.js';

// BEGIN (write your solution here)
const makeSegment = (a, b) => ({
  beginPoint: a,
  endPoint: b,
});

const getBeginPoint = (segment) => segment.beginPoint;

const getEndPoint = (segment) => segment.endPoint;

const getMidpointOfSegment = (segment) => {
  const { beginPoint: a, endPoint: b } = segment;
  const x = (getX(a) + getX(b)) / 2;
  const y = (getY(a) + getY(b)) / 2;
  return makeDecartPoint(x, y);
};

export {
  makeSegment,
  getBeginPoint,
  getEndPoint,
  getMidpointOfSegment,
};
// END
```

### Решение учителя
```
import { makeDecartPoint, getX, getY } from './points.js';

// BEGIN
const makeSegment = (point1, point2) => {
  const segment = { beginPoint: point1, endPoint: point2 };
  return segment;
};

const getBeginPoint = (segment) => segment.beginPoint;

const getEndPoint = (segment) => segment.endPoint;

const getMidpointOfSegment = (segment) => {
  const beginPoint = getBeginPoint(segment);
  const endPoint = getEndPoint(segment);

  const x = (getX(beginPoint) + getX(endPoint)) / 2;
  const y = (getY(beginPoint) + getY(endPoint)) / 2;

  return makeDecartPoint(x, y);
};

export {
  makeSegment,
  getBeginPoint,
  getEndPoint,
  getMidpointOfSegment,
};
// END
```