06 / application.js

В этой задаче вам предстоит реализовать грид. В интерфейсах так называется список выведенный в табличном виде, позволяющий выполнять разные действия над ним, например, сортировку.

В качестве данных нужно взять объект `document.location`, который содержит в себе информацию о браузере. 
Пример неполного вывода:

Name (Asc) |	Value (Unsorted)  
-----------|-------------------
host	     |    localhost  
pathname	 |   /

Вывести нужно только те свойства, которые удовлетворяют условиям:
* Не функции
* Не объекты
* Не пустые

По умолчанию вывод происходит в алфавитном порядке по имени свойства. Этот порядок можно менять кликом по заголовку. Если происходит клик на другой столбец, то происходит сортировка по нему (в порядке возрастания). Повторный клик меняет порядок сортировки.
```
<div class="container m-3">
    <table class="table">
        <tbody>
            <tr>
                <th><a href="">Name (Asc)</a></th>
                <th><a href="">Value (Unsorted)</a></th>
            </tr>
            <tr>
                <td>host</td>
                <td>localhost</td>
            </tr>
            <tr>
                <td>hostname</td>
                <td>localhost</td>
            </tr>
            <tr>
                <td>href</td>
                <td>http://localhost/</td>
            </tr>
            <tr>
                <td>origin</td>
                <td>http://localhost</td>
            </tr>
            <tr>
                <td>pathname</td>
                <td>/</td>
            </tr>
            <tr>
                <td>protocol</td>
                <td>http:</td>
            </tr>
        </tbody>
    </table>
</div>
```
Рядом с каждым заголовком, в скобках, указано состояние столбца. Всего их три:
* Не отсортирован
* Прямой
* Обратный

В один момент времени сортировка может быть выполнена только по одному столбцу.

Экспортируйте функцию по умолчанию, которая реализует всю необходимую логику. Тексты должны подставляться через библиотеку `i18next`.

Подсказки:

* Сравнение строк [localeCompare](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)
* Переводы можно вкладывать друг в друга: `I18n.t('key', { value: I18n.t('another key') })`
* Получить все свойства объекта (включая то что наследуется) можно через цикл *for..in*



Мое решение
```
// src/locales/en.js

const en = {
  translation: {
    link: {
      label: {
        names: 'Name',
        values: 'Value',
      },
      state: {
        asc: 'Asc',
        unsorted: 'Unsorted',
        desc: 'Desc',
      },
    },
  },
};

export default en;


// src/application.js

import i18next from 'i18next';
import onChange from 'on-change';
import resources from './locales';

export default () => {
  // Init
  i18next.init({
    lng: 'en',
    debug: false,
    resources,
  });
  const lacation = window.location;
  const container = document.querySelector('.container');
  const nextSortDirection = {
    asc: 'desc',
    desc: 'asc',
    unsorted: 'asc',
  };

  // ========================
  // State
  // ========================
  const state = {
    table: {
      names: 'asc',
      values: 'unsorted',
    },
  };

  // ========================
  // Builder
  // ========================
  const buildTable = (data, currentState) => {
    const getItems = () => (
      data.map(([name, value]) => `<tr><td>${name}</td><td>${value}</td></tr>`).join('')
    );

    const upperFirstLetter = (text) => {
      const [first, ...rest] = text.split('');
      return `${first.toUpperCase()}${rest.join('')}`;
    };

    return (
      `<table class="table">
          <tbody>
              <tr>
                <th><a href="">${i18next.t('link.label.names')} (${upperFirstLetter(currentState.table.names)})</a></th>
                <th><a href="">${i18next.t('link.label.values')} (${upperFirstLetter(currentState.table.values)})</a></th>
              </tr>
              ${getItems()}
          </tbody>
      </table>`
    );
  };

  // ========================
  // Parser
  // ========================
  const isValid = (val) => (
    !(typeof val === 'function' || val === '' || val instanceof Object)
  );

  const getData = () => {
    const result = {};
    for (const key in lacation) {
      const value = lacation[key];
      if (isValid(value)) {
        result[key] = value;
      }
    }
    return result;
  };

  const sortData = (obj, field, direction) => {
    const data = Object.entries(obj);
    const sortedData = data.sort((a, b) => {
      const [val1, val2] = field === 'key' ? [a[0], b[0]] : [a[1], b[1]];
      return direction === 'asc' ? val1.localeCompare(val2) : val2.localeCompare(val1);
    });
    return sortedData;
  };

  // ========================
  // Watcher
  // ========================
  const watchedState = onChange(state, (path, value) => {
    if (value === 'unsorted') return;
    state.render(state);
  });

  // ========================
  // Controller
  // ========================
  const handleClickOnNameLink = (e) => {
    e.preventDefault();
    const nextStateLink = nextSortDirection[watchedState.table.names];
    watchedState.table.values = 'unsorted';
    watchedState.table.names = nextStateLink;
  };

  const handleClickOnValueLink = (e) => {
    e.preventDefault();
    const nextStateLink = nextSortDirection[watchedState.table.values];
    watchedState.table.names = 'unsorted';
    watchedState.table.values = nextStateLink;
  };

  // ========================
  // Render
  // ========================
  const render = (currentState) => {
    const data = getData();
    const sortedData = currentState.table.names === 'unsorted'
      ? sortData(data, 'value', currentState.table.values)
      : sortData(data, 'key', currentState.table.names);
    const table = buildTable(sortedData, watchedState);
    container.innerHTML = table;
    const [nameLink, valueLink] = container.querySelectorAll('a');
    nameLink.addEventListener('click', handleClickOnNameLink);
    valueLink.addEventListener('click', handleClickOnValueLink);
  };

  render(state);
  state.render = render;
};
