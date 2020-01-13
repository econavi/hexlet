/*prime.js

Реализуйте и экспортируйте по умолчанию функцию sayPrimeOrNot, которая проверяет переданное число на простоту и печатает на экран yes или no.
Примеры использования

sayPrimeOrNot(5); // 'yes'
sayPrimeOrNot(4); // 'no'
Подсказки

Цель этой задачи — научиться отделять чистый код от кода с побочными эффектами.
Для этого выделите процесс определения того, является ли число простым, в отдельную функцию, возвращающую логическое значение. Это функция, с помощью которой мы отделяем чистый код от кода, интерпретирующего логическое значение (как 'yes' или 'no') и делающего побочный эффект (печать на экран).
Пример такого разделения и хороших абстракций — в решении учителя. */

// Моё решение (v1)
// Не оптимизированное: нет смысла проходить все числа, достаточно половину. см. v2

/* eslint-disable no-console */
// BEGIN (write your solution here)
const isNumberPrime = (number) => {
  if (number < 2) return false;

  for (let i = 2; i < number - 1; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
};

const sayPrimeOrNot = (number) => {
  const result = isNumberPrime(number) ? 'yes' : 'no';
  console.log(result);
};

export default sayPrimeOrNot;
// END

// Моё решение (v2)
/* eslint-disable no-console */
// BEGIN (write your solution here)
const isNumberPrime = (number) => {
  if (number < 2) return false;

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
};

const sayPrimeOrNot = (number) => {
  const result = isNumberPrime(number) ? 'yes' : 'no';
  console.log(result);
};

export default sayPrimeOrNot;
// END

// Решение учителя
// Как v2
