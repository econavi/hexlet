solution / 03

Point.js

Реализуйте и экспортируйте по умолчанию функцию-конструктор Point с двумя свойствами x (длина) и y (высота).
```
const point = new Point(1, 1);
```

Segment.js

Реализуйте и экспортируйте по умолчанию функцию-конструктор Segment с двумя свойствами beginPoint и endPoint и геттеры для извлечения этих свойств: getBeginPoint и getEndPoint.
```
const segment = new Segment(new Point(1, 1), new Point(10, 11));
```

solution.js

Реализуйте функцию reverse, которая принимает на вход отрезок и возвращает новый отрезок с точками, добавленными в обратном порядке (begin меняется местами с end).

Примечание

* Точки в результирующем отрезке должны быть копиями (по значению) соответствующих точек исходного массива. То есть они не должны быть ссылкой на один и тот же объект, так как это разные объекты (пускай и с одинаковыми координатами).
```
const segment = new Segment(new Point(1, 10), new Point(11, -3));
const reversedSegment = reverse(segment);

const reversedSegment.getBeginPoint(); // (11, -3)
const reversedSegment.getEndPoint(); // (1, 10)
 ```

### Мое решение
```
// Point.js

function getX() {
  return this.x;
}
function getY() {
  return this.y;
}

function Point(x, y) {
  this.x = x;
  this.y = y;
  this.getX = getX;
  this.getY = getY;
}

export default Point;
```

```
// Segment.js

function getBeginPoint() {
  return this.beginPoint;
}

function getEndPoint() {
  return this.endPoint;
}

function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
  this.getBeginPoint = getBeginPoint;
  this.getEndPoint = getEndPoint;
}

export default Segment;
```

```
// solution.js

import Point from './Point.js';
import Segment from './Segment.js';

const reverse = (segment) => {
  const point1 = segment.getBeginPoint();
  const point2 = segment.getEndPoint();

  const newBeginPoint = new Point(point2.getX(), point2.getY());
  const newEndPoint = new Point(point1.getX(), point1.getY());

  return new Segment(newBeginPoint, newEndPoint);
};

export default reverse;
```