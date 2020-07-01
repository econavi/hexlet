// wordsCount.js

// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход два параметра: список слов и список стоп-слов. Задача функции вернуть объект типа Map, содержащий в себе частоту переданных слов. То есть, ключами являются сами слова, а значениями число повторений.

// Слова могут быть в разных регистрах, а подсчет должен работать без учета регистра. Соответственно в результирующем наборе слова должны быть представлены в нижнем регистре.

// Порядок слов в выходе должен совпадать с порядком появления новых слов во входном наборе.

// stopWords – это список стоп-слов, которые не должны попадать в результирующую структуру. Стоп-слова указываются в нижнем регистре.
// const stopWords = ['and', 'or', 'a', 'the', ''];
// const words = ['HellO', 'h', 'And', 'heLlo', '', 'AND', 'DOG', 'oR', 'cat', 'HELLO', 'caT'];
// wordsCount(words, stopWords); // [['hello', 3], ['h', 1], ['dog', 1], ['cat', 2]]

// Подсказки:
// Воспользуйтесь тройкой map/filter/reduce.
// Функция has типа Map проверяет наличие ключа в мапе
// Проверка должна быть регистро-независимой

// BEGIN (write your solution here)
const wordsCount = (words, stopWords) => {
  // Если передали пустой массив, вернем пустой Map
  if (!words.length) return new Map();

  // Преобразовываем каждый элемент в нижний регистр
  const lowerCaseArr = words.map(elem => elem.toLowerCase());

  // Отфильтруем массив по стоп словам filter()
  const filteredArr = lowerCaseArr.filter(elem => !(stopWords.includes(elem)));

  // Создаем Map и вернем результат
  const result = new Map();
  filteredArr.forEach((elem) => {
    result.set(elem, filteredArr.reduce((acc, i) => {
      return i === elem ? acc += 1 : acc;
    }, 0));
  });

  return result;
};

export default wordsCount;
// END

// Решение учителя
// // BEGIN
// export default (words, stopWords) => words
//   .map(word => word.toLowerCase())
//   .filter(word => !stopWords.includes(word))
//   .reduce((acc, word) => {
//     if (!acc.has(word)) {
//       return acc.set(word, 1);
//     }
//     return acc.set(word, acc.get(word) + 1);
//   }, new Map());
// // END
