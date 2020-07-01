/* users.js

Реализуйте функцию getChildren, которая принимает на вход список пользователей и возвращает плоский список их детей. Дети каждого пользователя хранятся в виде массива в ключе children.
Пример использования

const users = [
  {
    name: 'Tirion',
    children: [
      { name: 'Mira', birdhday: '1983-03-23' },
    ],
  },
  { name: 'Bronn', children: [] },
  {
    name: 'Sam',
    children: [
      { name: 'Aria', birdhday: '2012-11-03' },
      { name: 'Keit', birdhday: '1933-05-14' },
    ],
  },
  {
    name: 'Rob',
    children: [
      { name: 'Tisha', birdhday: '2012-11-03' },
    ],
  },
];

getChildren(users);
// [
//   { name: 'Mira', birdhday: '1983-03-23' },
//   { name: 'Aria', birdhday: '2012-11-03' },
//   { name: 'Keit', birdhday: '1933-05-14' },
//   { name: 'Tisha', birdhday: '2012-11-03' },
// ];
Другие примеры смотрите в модуле с тестами.
Подсказки

* flatten (lodash) */

// Моё решение (v1)
import { flatten } from 'lodash';

// BEGIN (write your solution here)
const getChildren = (users) => {
  const children = users.map((user) => user.children);

  let result = [];

  for (const child of children) {
    result = [...result, ...child];
  }

  return result;
};

export default getChildren;
// END

// Моё решение (v2)
import { flatten } from 'lodash';

// BEGIN (write your solution here)
const getChildren = (users) => {
  const children = users.map((user) => user.children);
  return flatten(children);
};

export default getChildren;
// END

// Решение учителя
import { flatten } from 'lodash';

// BEGIN
const getChildren = (users) => {
  const childrenOfUsers = users.map(({ children }) => children);
  return flatten(childrenOfUsers);
};

export default getChildren;
// END
