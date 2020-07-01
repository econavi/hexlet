points.js / 01

Реализуйте и экспортируйте по умолчанию функцию calculateDistance, которая находит расстояние между двумя точками на плоскости:  
```
point1 = [0, 0];  
point2 = [3, 4];  
calculateDistance(point1, point2); // 5
```

Подсказки

* Формула расчёта расстояния между двумя точками https://www.youtube.com/watch?v=cavwFx4Xd0o

### Мое решение
```
const calculateDistance = (a, b) => {
  const [x1, y1] = a;
  const [x2, y2] = b;

  const ac = x2 - x1;
  const bc = y2 - y1;

  const d = Math.sqrt((ac ** 2) + (bc ** 2));

  return d;
};

export default calculateDistance;
```

### Решение учителя
```
const calculateDistance = (point1, point2) => {
  const deltaX = point2[0] - point1[0];
  const deltaY = point2[1] - point1[1];

  return Math.sqrt((deltaX ** 2) + (deltaY ** 2));
};

export default calculateDistance;
```