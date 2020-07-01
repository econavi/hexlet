/* Реализуйте функцию pick, которая извлекает из переданного объекта все элементы по указанным ключам и возвращает новый объект. Аргументы:
* Исходный объект
* Массив ключей, по которым должны быть выбраны элементы (ключ и значение) из исходного объекта, и на основе выбранных данных сформирован новый объект
Экспортируйте функцию по умолчанию.

Примеры:

const data = {
  user: 'ubuntu',
  cores: 4,
  os: 'linux',
};

pick(data, ['user']);       // { user: 'ubuntu' }
pick(data, ['user', 'os']); // { user: 'ubuntu', os: 'linux' }
pick(data, []);             // {}
pick(data, ['none']);       // {} */

// Моё решение
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN (write your solution here)
const pick = (obj, keys) => {
  const result = {};

  for (const key of keys) {
    const checkProp = Object.prototype.hasOwnProperty.call(obj, key);
    if (checkProp) {
      result[key] = obj[key];
    }
  }

  return result;
};

export default pick;
// END

// Решение учителя
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN
export default (data, keys) => {
  const result = {};
  const dataKeys = Object.entries(data);

  for (const [key, value] of dataKeys) {
    if (keys.includes(key)) {
      result[key] = value;
    }
  }

  return result;
};
// END
