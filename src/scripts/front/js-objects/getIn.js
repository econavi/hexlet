/* Обращение к вложенным объектам выглядит просто, только когда мы уверены в наличии всех ключей, попадающихся по пути:
const data = {
  a: {
    b: {
      c: 'wow'
    }
  }
};

data.a.b.c; // wow
Если же наличие данных ключей в объекте не обязательно, тогда код резко усложняется. Каждая попытка обратиться внутрь должна сопровождаться проверкой:
if (data.a) {
    const inner1 = data.a;
    if (inner1.b) {
        const inner2 = inner1.b;
        if (inner2.c) {
            // ...
        }
    }
}

Реализуйте функцию getIn, которая извлекает из объекта (который может быть любой глубины вложенности) значение по указанным ключам. Аргументы:
* Исходный объект
* Массив ключей, по которым ведется поиск значения
В случае, когда добраться до значения невозможно, возвращается null.
Примеры

const data = {
  user: 'ubuntu',
  hosts: {
    0: {
      name: 'web1',
    },
    1: {
      name: 'web2',
      null: 3,
    },
  },
};

getIn(data, ['undefined']);        // null
getIn(data, ['user']);             // 'ubuntu'
getIn(data, ['user', 'ubuntu']);   // null
getIn(data, ['hosts', 1, 'name']); // 'web2'
getIn(data, ['hosts', 0]);         // { name: 'web1' }
getIn(data, ['hosts', 1, null]);   // 3 */
 
// Моё решение
/* eslint no-restricted-syntax: ["off", "ForOfStatement"], no-prototype-builtins: "off" */
// BEGIN (write your solution here)
const getIn = (obj, keys) => {
  let currentObj = obj;
  let result = null;

  for (const key of keys) {
    const checkProp = Object.prototype.hasOwnProperty.call(currentObj, key);
    if (checkProp) {
      result = currentObj[key];
      currentObj = currentObj[key];
    } else {
      return null;
    }
  }

  return result;
};

export default getIn;
// END

// Решение учителя
/* eslint no-restricted-syntax: ["off", "ForOfStatement"], no-prototype-builtins: "off" */
// BEGIN
const getIn = (data, keys) => {
  let current = data;
  for (const key of keys) {
    if (!current.hasOwnProperty(key)) {
      return null;
    }
    current = current[key];
  }

  return current;
};

export default getIn;
// END
