// findOdd.js
// Дан массив чисел. Каждое число в массиве встречается четное количество раз, кроме одного.
//
// Реализуйте и экспортируйте функцию по умолчанию, которая принимает массив чисел и возвращает число, которое встречается нечетное количество раз.
//
// const numbers = [1, 2, 4, 2, 4, 1, 5, 3, 3];
//
// // 5
// findOdd(numbers);

// BEGIN (write your solution here)
export default (arr) => {
  const copyArr = arr.slice();
  const countNumbers = {};

  for (let i = 0; i < copyArr.length; i += 1) {
    countNumbers[copyArr[i]] = !countNumbers[copyArr[i]] ? 1 : countNumbers[copyArr[i]] + 1;
  }

  const dataArray = Object.entries(countNumbers);
  const result = dataArray.filter(([, value]) => value % 2);
  return +result[0][0];
};
// END

// Решение учителя
// // BEGIN
// /* eslint no-bitwise: ["error", { "allow": ["^"] }] */
// export default arr => arr.reduce((acc, num) => acc ^ num, 0);
// // END
