05 / application.js

В задании дана форма обратной связи состоящая из трех полей: email, name и comment. Реализуйте логику отправки этой формы (без физической отправки куда-либо). Когда форма заполнена и "отправлена" (нажата кнопка send), то вместо формы появляется такой вывод:
```
<div>
  <p>Feedback has been sent</p>
  <div>Email: test@email.com</div>
  <div>Name: Matz</div>
  <div>Comment: My Comment</div>
</div>
```

Напишите и экспортируйте функцию по умолчанию, которая реализует необходимую логику.

### Мое решение
```
export default () => {
  const render = (element, data) => {
    const { email, name, comment } = data;
    const div = document.createElement('div');
    div.innerHTML = `
      <p>Feedback has been sent</p>
      <div>Email: ${email}</div>
      <div>Name: ${name}</div>
      <div>Comment: ${comment}</div>
    `;

    element.replaceWith(div);
  };

  const handler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    render(e.target, Object.fromEntries(formData));
  };

  const formElement = document.querySelector('.feedback-form');
  formElement.addEventListener('submit', handler);
};
```