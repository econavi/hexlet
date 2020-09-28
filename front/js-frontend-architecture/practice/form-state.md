# app.js

Реализуйте логику работы формы для добавления новых todo записей:
* форма поддерживает валидацию ввода (обязательное поле, минимум 3, максимум 30 символов)
* на время загрузки новой записи поля формы и кнопка отправки должны блокироваться
В приложении есть сервер, принимающий POST-запросы c телом `{ todo: { name } }` на */todos*. Определите формат ответа сервера самостоятельно.

# view.js

Реализуйте логику, отвечающую за слой view в приложении.

## Примеры

Начальный HTML:
```
<form id="todo-form" class="form-inline mb-3">
  <div class="form-group">
    <input id="todo-input" type="text" class="form-control mr-2" name="name" placeholder="New todo">
  </div>
  <button id="todo-submit" class="btn btn-primary" type="submit">Save</button>
</form>
<ul id="todos" class="list-group">
</ul>
```
При попытке отправки слишком короткой записи:
```
<form id="todo-form" class="form-inline mb-3">
  <div class="form-group">
    <input id="todo-input" type="text" class="form-control mr-2" name="name" placeholder="New todo">
    <div class="invalid-feedback">this must be at least 3 characters</div>
  </div>
  <button id="todo-submit" class="btn btn-primary" type="submit">Save</button>
</form>
<ul id="todos" class="list-group">
</ul>
```
После успешной отправки:
```
<form id="todo-form" class="form-inline mb-3">
  <div class="form-group">
    <input id="todo-input" type="text" class="form-control mr-2" name="name" placeholder="New todo">
  </div>
  <button id="todo-submit" class="btn btn-primary" type="submit">Save</button>
</form>
<ul id="todos" class="list-group">
  <li>read books</li>
</ul>
```

## Подсказки

* для обработки ошибок приложения (например, сетевые ошибки) можно использовать [компонент toast](https://getbootstrap.com/docs/4.5/components/toasts/), в разметке есть заготовка.
* [yup](https://github.com/jquense/yup)
* [onchange](https://github.com/sindresorhus/on-change)
 

# Моё решение

```
// view.js

import onChange from 'on-change';

// BEGIN (write your solution here)
const initView = (state) => {
  const form = state.form.element;
  const input = form.querySelector('#todo-input');
  const inputWrapper = input.parentElement;
  const submitBtn = form.querySelector('#todo-submit');
  const todosList = document.querySelector('#todos');

  const watchedState = onChange(state, (path, value) => {
    input.value = '';

    if (path === 'form.state') {
      if (value === 'redy') {
        input.removeAttribute('disabled');
        submitBtn.removeAttribute('disabled');
      }

      if (value === 'sending') {
        input.setAttribute('disabled', '');
        submitBtn.setAttribute('disabled', '');
      }
    }

    if (path === 'form.error') {
      const invalidFeedback = form.querySelector('.invalid-feedback');
      if (invalidFeedback) {
        invalidFeedback.remove();
      }

      if (value) {
        input.removeAttribute('disabled');
        submitBtn.removeAttribute('disabled');
        const div = document.createElement('div');
        div.className = 'invalid-feedback';
        div.textContent = watchedState.form.error;
        inputWrapper.appendChild(div);
      }
    }

    if (path === 'todos') {
      const items = state.todos.map((item) => `<li>${item}</li>`);
      todosList.innerHTML = items.join('');
    }
  });

  return watchedState;
};
// END

export default initView;
```
```
// app.js

import axios from 'axios';
import * as yup from 'yup';

import initView from './view.js';

// BEGIN (write your solution here)
const app = () => {
  const state = {
    todos: [],
    form: {
      state: 'redy',
      element: document.querySelector('#todo-form'),
    },
  };

  const watchedState = initView(state);

  const schema = yup.object().shape({
    value: yup.string().required('this is a required field').min(3, 'this must be at least 3 characters'),
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const inputValue = formData.get('name').trim();

    // Валидация
    try {
      schema
        .validateSync({
          value: inputValue,
        }, { abortEarly: true });
    } catch (err) {
      watchedState.form.error = err.message;
      return;
    }

    // Отправка на сервер
    watchedState.form.error = '';
    watchedState.form.state = 'sending';

    const response = await axios.post('/todos', {
      todo: { name: inputValue },
    }).then((val) => val);

    if (response.status === 200 || response.statusText === 'Created') {
      watchedState.form.state = 'redy';
      watchedState.todos.push(inputValue);
    }
  };

  state.form.element.addEventListener('submit', submitHandler);
};
// END

export default app;
```
