01 / application.js

Реализуйте и экспортируйте функцию по умолчанию, которая активизирует фильтр ноутбуков на основе html формы. Изменение любого параметра должно сразу приводить к фильтрации. Ноутбуки подходящие под фильтр выводятся внутри `<div class="result"></div>` как список `ul/li` моделей (свойство `model` внутри объекта представляющего ноутбук). Полный список ноутбуков доступен в файле `application.js`.

Условия:
* Если фильтр пустой, то выводится все.
* Если под фильтр ничего не подходит, то список не выводится.

Подсказки

* Для отслеживания изменений текстовых инпутов используйте событие `input`. Для select - `change`.

### Мое решение
```
const notebooks = [
  {
    model: 'v1', processor: 'intel', frequency: 1.7, memory: 16,
  },
  {
    model: 'd3', processor: 'intel', frequency: 3.5, memory: 8,
  },
  {
    model: 'd2', processor: 'amd', frequency: 2.5, memory: 16,
  },
];

// BEGIN (write your solution here)
const render = (state = {}) => {
  const filteredItems = notebooks
    .filter((item) => (state.processor ? item.processor === state.processor : item))
    .filter((item) => (state.memory ? item.memory === state.memory : item))
    .filter((item) => (state.minFrequency ? item.frequency >= state.minFrequency : item))
    .filter((item) => (state.maxFrequency ? item.frequency <= state.maxFrequency : item));

  const resultElement = document.querySelector('.result');
  if (!filteredItems.length) {
    resultElement.innerHTML = '';
    return;
  }
  const list = document.createElement('ul');
  const listItems = filteredItems.map((item) => `<li>${item.model}</li>`);
  list.innerHTML = listItems.join('\n');
  resultElement.innerHTML = '';
  resultElement.append(list);
};

export default () => {
  const state = {
    processor: null,
    memory: null,
    minFrequency: null,
    maxFrequency: null,
  };

  const processor = document.querySelector('[name="processor_eq"]');
  processor.addEventListener('change', (e) => {
    state.processor = e.target.value;
    render(state);
  });

  const memory = document.querySelector('[name="memory_eq"]');
  memory.addEventListener('change', (e) => {
    state.memory = Number(e.target.value);
    render(state);
  });

  const minFrequency = document.querySelector('[name="frequency_gte"]');
  minFrequency.addEventListener('input', (e) => {
    state.minFrequency = Number(e.target.value);
    render(state);
  });

  const maxFrequency = document.querySelector('[name="frequency_lte"]');
  maxFrequency.addEventListener('input', (e) => {
    state.maxFrequency = Number(e.target.value);
    render(state);
  });

  render(state);
};
// END
```

### Решение учителя

```
// @ts-check

const notebooks = [
  {
    model: 'v1', processor: 'intel', frequency: 1.7, memory: 16,
  },
  {
    model: 'd3', processor: 'intel', frequency: 3.5, memory: 8,
  },
  {
    model: 'd2', processor: 'amd', frequency: 2.5, memory: 16,
  },
];

// BEGIN
// This solution is kind of library. It can work with any forms without changing main logic.
// Just by adding as many predicates as needed
const predicates = {
  eq: (value) => (el) => String(el) === String(value),
  gte: (value) => (el) => (el) >= Number(value),
  lte: (value) => (el) => (el) <= Number(value),
};

const filterItems = (query, items) => {
  const fields = Object.keys(query);
  const activeFields = fields.filter((field) => query[field]);
  const result = activeFields.reduce((acc, field) => {
    const [name, predicateName] = field.split('_');
    const match = predicates[predicateName];
    return acc.filter((item) => match(query[field])(item[name]));
  }, items);
  return result;
};

const render = (state) => {
  const resultElement = document.querySelector('.result');
  const filteredNotebooks = filterItems(state.filter, notebooks);
  if (filteredNotebooks.length === 0) {
    resultElement.innerHTML = '';
    return;
  }
  const html = `<ul>${filteredNotebooks.map((n) => `<li>${n.model}</li>`).join('')}</ul>`;
  resultElement.innerHTML = html;
};

export default () => {
  const state = {
    filter: {
      processor_eq: null,
      memory_eq: null,
      frequency_gte: null,
      frequency_lte: null,
    },
  };

  const items = [
    { name: 'processor_eq', eventType: 'change' },
    { name: 'memory_eq', eventType: 'change' },
    { name: 'frequency_gte', eventType: 'input' },
    { name: 'frequency_lte', eventType: 'input' },
  ];
  items.forEach(({ name, eventType }) => {
    const element = document.querySelector(`[name="${name}"]`);
    element.addEventListener(eventType, ({ target }) => {
      state.filter[target.name] = target.value === '' ? null : target.value;
      render(state);
    });
  });
  render(state);
};
// END
```
