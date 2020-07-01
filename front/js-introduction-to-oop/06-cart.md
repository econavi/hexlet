Cart.js / 06

Реализуйте класс Cart, представляющего из себя покупательскую корзину. Интерфейс:
1. `addItem(good, count)` – добавляет в корзину товары и их количество. Товар это объект у которого два свойства: `name` – имя и `price` – стоимость.
2. `getItems` – возвращает товары в формате `[{ good, count }, { good, count }, ...]`
3. `getCost` – возвращает стоимость корзины. Стоимость корзины высчитывается как сумма всех добавленных товаров с учетом их количества.
4. `getCount` – возвращает количество товаров в корзине

```
const cart = new Cart();
cart.addItem({ name: 'car', price: 3 }, 5);
cart.addItem({ name: 'house', price: 10 }, 2);
cart.getItems().length; // 2
cart.getCost(); // 35
```

### Мое решение
```
class Cart {
  constructor() {
    this.items = [];
  }

  addItem(good, count) {
    this.items.push({ good, count });
  }

  getItems() {
    return this.items;
  }

  getCost() {
    const items = this.getItems();
    const sum = items
      .reduce((acc, { good, count }) => acc + good.price * count, 0);
    return sum;
  }

  getCount() {
    const items = this.getItems();
    const count = items.reduce((acc, item) => acc + item.count, 0);
    return count;
  }
}

export default Cart;
```