// normalizeData.js
// Реализуйте и экспортируйте по умолчанию функцию, которая переводит входные данные в удобный для построения графика формат.
//
// На вход эта функция принимает массив данных. Каждая запись массива представляет из себя объект типа { value: 14, date: '02.08.2018' }. Например:
//
// const data = [
//   { value: 14, date: '02.08.2018' },
//   { value: 43, date: '03.08.2018' },
//   { value: 38, date: '05.08.2018' },
// ];
// Вторым и третьим параметрами функция принимает даты (в форме строк типа 'YYYY-MM-DD') начала и конца периода:
//
// const begin = '2018-08-01';
// const end = '2018-08-06';
// Диапазон дат задаёт размер выходного массива, который должна сгенерить реализуемая функция. Правила формирования итогового массива:
//
// он заполняется записями по всем дням из диапазона begin - end
// в него включаются только те записи из входного массива, даты которых попадают в диапазон
// если во входном массиве нет данных для какого-то дня из диапазона, то в свойство value записи этого дня установить значение 0
// const result = normalizeData(data, beginDate, endDate);
//
// console.log(result);
// // OUTPUT
// [ { value: 0, date: '01.08.2018' },
//   { value: 14, date: '02.08.2018' },
//   { value: 43, date: '03.08.2018' },
//   { value: 0, date: '04.08.2018' },
//   { value: 38, date: '05.08.2018' },
//   { value: 0, date: '06.08.2018' } ]
// Подсказки
// Обратите внимание, что в практике импортированы функции для работы c датами, коллекциями и объектами. При необходимости вы можете (это необязательное требование) ими воспользоваться.
// Даты: https://date-fns.org/

import { keyBy, get } from 'lodash';
import { eachDay, format } from 'date-fns';

// BEGIN (write your solution here)
const normalizeData = (data, begin, end) => {
  const rangeDays = eachDay(begin.split('-').join(','), end.split('-').join(','));

  const stackDays = rangeDays.map((el) => {
    const d = el.getDate() < 10 ? `0${el.getDate()}` : el.getDate();
    const m = el.getMonth() + 1 < 10 ? `0${el.getMonth() + 1}` : el.getMonth() + 1;
    const y = el.getFullYear();
    return `${d}.${m}.${y}`
  });

  const newData = {};
  for (let item of data) {
    newData[item.date] = item.value
  }

  const result = stackDays.reduce((acc, el) => {
    const newAcc = {};
    if (newData.hasOwnProperty(el)) {
      newAcc.value = newData[el];
      newAcc.date = el;
    }
    else {
      newAcc.value = 0;
      newAcc.date = el;
    }

    return [...acc, newAcc];
  }, []);

  return result;
};

export default normalizeData;
// END

// Решение учителя
// import { keyBy, get } from 'lodash';
// import { eachDay, format } from 'date-fns';
//
// // BEGIN
// export default (data, begin, end) => {
//   const dates = keyBy(data, 'date');
//   const result = eachDay(begin, end)
//     .map(day => format(day, 'DD.MM.YYYY'))
//     .map(date => get(dates, date, { date, value: 0 }));
//   return result;
// };
// // END
