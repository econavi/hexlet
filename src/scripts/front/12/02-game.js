// game.js
// Допишите функцию iter, которая является частью ядра игрового движка и описывает в себе логику одного хода

// Алгоритм
// Если здоровье игрока (которого атаковали на предыдущем шаге) меньше или равно 0, то добавляем в лог элемент с сообщением вида ${name1} был убит и возвращаем лог. Игра закончена.

// В ином случае, берем рандомную карту, вычисляем урон, записываем новое здоровье, формируем сообщение формата: const message = Игрок '${name1}' применил '${cardName}' против '${name2}' и нанес урон '${damage}'; Формируем элемент лога формата cons(cons(health1, health2), message) и добавляем его в лог.

// Повторяем.

// Подсказки
// Параметр order в функции iter нужен для определения того, какой игрок сейчас атакует.
// Используйте функцию random для выбора карты из колоды.
// Колода кард передается в игру через параметр cards.

import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { cons as consList, l, random, head, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

const run = (player1, player2, cards) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    // BEGIN (write your solution here)
    const attackerName = order === 1 ? name1 : name2;
    const attackerHealth = order === 1 ? health1 : health2;
    const secondPlayerName = order === 1 ? name2 : name1;
    let secondPlayerHealth = order === 1 ? health2 : health1;
    const nextAttackerID = order === 1 ? 2 : 1;

    // Если здоровье игрока (которого атаковали на предыдущем шаге) меньше или равно 0,
    // то добавляем в лог элемент с сообщением вида ${name1} был убит и возвращаем лог. Игра закончена.
    if (attackerHealth <= 0) {
      const res = cons(cons(cons(secondPlayerHealth, attackerHealth),
        `${secondPlayerName} был убит`), log);
      return res;
    }

    // В ином случае, берем рандомную карту, вычисляем урон, записываем новое здоровье
    const newCard = random(cards);
    const damage = cdr(newCard)();
    secondPlayerHealth -= damage;

    // формируем сообщение формата:
    // const message = Игрок '${name1}' применил '${cardName}' против '${name2}' и нанес урон '${damage}';
    const cardName = car(newCard);
    const message = `Игрок ${attackerName} применил ${cardName}
      против ${secondPlayerName} и нанес урон ${damage}`;

    // Формируем элемент лога формата cons(cons(health1, health2), message) и добавляем его в лог.
    const elem = cons(cons(attackerHealth, secondPlayerHealth), message);
    const newLog = cons(elem, log);

    // Повторяем.
    return iter(attackerHealth, attackerName, secondPlayerHealth,
      secondPlayerName, nextAttackerID, newLog);

    // END
  };

  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');

  return reverse(iter(startHealth, player1,
    startHealth, player2, 1, l(logItem)));
};

export default cards => (name1, name2) => run(name1, name2, cards);

// Решение учителя
// // BEGIN
// if (health1 <= 0) {
//   return consList(cons(car(head(log)), `${name1} был убит`), log);
// }
// const card = random(cards);
// const cardName = car(card);
// const damage = cdr(card)();
// const newHealth = health2 - damage;
//
// const message = `Игрок '${name1}' применил '${cardName}'
//   против '${name2}' и нанес урон '${damage}'`;
// let stats;
// // В логе игроки всегда должны быть на своих местах. Первый игрок слева, второй - справа
// if (order === 1) {
//   stats = cons(cons(health1, newHealth), message);
// } else if (order === 2) {
//   stats = cons(cons(newHealth, health1), message);
// }
// const newLog = consList(stats, log);
// // Хитрость решения учителя состоит в том, что данные игроков всегда меняются местами. Это видно
// // по вызову ниже. Параметры первого игрока становятся параметрами второго и наоборот.
// // Такой подход позволяет упростить логику и всегда считать что атакует игрок номер 1.
// return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
// // END
