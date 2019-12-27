/* Реализуйте и экспортируйте по умолчанию функцию lengthOfLastWord, которая возвращает длину последнего слова переданной на вход строки. Словом считается любая последовательность, не содержащая пробелов.
lengthOfLastWord(''); // 0

lengthOfLastWord('man in BlacK'); // 5

lengthOfLastWord('hello, world!  '); // 6 */


// Решение econavi
// BEGIN (write your solution here)
const lengthOfLastWord = (sentence) => {
  if (!sentence) return 0;
  const wordsArr = sentence.trim().split(' ');
  const lastWord = wordsArr[wordsArr.length - 1];
  return lastWord.length;
};

export default lengthOfLastWord;
// END

// Решение учителя
// BEGIN
export default (str) => {
  const words = str.trim().split(' ');
  const lastWord = words[words.length - 1];
  return lastWord.length;
};
// END
