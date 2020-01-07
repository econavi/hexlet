/* Обратите внимание на сходство json и объекта. Оно не случайно. Json является представлением ассоциативного массива в текстовом виде.
objects.js

Реализуйте и экспортируйте по умолчанию функцию getJsonFileData, которая возвращет ассоциативный массив, соответствующий json из файла example.json в этом упражнении. Всё, что вам нужно сделать — посмотреть на содержимое example.json и руками сформировать объект аналогичной структуры. */

// Моё решение
// BEGIN (write your solution here)
const getJsonFileData = () => (
  {
    common: {
      files: [
        'src/objects.js',
      ],
    },
    config: {
      outdir: '/dist',
    },
  }
);

export default getJsonFileData;
// END

// Решение учителя
// BEGIN
export default () => ({
  common: {
    files: ['src/objects.js'],
  },
  config: {
    outdir: '/dist',
  },
});
// END