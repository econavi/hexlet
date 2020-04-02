users.js / 01

Реализуйте и экспортируйте функцию getMutualFriends, которая принимает на вход двух пользователей и возвращает массив состоящий из общих друзей.  

Интерфейс абстракции User:

* `user.id` – возвращает идентификатор пользователя, по которому можно его отличить от остальных.
* `user.getFriends()` – возвращает список друзей.

```
// Подробнее смотрите в тестах
const mutualFriends = getMutualFriends(user1, user2);
```

### Мое решение
```
const getMutualFriends = (user1, user2) => {
  const friendsOfUser1 = user1.getFriends();
  const friendsOfUser2 = user2.getFriends();

  const mutualFriends = friendsOfUser1
    .filter((friend1) => friendsOfUser2
      .some((friend2) => friend2.id === friend1.id));

  return mutualFriends;
};

export { getMutualFriends };
```