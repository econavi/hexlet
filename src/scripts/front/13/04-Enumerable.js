// Enumerable.js

// Select
// Реализуйте метод select, который отображает (принцип работы как у функции map) коллекцию, другими словами, извлекает из элементов коллекции нужные данные и возвращает объект с новой (отображенной) коллекцией из этих данных.

// const cars = [
//   { brand: 'bmw', model: 'm5', year: 2014 },
//   { brand: 'bmw', model: 'm4', year: 2013 },
//   { brand: 'kia', model: 'sorento', year: 2014 },
//   { brand: 'kia', model: 'rio', year: 2010 },
//   { brand: 'kia', model: 'sportage', year: 2012 },
// ];
// coll = new Enumerable(cars);
// // [car] => [model]
// const result = coll.select(car => car.model);
// assert.deepEqual(result.toArray(), ['m5', 'm4', 'sorento', 'rio', 'sportage']);

// OrderBy
// Реализуйте метод orderBy, который сортирует коллекцию на основе переданных данных.

// Принимаемые параметры:
// Функция, возвращающая значение, по которому будет происходить сортировка.
// Направление сортировки: asc - по возрастанию, desc - по убыванию (по умолчанию - asc).
// const cars = [
//   { brand: 'bmw', model: 'm5', year: 2014 },
//   { brand: 'bmw', model: 'm4', year: 2013 },
//   { brand: 'kia', model: 'sorento', year: 2014 },
//   { brand: 'kia', model: 'rio', year: 2010 },
//   { brand: 'kia', model: 'sportage', year: 2012 },
// ];
// coll = new Enumerable(cars);
// const result = coll.orderBy(car => car.year, 'desc')
//   .where(car => car.brand === 'bmw')
//   .select(car => car.model);
// assert.deepEqual(result.toArray(), ['m5', 'm4']);

// Подсказки:
// Для выполнения сортировки воспользуйтесь встроенной функцией: sort. https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  // BEGIN (write your solution here)
  select(fn) {
    this.collection = this.collection.map(fn);
    return this;
  }
  // END

  // BEGIN (write your solution here)
  orderBy(fn, direction = 'asc') {
    const coll = this.collection;

    if (direction === 'asc') {
      coll.sort((a, b) => {
        if (fn(a) > fn(b)) return 1;
        if (fn(a) < fn(b)) return -1;
        return 0;
      })
    } else {
      coll.sort((a, b) => {
        if (fn(a) < fn(b)) return 1;
        if (fn(a) > fn(b)) return -1;
        return 0;
      })
    }

    return this;
  }
  // END

  where(fn) {
    this.collection = this.collection.filter(fn);
    return this;
  }

  toArray() {
    return this.collection.slice();
  }
}

export default Enumerable;

// // Решение учителя
// class Enumerable {
//   constructor(collection) {
//     this.collection = collection;
//   }
//
//   // BEGIN
//   select(fn) {
//     this.collection = this.collection.map(fn);
//     return this;
//   }
//   // END
//
//   // BEGIN
//   orderBy(fn, direction = 'asc') {
//     const compareResult = direction === 'asc' ? 1 : -1;
//     const comparator = (a, b) => {
//       const a1 = fn(a);
//       const b1 = fn(b);
//
//       if (a1 > b1) {
//         return compareResult;
//       }
//       if (a1 < b1) {
//         return -compareResult;
//       }
//
//       return 0;
//     };
//     this.collection.sort(comparator);
//     return this;
//   }
//   // END
//
//   where(fn) {
//     this.collection = this.collection.filter(fn);
//     return this;
//   }
//
//   toArray() {
//     return this.collection.slice();
//   }
// }
//
// export default Enumerable;
