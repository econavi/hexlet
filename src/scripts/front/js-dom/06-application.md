06 / application.js

Игра в 15 или пятнашки — популярная головоломка, придуманная в 1878 году Ноем Чепмэном. Представляет собой набор одинаковых квадратных костяшек с нанесёнными числами, заключённых в квадратную коробку. Длина стороны коробки в четыре раза больше длины стороны костяшек для набора из 15 элементов, соответственно в коробке остаётся незаполненным одно квадратное поле. Цель игры — перемещая костяшки по коробке, добиться упорядочивания их по номерам, желательно сделав как можно меньше перемещений.
```
| 9  | 2  | 12 | 7  |
|----|----|----|----|
| 6  | 15 | 10 | 1  |
|----|----|----|----|
| 13 | 14 | 5  | 3  |
|----|----|----|----|
| 11 | 8  | 4  |    |
```

Реализуйте эту игру внутри функции экспортируемой по-умолчанию, учитывая следующие моменты:
* Перемещение происходит по клику. Если номер, на котором был клик, находится рядом с пустой областью, то он перемещается на эту область. Если пустой области рядом нет, то ничего не происходит.
* При перемещении числа, из текущей ячейки удаляется класс `table-active` и добавляется на ту, откуда происходит перемещение (та что становится пустой).
* В файле уже заданы `values`, в том порядке в котором они должны появляться в выводе. Для упрощения тестирования, этот порядок всегда один и тот же.
* В файле `index.html` находится `div` с классом `gem-puzzle`, именно к нему нужно привязывать игру.

`html` первой позиции должен получиться таким:
```
<div class="gem-puzzle">
  <table class="table-bordered">
    <tbody>
      <tr>
        <td class="p-3">9</td>
        <td class="p-3">2</td>
        <td class="p-3">12</td>
        <td class="p-3">7</td>
      </tr>
      <tr>
        <td class="p-3">6</td>
        <td class="p-3">15</td>
        <td class="p-3">10</td>
        <td class="p-3">1</td>
      </tr>
      <tr>
        <td class="p-3">13</td>
        <td class="p-3">14</td>
        <td class="p-3">5</td>
        <td class="p-3">3</td>
      </tr>
      <tr>
        <td class="p-3">11</td>
        <td class="p-3">8</td>
        <td class="p-3">4</td>
        <td class="p-3 table-active"></td>
      </tr>
    </tbody>
  </table>
</div>
```
Теги и классы должны совпадать.

Подсказки

* Используйте дополнительную навигацию доступную в таблицах: `rows`, `cells`.
* Достаточно повесить событие на всю таблицу и использовать возможности всплытия
* У `cell` есть свойство `cellIndex` у `row` есть свойство `rowIndex`
* [Вычисление расстояний между соседними клетками](https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D1%81%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D0%B5_%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D0%BA%D0%B8%D1%85_%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB%D0%BE%D0%B2)

```
const values = [9, 6, 13, 11, 2, 15, 14, 8, 12, 10, 5, 4, 7, 1, 3];

const generatePlayingField = () => {
  const tableEl = document.createElement('table');

  tableEl.className = 'table-bordered';
  for (let i = 0; i < 4; i += 1) {
    const row = tableEl.insertRow();
    for (let j = 0; j < 4; j += 1) {
      const cell = row.insertCell();
      cell.className = 'p-3';
      if (i === 3 && j === 3) {
        cell.classList.add('table-active');
      } else {
        cell.textContent = values[i + (j * 4)];
      }
    }
  }
  return tableEl;
};
```
### Мое решение
```
export default () => {
  const gameElement = document.querySelector('.gem-puzzle');
  gameElement.append(generatePlayingField());

  const getDistance = (a, b) => (
    Math.abs(a.x - b.x) + Math.abs(a.y - b.y)
  );
  const table = gameElement.querySelector('.table-bordered');
  let currentPosition = { x: 3, y: 3 };

  const handler = (e) => {
    const targetCell = e.target;
    const targetRow = targetCell.parentElement;
    const targetCellIndex = targetCell.cellIndex;
    const targetRowIndex = targetRow.rowIndex;
    const targetPosition = {
      x: targetCellIndex,
      y: targetRowIndex,
    };
    if (getDistance(currentPosition, targetPosition) > 1) {
      return;
    }
    const targetValue = targetCell.textContent;
    const currentRow = table.rows[currentPosition.y];
    const currentCell = currentRow.cells[currentPosition.x];
    currentPosition = targetPosition;
    currentCell.innerHTML = targetValue;
    currentCell.classList.remove('table-active');
    targetCell.innerHTML = '';
    targetCell.classList.add('table-active');
  };

  table.addEventListener('click', handler);
};
```