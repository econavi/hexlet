/* Реализуйте и экспортируйте по умолчанию функцию isContinuousSequence, которая проверяет, является ли переданная последовательность целых чисел возрастающей непрерывно (не имеющей пропусков чисел). Например, последовательность [4, 5, 6, 7] — непрерывная, а [0, 1, 3] — нет. Последовательность может начинаться с любого числа, главное условие — отсутствие пропусков чисел. Последовательность из одного числа не может считаться возрастающей.
Примеры

isContinuousSequence([10, 11, 12, 13]);     // true
isContinuousSequence([-5, -4, -3]);         // true

isContinuousSequence([10, 11, 12, 14, 15]); // false
isContinuousSequence([1, 2, 2, 3]);         // false
isContinuousSequence([7]);                  // false
isContinuousSequence([]);                   // false */


// Решение econavi
// BEGIN (write your solution here)
const isContinuousSequence = (numbers) => {
  if (numbers.length < 2) return false;

  for (let i = 0; i < numbers.length - 1; i += 1) {
    const check = numbers[i + 1] === numbers[i] + 1;
    if (!check) return false;
  }

  return true;
};

export default isContinuousSequence;
// END


// Решение учителя
// BEGIN
const isContinuousSequence = (coll) => {
  const size = coll.length;
  if (size <= 1) {
    return false;
  }

  const start = coll[0];
  for (let index = 0; index < size; index += 1) {
    if (start + index !== coll[index]) {
      return false;
    }
  }

  return true;
};

export default isContinuousSequence;
// END
