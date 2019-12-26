/* Реализуйте функцию buildDefinitionList, которая генерирует html список определений (теги dl, dt и dd) и возвращает получившуюся строку. При отсутствии элементов в массиве функция возвращает пустую строку. Экспортируйте функцию по умолчанию.
Параметры функции

* Список определений следующего формата:
definitions = [
  ['definition1', 'description1'],
  ['definition2', 'description2']
];
То есть каждый элемент входного списка сам является массивом, содержащим два элемента: термин и его определение.
Пример использования

definitions = [
  ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
  ['Бобр', 'Животное из отряда грызунов'],
];

buildDefinitionList(definitions);
// '<dl><dt>Блямба</dt><dd>Выпуклость, утолщение на поверхности чего-либо</dd><dt>Бобр</dt><dd>Животное из отряда грызунов</dd></dl>'; */

// Решение econavi
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN (write your solution here)
const buildDefinitionList = (coll) => {
  if (!coll.length) return '';

  const accumArray = [];
  for (const item of coll) {
    accumArray.push(`<dt>${item[0]}</dt><dd>${item[1]}</dd>`);
  }

  const innerStr = accumArray.join('');

  return `<dl>${innerStr}</dl>`;
};

export default buildDefinitionList;
// END


// Решение учителя
// BEGIN
const buildDefinitionList = (definitions) => {
  if (definitions.length === 0) {
    return '';
  }

  const parts = [];

  for (let i = 0; i < definitions.length; i += 1) {
    const name = definitions[i][0];
    const description = definitions[i][1];
    parts[i] = `<dt>${name}</dt><dd>${description}</dd>`;
  }

  const innerValue = parts.join('');
  const result = `<dl>${innerValue}</dl>`;

  return result;
};

export default buildDefinitionList;
// END
