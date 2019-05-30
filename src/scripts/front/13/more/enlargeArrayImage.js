// enlargeArrayImage.js
// Реализуйте и экспортируйте по умолчанию функцию enlargeArrayImage, которая принимает изображение в виде двумерного массива и увеличивает его в два раза.
//
// Примеры
// const arr = [
//   ['*', '*', '*', '*'],
//   ['*', ' ', ' ', '*'],
//   ['*', ' ', ' ', '*'],
//   ['*', '*', '*', '*'],
// ];
// // ****
// // *  *
// // *  *
// // ****
//
// enlargeArrayImage(arr);
// // ********
// // ********
// // **    **
// // **    **
// // **    **
// // **    **
// // ********
// // ********

// BEGIN (write your solution here)
export default (data) => {

  // Велосипед
  // if (!data.length) return [];
  // const iter = (arrays, acc) => {
  //   if (!arrays.length) return acc;
  //   const newAcc = arrays[0].reduce((acc, elem) => {
  //     return [ ...acc, elem, elem ]
  //   }, []);
  //   return iter(arrays.slice(1), [ ...acc, newAcc, newAcc ]);
  // };
  // return iter(data, [])

  // Решение
  return data.reduce((acc, list) => {
    const doubleList = list.reduce((newList, item) => [...newList, item, item], []);
    return [...acc, doubleList, doubleList];
  }, []);

};
// END

// Решение учителя
// import _ from 'lodash';
//
// // BEGIN
// const duplicateEachItemInArray = arr => _.flatten(arr.map(item => [item, item]));
//
// const enlargeArrayImage = (arr) => {
//   const horizontallyStretched = arr.map(duplicateEachItemInArray);
//   return duplicateEachItemInArray(horizontallyStretched);
// };
//
// export default enlargeArrayImage;
// // END
