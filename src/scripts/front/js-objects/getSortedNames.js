/* Реализуйте и экспортируйте по умолчанию функцию getSortedNames, которая принимает на вход список пользователей, извлекает их имена, сортирует и возвращает отсортированный список имен.
const users = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
];

getSortedNames(users); // ['Bronn', 'Eiegon', 'Reigar', 'Sansa'] */

// Моё решение
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN (write your solution here)
const getSortedNames = (users) => {
  const result = [];

  for (const { name } of users) {
    result.push(name);
  }

  return result.sort();
};

export default getSortedNames;
// END

// Решение учителя
// Такое же. 