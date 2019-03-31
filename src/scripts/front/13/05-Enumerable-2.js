// Enumerable-2.js

// Реализуйте функции select, orderBy используя подход без мутации состояния.

class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  select(fn) {
    // BEGIN (write your solution here)
    const selectedColl = this.collection.map(fn);
    return new Enumerable(selectedColl);
    // END
  }

  orderBy(fn, direction = 'asc') {
    // BEGIN (write your solution here)
    let sortedColl;
    if (direction === 'asc') {
      sortedColl = this.collection.slice().sort((a, b) => {
        if (fn(a) > fn(b)) return 1;
        if (fn(a) < fn(b)) return -1;
        return 0;
      });
    } else {
      sortedColl = this.collection.slice().sort((a, b) => {
        if (fn(a) > fn(b)) return -1;
        if (fn(a) < fn(b)) return 1;
        return 0;
      });
    }

    return new Enumerable(sortedColl);
    // END
  }

  where(fn) {
    const filtered = this.collection.filter(fn);
    return new Enumerable(filtered);
  }

  toArray() {
    return this.collection;
  }
}

export default Enumerable;

// Решение учителя

// // BEGIN
// const mapped = this.collection.map(fn);
// return new Enumerable(mapped);
// // END

// // BEGIN
// const comparator = (a, b) => {
//   const a1 = fn(a);
//   const b1 = fn(b);
//
//   const compareResult = direction === 'asc' ? 1 : -1;
//
//   if (a1 > b1) {
//     return compareResult;
//   } else if (a1 < b1) {
//     return -compareResult;
//   }
//
//   return 0;
// };
// const clone = this.collection.slice();
// clone.sort(comparator);
//
// return new Enumerable(clone);
// // END
