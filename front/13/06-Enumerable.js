// Enumerable.js
// Реализуйте ленивую версию Enumerable. Интерфейс включает в себя
// следующие методы: select, where, orderBy, toArray.

// Подсказки
// Так как коллекция ленивая, не нужно выполнять вычислений до вызова toArray,
// вместо этого необходимо формировать коллекцию из отложенных вычислений.

class Enumerable {
  // BEGIN (write your solution here)
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  select(fn) {
    const newOps = this.operations.slice();
    newOps.push(coll => coll.map(fn));
    return new Enumerable(this.collection.slice(), newOps);
  }

  where(fn) {
    const newOps = this.operations.slice();
    newOps.push(coll => coll.filter(fn));
    return new Enumerable(this.collection.slice(), newOps);
  }

  orderBy(fn, direction = 'asc') {
    const newOps = this.operations.slice();
    if (direction === 'asc') {
      newOps.push(coll => coll.slice().sort((a, b) => {
        if (fn(a) > fn(b)) return 1;
        if (fn(a) < fn(b)) return -1;
        return 0;
      }));
    } else {
      newOps.push(coll => coll.slice().sort((a, b) => {
        if (fn(a) > fn(b)) return -1;
        if (fn(a) < fn(b)) return 1;
        return 0;
      }));
    }
    return new Enumerable(this.collection.slice(), newOps);
  }

  toArray() {
    return this.operations.reduce((coll, fn) => fn(coll),
      this.collection.slice());
  }
  // END
}

export default Enumerable;


// Решение учителя
// class Enumerable {
//   // BEGIN
//   constructor(collection, operations) {
//     this.collection = collection;
//     this.operations = operations || [];
//   }
//
//   build(fn) {
//     return new Enumerable(this.collection.slice(), this.operations.concat(fn));
//   }
//
//   select(fn) {
//     return this.build(coll => coll.map(fn));
//   }
//
//   orderBy(fn, direction = 'asc') {
//     const compareResult = direction === 'asc' ? 1 : -1;
//     const comparator = (a, b) => {
//       const a1 = fn(a);
//       const b1 = fn(b);
//
//
//       if (a1 > b1) {
//         return compareResult;
//       } else if (a1 < b1) {
//         return -compareResult;
//       }
//
//       return 0;
//     };
//     return this.build(coll => coll.sort(comparator));
//   }
//
//   where(fn) {
//     return this.build(coll => coll.filter(fn));
//   }
//
//   toArray() {
//     return this.operations.reduce((acc, func) => func(acc), this.collection);
//   }
//   // END
// }
//
// export default Enumerable;
