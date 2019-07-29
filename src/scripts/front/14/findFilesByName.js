/*
findFilesByName.js

Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход файловое дерево и подстроку, а возвращает список файлов, имена которых содержат эту подстроку.
const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf', { size: 800 }),
    ]),
    mkdir('consul', [
      mkfile('config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);

findFilesByName(tree, 'co');
// => ['/etc/nginx/nginx.conf', '/etc/consul/config.json']
Обратите внимание на то, что возвращается не просто имя файла, а полный путь до файла, начиная от корня.
Подсказки

* Для построения путей используйте функцию path.join.
* Проверку вхождения строк можно делать с помощью функции str.includes(substr).
*/

import path from 'path';

// BEGIN (write your solution here)
const findFilesByName = (root, substr) => {
  const iter = (tree, currentPath, acc) => {
    if (tree.type === 'file') {
      return tree.name.includes(substr)
        ? [...acc, path.join(currentPath, tree.name)]
        : acc;
    }

    const newCurrentPath = path.join(currentPath, tree.name);

    return tree.children
      .reduce((iAcc, elem) => iter(elem, newCurrentPath, iAcc), acc);
  };

  return iter(root, '', []);
};

export default findFilesByName;
// END

/*
Решение учителя

import path from 'path';

// BEGIN
const findFilesByName = (root, substr) => {
  const iter = (n, ancestry, acc) => {
    const newAncestry = path.join(ancestry, n.name);
    if (n.type === 'file') {
      return n.name.includes(substr) ? [...acc, newAncestry] : acc;
    }
    return n.children.reduce((cAcc, nn) => iter(nn, newAncestry, cAcc), acc);
  };

  return iter(root, '', []);
};

export default findFilesByName;
// END
*/
