/* Реализуйте и экспортируйте по умолчанию функцию checkIfBalanced, которая проверяет балансировку круглых скобок в арифметических выражениях.
checkIfBalanced('(5 + 6) * (7 + 8)/(4 + 3)'); // true
checkIfBalanced('(4 + 3))'); // false */

// Решение econavi
// BEGIN (write your solution here)
export default (str) => {
  const arr = str.split('');
  const stack = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === '(') {
      stack.push(arr[i]);
    }
    if (arr[i] === ')' && stack.pop() !== '(') {
      return false;
    }
  }

  return stack.length === 0;
};
// END

// Решение учителя (есть отличия)
// BEGIN
const checkIfBalanced = (expression) => {
  const stack = [];
  const symbols = expression.split('');

  for (let i = 0; i < symbols.length; i += 1) {
    const current = symbols[i];
    if (current === '(') {
      stack.push(current);
    } else if (current === ')') {
      // вызов метода pop на пустом массиве возвращает undefined
      if (!stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

export default checkIfBalanced;
// END
