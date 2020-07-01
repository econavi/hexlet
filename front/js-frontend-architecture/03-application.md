03 / application.js

Эта задача не сложная алгоритмически, но довольно объемная. 

На решение потребуется время и это хорошая прокачка
В этой задаче вам предстоит сделать список задач похожий на Reminders из MacOS. Reminder позволяет планировать задачи и создавать списки задач. По умолчанию, в нашей реализации сразу должен быть создан канал General. После инициализации js он становится таким (туда добавляется General):
```
<div class="row">
  <div class="col-2">
    <h3>Lists</h3>
    <div data-container="lists"><ul><li><b>General</b></li></ul></div>
    <form data-container="new-list-form">
      <input type="text" class="form-control mb-2" name="name">
      <input type="submit" class="btn btn-primary btn-sm" value="Add">
    </form>
  </div>
  <div class="col-10">
    <h3>Tasks</h3>
    <form class="form-inline" data-container="new-task-form">
      <input type="text" class="form-control mr-2" name="name">
      <input type="submit" class="btn btn-primary" value="Add">
    </form>
    <div data-container="tasks">
    </div>
  </div>
</div>
```

После добавления первой задачи в канал General:
```
<div class="row">
  <div class="col-2">
    <h3>Lists</h3>
    <div data-container="lists"><ul><li><b>General</b></li></ul></div>
    <form data-container="new-list-form">
      <input type="text" class="form-control mb-2" name="name">
      <input type="submit" class="btn btn-primary btn-sm" value="Add">
    </form>
  </div>
  <div class="col-10">
    <h3>Tasks</h3>
    <form class="form-inline" data-container="new-task-form">
      <input type="text" class="form-control mr-2" name="name">
      <input type="submit" class="btn btn-primary" value="Add">
    </form>
    <div data-container="tasks"><ul><li>My First Task</li></ul></div>
  </div>
</div>
```

После создания нового канала (но до переключения на него):
```
<div class="row">
  <div class="col-2">
    <h3>Lists</h3>
    <div data-container="lists"><ul><li><b>General</b></li><li><a href="#random">Random</a></li></ul></div>
    <form data-container="new-list-form">
      <input type="text" class="form-control mb-2" name="name">
      <input type="submit" class="btn btn-primary btn-sm" value="Add">
    </form>
  </div>
  <div class="col-10">
    <h3>Tasks</h3>
    <form class="form-inline" data-container="new-task-form">
      <input type="text" class="form-control mr-2" name="name">
      <input type="submit" class="btn btn-primary" value="Add">
    </form>
    <div data-container="tasks"><ul><li>My First Task</li></ul></div>
  </div>
</div>
```

После переключения на канал Random:
```
<div class="row">
  <div class="col-2">
    <h3>Lists</h3>
    <div data-container="lists"><ul><li><a href="#general">General</a></li><li><b>Random</b></li></ul></div>
    <form data-container="new-list-form">
      <input type="text" class="form-control mb-2" name="name">
      <input type="submit" class="btn btn-primary btn-sm" value="Add">
    </form>
  </div>
  <div class="col-10">
    <h3>Tasks</h3>
    <!-- Форма добавления задачи добавляет задачу в текущий активный канал -->
    <form class="form-inline" data-container="new-task-form">
      <input type="text" class="form-control mr-2" name="name">
      <input type="submit" class="btn btn-primary" value="Add">
    </form>
    <div data-container="tasks"></div>
  </div>
</div>
```

Экспортируйте функцию по умолчанию, которая реализует всю необходимую логику.

### Мое решение

```
const renderList = (state, container) => {
  const items = state.lists.map(({ id, name }) => {
    if (id === state.activeListId) {
      return `<li><b>${name}</b></li>`;
    }

    return `<li><a href="#${name.toLowerCase()}">${name}</a></li>`;
  });

  container.innerHTML = `<ul>${items.join('')}</ul>`;
};

const renderTasks = (state, container) => {
  const filteredTasks = state.tasks.filter(({ listId }) => listId === state.activeListId);
  if (!filteredTasks.length) {
    container.innerHTML = '';
    return;
  }
  const processedTasks = filteredTasks.map(({ name }) => `<li>${name}</li>`);
  container.innerHTML = `<ul>${processedTasks.join('')}</ul>`;
};

const getNewId = (list) => {
  if (!list.length) return 1;
  const ids = list.map((item) => item.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
};

export default () => {
  const state = {
    activeListId: 1,
    lists: [
      { id: 1, name: 'General' },
    ],
    tasks: [],
  };

  const listsContainer = document.querySelector('[data-container="lists"]');
  const tasksContainer = document.querySelector('[data-container="tasks"]');

  renderList(state, listsContainer);

  // Добавить новую задачу
  const newTasksForm = document.querySelector('[data-container="new-task-form"]');
  newTasksForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = e.target.elements.name;
    const { value } = input;
    if (!value) {
      input.focus();
      return;
    }
    const id = getNewId(state.tasks);
    const newTask = { id, listId: state.activeListId, name: value };
    state.tasks = [...state.tasks, newTask];
    renderTasks(state, tasksContainer);
    input.value = '';
    input.focus();
  });

  // Добавить новую категорию
  const newListForm = document.querySelector('[data-container="new-list-form"]');
  newListForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = e.target.elements.name;
    const { value } = input;
    if (!value) {
      input.focus();
      return;
    }
    const id = getNewId(state.lists);
    const newList = { id, name: value };
    state.lists = [...state.lists, newList];
    renderList(state, listsContainer);
    input.value = '';
    input.focus();
  });

  // Переключение на другую категорию
  listsContainer.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.tagName !== 'A') return;
    const text = e.target.textContent;
    const { id: newActiveListId } = state.lists.find(({ name }) => name === text);
    state.activeListId = newActiveListId;
    renderList(state, listsContainer);
    renderTasks(state, tasksContainer);
  });
};
```

