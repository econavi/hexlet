/* users.js

Реализуйте и экспортируйте по умолчанию функцию getGirlFriends, которая принимает на вход список пользователей и возвращает плоский список подруг всех пользователей (без сохранения ключей). Друзья каждого пользователя хранятся в виде массива в ключе friends. Пол доступен по ключу gender и может принимать значения male или female.
Пример использования

const users = [
  {
    name: 'Tirion',
    friends: [
      { name: 'Mira', gender: 'female' },
      { name: 'Ramsey', gender: 'male' },
    ],
  },
  { name: 'Bronn', friends: [] },
  {
    name: 'Sam',
    friends: [
      { name: 'Aria', gender: 'female' },
      { name: 'Keit', gender: 'female' },
    ],
  },
  {
    name: 'Rob',
    friends: [
      { name: 'Taywin', gender: 'male' },
    ],
  },
];

getGirlFriends(users);
// [
//   { name: 'Mira', gender: 'female' },
//   { name: 'Aria', gender: 'female' },
//   { name: 'Keit', gender: 'female' },
// ];
Другие примеры смотрите в модуле с тестами.
Подсказки

* flatten (lodash) */

// Моё решение
// Я совсем забыл про map()
import { flatten } from 'lodash';

// BEGIN (write your solution here)
const getGirlFriends = (users) => {
  const femaleFrends = [];

  for (const user of users) {
    const females = user.friends.filter((friend) => friend.gender === 'female');
    femaleFrends.push(females);
  }

  return flatten(femaleFrends);
};

export default getGirlFriends;
// END


// Решение учителя
import { flatten } from 'lodash';

// BEGIN
export default (users) => {
  const friendsOfUsers = users.map(({ friends }) => friends);
  const flattened = flatten(friendsOfUsers);
  return flattened.filter(({ gender }) => gender === 'female');
};
// END
