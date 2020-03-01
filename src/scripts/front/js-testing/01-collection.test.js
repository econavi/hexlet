/* tests/collection.test.js

Напишите тесты для функции get(obj, key, defaultValue). Эта функция извлекает значение из объекта при условии, что ключ существует. В ином случае возвращается defaultValue.
get({ key: 'value' }, 'key'); // 'value'
get({}, 'key', 'defaultValue'); // 'defaultValue'
Тесты должны быть построены по такому же принципу, как это описывалось в теории урока: проверка через if и исключение в случае провала теста.
Для хорошего тестирования этой функции, понадобится как минимум три теста:
1. Проверка что функция возвращает нужное значение по существующему ключу (прямой тест на работоспособность)
2. Проверка на то что возвращается значение по умолчанию если ключа нет
3. Проверка на то что возвращается значение по существующему ключу, даже если передано значение по умолчанию (пограничный случай)
Подсказки
* _.get 
*/

// ================================================================

// Мое решение

// @ts-check

const getFunction = require('../functions');

const get = getFunction();

// BEGIN (write your solution here)
if (get({ key: 'value' }, 'key') !== 'value') {
  throw new Error('Функция работает неверно!');
}

if (get({}, 'key', 'defaultValue') !== 'defaultValue') {
  throw new Error('Функция работает неверно!');
}

if (get({ key: 'value' }, 'key', 'defaultValue') !== 'value') {
  throw new Error('Функция работает неверно!');
}
// END

// ================================================================

// Решение учителя

// @ts-check

const getFunction = require('../functions');

const get = getFunction();

// BEGIN
if (get({ key: 'value' }, 'key') !== 'value') {
  throw new Error('boom!');
}
if (get({}, 'key', 'value') !== 'value') {
  throw new Error('boom!');
}
if (get({ key: 'value' }, 'key', 'default value') !== 'value') {
  throw new Error('boom!');
}
// END

