// Реализуйте интерфейс работы карты с типом SimpleCard по аналогии с типом PercentCard.
// Второй параметр у конструктора - урон.
// simpleCard.make('Жесткий ломатель мироздания', 6);

import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { attach, contents } from './type'; // eslint-disable-line

// BEGIN (write your solution here)
export const make = (name, damage) => attach('SimpleCard', cons(name, damage));

export const getName = self => car(contents(self));

export const damage = self => cdr(contents(self));
// END
