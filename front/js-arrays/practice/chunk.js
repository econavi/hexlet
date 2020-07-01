/* Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход массив и число, которое задает размер чанка (куска). Функция должна вернуть массив, состоящий из чанков указанной размерности.
chunk(['a', 'b', 'c', 'd'], 2);
// [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3);
// [['a', 'b', 'c'], ['d']] */

// Решение econavi
// BEGIN (write your solution here)
export default (arr, sizeChunk) => {
  const elements = arr.slice();
  const result = [];

  while (elements.length >= sizeChunk) {
    const chunk = elements.splice(0, sizeChunk);
    result.push(chunk);
  }

  if (elements.length) result.push(elements);

  return result;
};
// END


// Решение учителя
// BEGIN
export default (arr, size) => {
  const nArr = [];
  for (let i = 0; i < arr.length; i += size) {
    nArr.push(arr.slice(i, i + size));
  }
  return nArr;
};
// END
