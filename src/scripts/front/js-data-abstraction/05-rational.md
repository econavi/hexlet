rational.js / 05

Реализуйте абстракцию для работы с рациональными числами включающую в себя следующие функции:
* Конструктор makeRational - принимает на вход числитель и знаменатель, возвращает дробь.
* Селектор getNumer - возвращает числитель
* Селектор getDenom - возвращает знаменатель
* Сложение add - складывает переданные дроби
* Вычитание sub - находит разность между двумя дробями
Не забудьте реализовать нормализацию дробей удобным для вас способом.
```
const rat1 = makeRational(3, 9);
getNumer(rat1); // 1
getDenom(rat1); // 3

const rat2 = makeRational(10, 3);

const rat3 = add(rat1, rat2);
ratToString(rat3); // '11/3'

const rat4 = sub(rat1, rat2);
ratToString(rat4); // '-3/1'
```
Подсказки

* [Действия с дробями](https://ru.wikipedia.org/wiki/%D0%94%D1%80%D0%BE%D0%B1%D1%8C_(%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0)#%D0%94%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B8%D1%8F_%D1%81_%D0%B4%D1%80%D0%BE%D0%B1%D1%8F%D0%BC%D0%B8)
* Функция getGcd находит наибольший общий делитель двух чисел (уже импортирована в модуль)
* Функция ratToString возвращает строковое представление числа (используется для отладки)


### Мое решение
```
import getGcd from './utils.js';

// BEGIN (write your solution here)
const makeRational = (numer, denom) => {
  const gcd = getGcd(numer, denom);
  return {
    numer: numer / gcd,
    denom: denom / gcd,
  };
};

const getNumer = (rat) => rat.numer;

const getDenom = (rat) => rat.denom;

const getHok = (a, b) => (a * b) / getGcd(a, b);

const getDataWithCommonDenominator = (rat1, rat2) => {
  const hok = getHok(getDenom(rat1), getDenom(rat2));
  const numer1 = getNumer(rat1);
  const denom1 = getDenom(rat1);

  const numer2 = getNumer(rat2);
  const denom2 = getDenom(rat2);

  const newNumer1 = numer1 * (hok / denom1);
  const newDenom = denom1 * (hok / denom1);

  const newNumer2 = numer2 * (hok / denom2);

  return {
    newNumer1,
    newNumer2,
    newDenom,
  };
};

const add = (rat1, rat2) => {
  const { newNumer1, newNumer2, newDenom } = getDataWithCommonDenominator(rat1, rat2);
  const result = {
    numer: newNumer1 + newNumer2,
    denom: newDenom,
  };
  return makeRational(result.numer, result.denom);
};

const sub = (rat1, rat2) => {
  const { newNumer1, newNumer2, newDenom } = getDataWithCommonDenominator(rat1, rat2);

  const result = {
    numer: newNumer1 - newNumer2,
    denom: newDenom,
  };

  return makeRational(result.numer, result.denom);
};
// END

const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`;

export {
  makeRational,
  getNumer,
  getDenom,
  add,
  sub,
  ratToString,
};
```