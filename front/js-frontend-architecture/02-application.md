02 / application.js

*Эта задача не сложная алгоритмически, но довольно объемная. На решение потребуется время и это хорошая прокачка*

Некоторые интерфейсы допускают редактирование "по месту" (in-place). Это значит что для обновления значений каких-то данных не нужно переходить на отдельную страницу редактирования, достаточно кликнуть на сам элемент (или кнопку рядом с ним) как появится форма для изменения конкретно этого значения.

В данной практике нужно построить именно такой интерфейс. Он работает по следующему принципу. Контейнер внутри которого находятся данные для редактирования, помечается специальным аттрибутом: `data-editable-target`. Значением этого атрибута является имя поля. В нашем примере это name и email. 

Начальный HTML выглядит так:
```
<div data-editable-target="name"><i>name</i></div>
<div data-editable-target="email"><i>email</i></div>
```

Когда происходит клик на этом элементе, то он заменяется на форму:
```
<div data-editable-target="name">
  <form>
    <!-- С точки зрения хорошего UX нужно фокусироваться (это позволяет использовать клавиатуру сразу) на этом инпуте и выделять текст внутри него -->
    <!-- Исключение составляет ситуация, когда поле пустое (но отражается текст выделенный курсивом как в примере выше) -->
    <input type="text" name="name">
    <input type="submit" value="Save">
  </form>
</div>
```
Далее вбивается нужное значение и кнопка Save (отправка формы) возвращает текст. Предположим что мы набрали значение "Cat". Тогда после отправки формы этот див станет таким:
```
<div data-editable-target="name">
  Cat
</div>
```

Если значение стирается, то тогда текст меняется на первоначальный (и добавляется курсив), такой какой он был до любых изменений:
```
<div data-editable-target="name"><i>name</i></div>
<div data-editable-target="email"><i>email</i></div>
```

Экспортируйте функцию по умолчанию, которая реализует всю необходимую логику. По необходимости создайте дополнительные функции на уровне модуля.

Подсказки:

- Каждое поле обрабатывается независимо и каждому понадобится свое собственное состояние.
- Код отвечающий за изменение DOM не может менять состояние.
- Обработчики не могут напрямую менять DOM. Это делает функция `render`.

### Мое решение
```
const buildText = (name, { value }) => {
  const processedValue = value.trim();
  if (processedValue === '') {
    const i = document.createElement('i');
    i.innerHTML = name;
    return i;
  }
  return document.createTextNode(value);
};

const buildForm = (element, name, state, render) => {
  const form = document.createElement('form');
  const input = document.createElement('input');
  input.type = 'text';
  input.name = name;
  input.setAttribute('value', state.value);
  const submit = document.createElement('input');
  submit.type = 'submit';
  submit.value = 'Save';
  form.append(input, submit);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    state.value = formData.get(name);
    state.mode = 'text';
    render(element, name, state);
  });

  return { input, form };
};

const render = (element, name, state) => {
  element.innerHTML = '';

  switch (state.mode) {
    case 'form': {
      const result = buildForm(element, name, state, render);
      element.append(result.form);
      result.input.select();
      break;
    }
    case 'text':
      element.append(buildText(name, state));
      break;
    default:
      throw new Error(`Unknown mode: ${state.mode}`);
  }
};

const handle = (element, name, state) => {
  if (state.mode === 'text') {
    state.mode = 'form';
    render(element, name, state);
  }
};

export default () => {
  const elements = document.querySelectorAll('[data-editable-target]');
  elements.forEach((element) => {
    const state = {
      mode: 'text',
      value: '',
    };
    const name = element.dataset.editableTarget;
    element.addEventListener('click', () => handle(element, name, state));
  });
};
```