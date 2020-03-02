/* tests/set.test.js

Напишите тесты для функции set(obj, path, value) возвращающей объект, в котором она изменяет (или добавляет) значение по указанному пути. Функция мутирует объект.
const object = { a: [{ b: { c: 3 } }] };

set(object, 'a[0].b.c', 4);
console.log(object.a[0].b.c); // => 4

set(object, ['x', '0', 'y', 'z'], 5);
console.log(object.x[0].y.z); // => 5
Подсказки

* Переиспользуйте объект данных
* _.set
*/

//============================================

// Мое решение
// @ts-check

const { cloneDeep } = require('lodash');
const getFunction = require('../functions');

const set = getFunction();

// BEGIN (write your solution here)
let object = {};

beforeEach(() => {
  object = {
    a: 1,
    b: 'two',
  };
});

test('set', () => {
  expect(set(cloneDeep(object), 'a', 2)).toEqual({ a: 2, b: 'two' });
  expect(set(cloneDeep(object), ['c', 'in'], 3)).toEqual({ a: 1, b: 'two', c: { in: 3 } });
  expect(set({}, 'kay', 'value')).toEqual({ kay: 'value' });
  expect(set({})).toEqual({});
});
// END


//============================================

// Решение учителя
// @ts-check

const { cloneDeep } = require('lodash');
const getFunction = require('../functions');

const set = getFunction();

// BEGIN
let data;
let dataCopy;

beforeEach(() => {
  data = {
    a: [
      {
        b: {
          c: 3,
        },
      },
    ],
  };
  dataCopy = cloneDeep(data);
});

test('plain set', () => {
  set(data, 'a', 'value');
  dataCopy.a = 'value';
  expect(data).toEqual(dataCopy);
});

test('nested set', () => {
  set(data, 'a[0].b.c', true);
  dataCopy.a[0].b.c = true;
  expect(data).toEqual(dataCopy);
});

test('set new property', () => {
  set(data, 'a[0].b.d', false);
  dataCopy.a[0].b.d = false;
  expect(data).toEqual(dataCopy);
});
// END
