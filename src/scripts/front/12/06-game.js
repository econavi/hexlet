// game.js
// Допишите логику работы функции run.

// для отладочной печати добавьте в инструкцию импорта toString as pairToString
import { cons, car, toString as pairToString } from 'hexlet-pairs';
// для отладочной печати добавьте в инструкцию импорта toString as ListToString
import {
  cons as consList, l, random, head, reverse, toString as ListToString,
} from 'hexlet-pairs-data';

const run = (player1, player2, cards, customRandom) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    if (health1 <= 0) {
      return consList(cons(car(head(log)), `${name1} был убит`), log);
    }
    const card = customRandom(cards);

    // BEGIN (write your solution here)
    let cardName = card('getName');
    let damage = card('damage', health2);
    // END

    const newHealth = health2 - damage;

    const message = `Игрок '${name1}' применил '${cardName}' против '${name2}' и нанес урон '${damage}'`;
    let stats;
    if (order === 1) {
      stats = cons(cons(health1, newHealth), message);
    } else if (order === 2) {
      stats = cons(cons(newHealth, health1), message);
    }
    const newLog = consList(stats, log);
    return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
  };

  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default (cards, customRandom = random) => (name1, name2) => (
  run(name1, name2, cards, customRandom)
);

// Решение учителя — совпадает
