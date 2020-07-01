/* users.js

Реализуйте функцию getMenCountByYear, которая принимает на вход список пользователей и возвращает объект, в котором ключ это год рождения, а значение это количество мужчин, родившихся в этот год.
Пример использования

const users = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
  { name: 'Jon', gender: 'male', birthday: '1980-11-03' },
  { name: 'Robb', gender: 'male', birthday: '1980-05-14' },
  { name: 'Tisha', gender: 'female', birthday: '2012-11-03' },
  { name: 'Rick', gender: 'male', birthday: '2012-11-03' },
  { name: 'Joffrey', gender: 'male', birthday: '1999-11-03' },
  { name: 'Edd', gender: 'male', birthday: '1973-11-03' },
];

getMenCountByYear(users);
// {
//   1973: 3,
//   1963: 1,
//   1980: 2,
//   2012: 1,
//   1999: 1,
// };
Другие примеры смотрите в модуле с тестами.
Подсказки

* Для извлечения года из даты используйте метод getFullYear.
const date = new Date('1980-11-03');
const year = date.getFullYear(); // 1980 */

// Моё решение
import _ from 'lodash';

// BEGIN (write your solution here)
const getMenCountByYear = (users) => {
  const result = users.reduce((acc, user) => {
    const { gender, birthday } = user;
    const date = new Date(birthday);
    const year = date.getFullYear();

    if (gender === 'male') {
      if (_.has(acc, year)) {
        acc[year] += 1;
      } else {
        acc[year] = 1;
      }
    }

    return acc;
  }, {});

  return result;
};

export default getMenCountByYear;
// END

// Решение учителя
import _ from 'lodash';

// BEGIN
const getMenCountByYear = (users) => {
  const men = users.filter(({ gender }) => gender === 'male');

  const years = men.map(({ birthday }) => {
    const date = new Date(birthday);
    return date.getFullYear();
  });

  return years.reduce((acc, year) => {
    const count = _.get(acc, year, 0) + 1;
    return { ...acc, [year]: count };
  }, {});
};

export default getMenCountByYear;
// END


















