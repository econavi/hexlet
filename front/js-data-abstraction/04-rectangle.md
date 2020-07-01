rectangle.js / 04

Реализуйте абстракцию (набор функций) для работы с прямоугольниками, стороны которого всегда параллельны осям. Прямоугольник может располагаться в любом месте координатной плоскости.  

При такой постановке, достаточно знать только три параметра для однозначного задания прямоугольника на плоскости: координаты левой-верхней точки, ширину и высоту. Зная их, мы всегда можем построить прямоугольник одним единственным способом.
```
      |
    4 |    точка   ширина
      |       *-------------
    3 |       |            |
      |       |            | высота
    2 |       |            |
      |       --------------
    1 |
      |
------|---------------------------
    0 |  1   2   3   4   5   6   7
      |
      |
      |
```
Основной интерфейс:
* makeRectangle (конструктор) – создает прямоугольник. Принимает параметры: левую-верхнюю точку, ширину и высоту. Ширина и высота – положительные числа.
* Селекторы getStartPoint, getWidth и getHeight
* containsOrigin – проверяет, принадлежит ли центр координат прямоугольнику (не лежит на границе прямоугольника, а находится внутри). Чтобы в этом убедиться, достаточно проверить, что все вершины прямоугольника лежат в разных квадрантах (их можно высчитать в момент проверки).
```
// Создание прямоугольника:
// p - левая верхняя точка
// 4 - ширина
// 5 - высота
//
// p    4
// -----------
// |         |
// |         | 5
// |         |
// -----------

p = makeDecartPoint(0, 1);
rectangle = makeRectangle(p, 4, 5);

containsOrigin(rectangle); // false

rectangle2 = makeRectangle(makeDecartPoint(-4, 3), 5, 4);
containsOrigin(rectangle2); // true
```
Подсказки

* Квадрант плоскости — любая из 4 областей (углов), на которые плоскость делится двумя взаимно перпендикулярными прямыми, принятыми в качестве осей координат.

### Мое решение
```
import { makeDecartPoint, getX, getY, getQuadrant } from './points.js';

// BEGIN (write your solution here)
const makeRectangle = (startPoint, width, heigth) => ({
  startPoint,
  width,
  heigth,
});

const getStartPoint = (rectangle) => rectangle.startPoint;

const getWidth = (rectangle) => rectangle.width;

const getHeight = (rectangle) => rectangle.heigth;

const containsOrigin = (rectangle) => {
  const pointB = getStartPoint(rectangle);
  const pointD = makeDecartPoint(
    getX(pointB) + getWidth(rectangle),
    getY(pointB) - getHeight(rectangle),
  );

  return getQuadrant(pointB) === 2 && getQuadrant(pointD) === 4;
};

export {
  makeRectangle,
  getStartPoint,
  getWidth,
  getHeight,
  containsOrigin,
};
// END
```