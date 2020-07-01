// Реализуйте класс SimpleCard по аналогии с PercentCard.
// BEGIN (write your solution here)
export default class SimpleCard {
  constructor(name, damagePoints) {
    this.name = name;
    this.damage = () => damagePoints;
  }

  damage() {
    return this.damage;
  }
}
// END

// Решение учителя
// // BEGIN
// export default class SimpleCard {
//   constructor(name, damagePoints) {
//     this.name = name;
//     this.damagePoints = damagePoints;
//   }
//
//   damage() {
//     return this.damagePoints;
//   }
// }
// // END
