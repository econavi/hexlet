05 / application.js

В этой задаче вам предстоит реализовать форму регистрации. Форма состоит из 4 полей (имя, email, пароль и его подтверждение). Начальный HTML доступен в public/index.html.

Форма должна быть контролируемой. Во время набора данных выполняется валидация сразу всех полей (для простоты). Валидацию нужно построить на базе библиотеки [yup](https://github.com/jquense/yup#usage). В коде уже описана вся нужная валидация. Осталось только вызвать проверку и записать тексты ошибок в объект состояния.

Кнопка отправки формы по умолчанию заблокирована. Она разблокируется когда валидна вся форма целиком и блокируется сразу, как только появляется невалидное значение.

HTML когда введены неправильные email и password (один из возможных вариантов):
```
<div data-container="sign-up">
  <form data-form="sign-up" method="post">
    <div class="form-group">
      <label for="sign-up-name">Name</label>
      <input id="sign-up-name" type="text" class="form-control" name="name">
    </div>
    <div class="form-group">
      <label for="sign-up-email">Email<sup>*</sup></label>
      <!-- Если поле невалидно, то добавляется класс is-invalid -->
      <input id="sign-up-email" required="" type="email" class="form-control is-invalid" name="email"><div class="invalid-feedback">Value is not a valid email</div>
    </div>
    <div class="form-group">
      <label for="sign-up-password">Password<sup>*</sup></label>
      <input id="sign-up-password" required="" type="password" class="form-control is-invalid" name="password"><div class="invalid-feedback">Must be at least 6 letters</div>
    </div>
    <div class="form-group">
      <label for="sign-up-password-confirmation">Password Confirmation<sup>*</sup></label>
      <input id="sign-up-password-confirmation" required="" type="password" class="form-control" name="passwordConfirmation">
    </div>
    <input type="submit" class="btn btn-primary" disabled="" value="Submit">
  </form>
</div>
```

После того как все поля введены правильно, данные формы отправляются постом на урл /users. Во время отправки кнопка отправки блокируется (во избежание двойной отправки).

Когда форма отправлена, HTML меняется на следующий:
```
<div data-container="sign-up">User Created!</div>
```

Экспортируйте функцию по умолчанию, которая реализует всю необходимую логику.

Подсказки:

* [validateSync](https://github.com/jquense/yup#mixedvalidatesyncvalue-any-options-object-any) – для вызова валидации (работает через исключения). Не забудьте выключить опцию `abortEarly`.
* В исключении валидатора есть свойство `inner`. Внутри него находятся валидаторы конкретных полей формы. Через них можно понять у какого поля возникла ошибка и какая это была ошибка.
* Документация [axios](https://github.com/axios/axios). Он работает очень похоже на [fetch](https://ru.hexlet.io/courses/js-dom/lessons/ajax/theory_unit).



### Мое решение
```
import * as yup from 'yup';

import onChange from 'on-change';
import axios from 'axios';

const routes = {
  usersPath: () => '/users',
};

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  passwordConfirmation: yup.string()
    .required()
    .oneOf(
      [yup.ref('password'), null],
      'Password confirmation does not match to password',
    ),
});

const createErrorElement = (text) => {
  const div = document.createElement('div');
  div.setAttribute('class', 'invalid-feedback');
  div.textContent = text;
  return div;
};

const deleteErrors = (formElement, inputs) => {
  inputs.forEach((item) => item.classList.remove('is-invalid'));
  formElement.querySelectorAll('.invalid-feedback').forEach((item) => item.remove());
};

const signUpForm = () => {
  const formElement = document.querySelector('[data-form="sign-up"]');
  const inputs = formElement.querySelectorAll('.form-control');
  const submitButton = formElement.querySelector('[type="submit"]');

  const state = {
    fields: {
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    submitted: false,
  };

  const whatchedState = onChange(state, (path, value, prevValue) => {
    if (path === 'submitted' && state.submitted) {
      formElement.closest('[data-container="sign-up"]').textContent = 'User Created!';
      return;
    }

    if (value === prevValue) return;

    deleteErrors(formElement, inputs);

    try {
      schema.validateSync(state.fields, { abortEarly: false });
      submitButton.disabled = false;
    } catch (error) {
      submitButton.disabled = true;
      const errorsData = error.inner.map((item) => [item.path, item.message]);
      errorsData.forEach((item) => {
        const [fieldName, message] = item;
        const field = formElement.elements[fieldName];
        field.classList.add('is-invalid');
        field.after(createErrorElement(message));
      });
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    whatchedState.fields[name] = value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitButton.disabled = true;
    axios.post(routes.usersPath(), whatchedState.fields)
      .then(() => {
        whatchedState.submitted = true;
      });
  };

  inputs.forEach((input) => {
    input.addEventListener('input', handleChange);
  });

  formElement.addEventListener('submit', handleSubmit);
};

export default signUpForm;
```