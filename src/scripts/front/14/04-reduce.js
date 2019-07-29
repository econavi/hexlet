/*
reduce.js
Реализуйте и экспортируйте по умолчанию функцию-редьюсер обрабатывающую файловые деревья.

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('nginx'),
    mkdir('consul', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hosts'),
]);
reduce((acc, n) => acc + 1, tree, 0); // => 6
*/

// BEGIN (write your solution here)
const reduce = (f, tree, acc) => {
  const newAcc = f(acc, tree);
  if (tree.type === 'file') return newAcc;

  return tree.children.reduce((iAcc, elem) => reduce(f, elem, iAcc), newAcc);
};

export default reduce;
// END

/*
Решение учителя

// BEGIN
const reduce = (f, node, acc) => {
  const newAcc = f(acc, node);

  if (node.type === 'file') {
    return newAcc;
  }
  return node.children.reduce((iAcc, n) => reduce(f, n, iAcc), newAcc);
};

export default reduce;
// END
*/
