/* Реализуйте и импортируйте по умолчанию функцию getMirrorMatrix, которая принимает двумерный массив (матрицу) и возвращает массив, изменённый таким образом, что правая половина матрицы становится зеркальной копией левой половины, симметричной относительно вертикальной оси матрицы. Для простоты условимся, что матрица всегда имеет чётное количество столбцов и количество столбцов всегда равно количеству строк.
getMirrorMatrix([
  [11, 12, 13, 14],
  [21, 22, 23, 24],
  [31, 32, 33, 34],
  [41, 42, 43, 44],
]);

//  [
//     [11, 12, 12, 11],
//     [21, 22, 22, 21],
//     [31, 32, 32, 31],
//     [41, 42, 42, 41],
//  ] */

// Решение econavi
// BEGIN (write your solution here)
const getMirrorMatrix = (arr) => {
  const size = arr.length;
  const result = [];

  for (let i = 0; i < size; i += 1) {
    result.push(arr[i].slice(0, size / 2));

    for (let j = result[i].length - 1; j >= 0; j -= 1) {
      result[i].push(result[i][j]);
    }
  }

  return result;
};

export default getMirrorMatrix;
// END

// Решение учителя
// BEGIN
const makeMatrix = (size) => {
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    matrix.push(new Array(size));
  }

  return matrix;
};

const getMirrorMatrix = (array) => {
  const size = array.length;
  const mirrorArray = makeMatrix(size);
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size / 2; j += 1) {
      mirrorArray[i][j] = array[i][j];
      mirrorArray[i][size - j - 1] = array[i][j];
    }
  }

  return mirrorArray;
};

export default getMirrorMatrix;
// END
