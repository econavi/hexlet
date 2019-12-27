
/* Pascal's Triangle
Треугольник Паскаля — бесконечная таблица биномиальных коэффициентов, имеющая треугольную форму. В этом треугольнике на вершине и по бокам стоят единицы. Каждое число равно сумме двух расположенных над ним чисел. Строки треугольника симметричны относительно вертикальной оси.

0:      1
1:     1 1
2:    1 2 1
3:   1 3 3 1
4:  1 4 6 4 1

Напишите функцию generate, которая возвращает указанную строку треугольника паскаля в виде массива. Экспортируйте функцию по умолчанию.
Пример:
generate(1); // [1, 1]
generate(4); // [1, 4, 6, 4, 1] */


// Решение econavi
// BEGIN (write your solution here)
const generate = (numRow) => {
  let heightTriangle = numRow;
  const triangle = [[1], [1, 1]];

  while (heightTriangle) {
    const lastRow = triangle[triangle.length - 1];
    const newRow = [];

    const currentCount = lastRow.length - 1;
    for (let i = 0; i < currentCount; i += 1) {
      const sum = lastRow[i] + lastRow[i + 1];
      newRow.push(sum);
    }

    triangle.push([1, ...newRow, 1]);
    heightTriangle -= 1;
  }

  return triangle[numRow];
};

export default generate;
// END


// Решение учителя
// Решение учителя замороченное, я так и не смог представить в голове весь процесс этого решения. 
// BEGIN
const generate = (rowNumber) => {
  let currentRow = [1];
  for (let i = 0; i <= rowNumber; i += 1) {
    const newRow = [];

    for (let j = 0; j <= i; j += 1) {
      const first = currentRow[j - 1] || 0;
      const second = currentRow[j] || 0;
      newRow[j] = first + second;
    }

    currentRow = newRow;
  }

  return currentRow;
};

export default generate;
// END
