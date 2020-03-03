/* tests/cart.test.js

Напишите тесты для корзины интернет-магазина. Интерфейс:
1. makeCart – создает новую корзину (объект).
2. addItem(good, count) – добавляет в корзину товары и их количество. Товар это объект у которого два свойства: name – имя и price – стоимость.
3. getItems – возвращает товары в формате [{ good, count }, { good, count }, ...]
4. getCost – возвращает стоимость корзины. Стоимость корзины высчитывается как сумма всех добавленных товаров с учетом их количества.
5. getCount – возвращает количество товаров в корзине
const cart = makeCart();
cart.addItem({ name: 'car', price: 3 }, 5);
cart.addItem({ name: 'house', price: 10 }, 2);
cart.getItems().length; // 2
cart.getCost(); // 35
*/

//=================================================

// Мое решение
// @ts-check

const getImpelementation = require('../implementations');

const makeCart = getImpelementation();

// BEGIN (write your solution here)
describe('cart', () => {
  test('cart is empty', () => {
    const cart = makeCart();
    expect(cart.getItems().length).toBe(0);
    expect(cart.getCost()).toBe(0);
    expect(cart.getCount()).toBe(0);
  });

  test('cart with items', () => {
    const cart = makeCart();
    cart.addItem({ name: 'car', price: 3 }, 5);
    cart.addItem({ name: 'house', price: 10 }, 2);
    expect(cart.getItems()).toEqual([
      { count: 5, good: { name: 'car', price: 3 } },
      { count: 2, good: { name: 'house', price: 10 } },
    ]);
    expect(cart.getCost()).toBe(35);
    expect(cart.getCount()).toBe(7);
  });
});
// END

//=================================================

// Решение учителя
// @ts-check

const getImpelementation = require('../implementations');

const makeCart = getImpelementation();

// BEGIN
test('Cart', () => {
  const cart = makeCart();
  expect(cart.getItems()).toHaveLength(0);

  cart.addItem({ name: 'car', price: 3 }, 5);
  expect(cart.getItems()).toHaveLength(1);
  expect(cart.getCost()).toBe(15);
  expect(cart.getCount()).toBe(5);

  cart.addItem({ name: 'house', price: 10 }, 2);
  expect(cart.getItems()).toHaveLength(2);
  expect(cart.getCost()).toBe(35);
  expect(cart.getCount()).toBe(7);
});
// END
