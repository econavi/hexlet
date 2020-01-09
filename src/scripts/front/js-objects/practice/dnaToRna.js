/* dnaToRna.js

ДНК и РНК это последовательности нуклеотидов.
Четыре нуклеотида в ДНК это аденин (A), цитозин (C), гуанин (G) и тимин (T).
Четыре нуклеотида в РНК это аденин (A), цитозин (C), гуанин (G) и урацил (U).
Цепь РНК составляется на основе цепи ДНК последовательной заменой каждого нуклеотида:
* G -> C
* C -> G
* T -> A
* A -> U

Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход цепь ДНК и возвращает соответствующую цепь РНК (совершает транскрипцию РНК).
Если во входном параметре нет ни одного нуклеотида (т.е. передана пустая строка), то функция должна вернуть пустую строку. Если в переданной цепи ДНК встретится "незнакомый" нуклеотид (не являющийся одним из четырех перечисленных выше), то функция должна вернуть null.

dnaToRna('ACGTGGTCTTAA'); // 'UGCACCAGAAUU'
dnaToRna('CCGTA'); // 'GGCAU'
dnaToRna(''); // ''
dnaToRna('ACNTG'); // null */


// Решение econavi
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN (write your solution here)
const map = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

const dnaToRna = (data) => {
  if (!data) return '';

  const dna = data.split('');
  const rna = [];

  for (const element of dna) {
    if (!map[element]) return null;
    rna.push(map[element]);
  }

  return rna.join('');
};

export default dnaToRna;
// END


// Решение учителя
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN
const map = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

export default (dna) => {
  const rna = [];

  for (const key of dna) {
    const nucleotide = map[key];
    if (!nucleotide) {
      return null;
    }

    rna.push(nucleotide);
  }

  return rna.join('');
};
// END
