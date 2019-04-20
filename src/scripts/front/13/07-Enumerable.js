// Enumerable.js
// Реализуйте метод toArray, возвращающий массив обработанных элементов коллекции. Мемоизируйте этот массив во внутреннем свойстве memo.
//
// const coll = new Enumerable([1, 2, 3, 4, 5, 6]);
// coll.where(n => n > 3);
// // В этот момент запускаются отложенные операции и результат возвращается.
// coll.toArray(); // [4, 5, 6]
//
// // Повторный запуск извлекает массив из `memo`. Вычисления больше не производятся.
// coll.toArray(); // [4, 5, 6]
// Реализуйте свойство length, которое возвращает количество элементов в коллекции. Так как для вычисления её длины, нужно получить результирующий массив (применив все отложенные операции), логично реализовать это свойство как getter, который вызывает внутри себя toArray.
//
// const coll = new Enumerable([1, 2, 3, 4, 5, 6]);
// coll.where(n => n > 3);
// // В этот момент запускаются отложенные операции и результат возвращается.
// coll.length; // 3
//
// // Так как toArray мемоизирован, то повторный вызов не приводит к вычислениям, массив берется из memo
// coll.length; // 3

class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  build(fn) {
    return new Enumerable(this.collection.slice(), this.operations.concat(fn));
  }

  select(fn) {
    return this.build(coll => coll.map(fn));
  }

  orderBy(fn, direction = 'asc') {
    const comparator = (a, b) => {
      const a1 = fn(a);
      const b1 = fn(b);

      const compareResult = direction === 'asc' ? 1 : -1;

      if (a1 > b1) {
        return compareResult;
      }

      if (a1 < b1) {
        return -compareResult;
      }

      return 0;
    };
    return this.build(coll => coll.sort(comparator));
  }

  where(fn) {
    return this.build(coll => coll.filter(fn));
  }

  // BEGIN (write your solution here)
  get length() {
    return this.toArray().length;
  }

  toArray() {
    if (!this.memo) {
      this.memo = this.operations.reduce((coll, fn) => fn(coll),
        this.collection.slice());
    }
    return this.memo.slice();
  }
  // END
}

export default Enumerable;

// Решение учителя
// // BEGIN
//   getProcessedCollection() {
//     if (!this.memo) {
//       this.memo = this.operations.reduce((acc, func) => func(acc), this.collection);
//     }
//
//     return this.memo;
//   }
//
//   get length() {
//     return this.getProcessedCollection().length;
//   }
//
//   toArray() {
//     return this.getProcessedCollection().slice();
//   }
//   // END
