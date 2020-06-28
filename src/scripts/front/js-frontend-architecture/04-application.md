04 / application.js

Реализуйте js часть компонента *list-group* бутстрапа. Посмотреть пример работы можно здесь https://getbootstrap.com/docs/4.1/components/list-group/#javascript-behavior

Задача в том чтобы добавить js код, который оживляет переключение.

Реализуйте задание используя архитектуру MVC.

Код должен работать даже в том случае если на странице есть несколько компонентов list-group.

### Мое решение
```
export default () => {
  const state = {
    currentTabElement: null,
    currentContentElement: null,
  };

  const render = (oldState, newState) => {
    if (oldState.currentTabElement === newState.currentTabElement) return;
    oldState.currentTabElement.classList.remove('active');
    newState.currentTabElement.classList.add('active');

    oldState.currentContentElement.classList.remove('active', 'show');
    newState.currentContentElement.classList.add('active', 'show');
  };

  const handleClick = (e) => {
    const activeTabElement = e.currentTarget.querySelector('.active');
    const activeTabHref = activeTabElement.getAttribute('href');
    const activeContentElement = document.querySelector(activeTabHref);

    state.currentTabElement = activeTabElement;
    state.currentContentElement = activeContentElement;
    const oldState = { ...state };

    const currentTabElement = e.target;
    const currentTabHref = currentTabElement.getAttribute('href');
    const currentContentElement = document.querySelector(currentTabHref);

    state.currentTabElement = currentTabElement;
    state.currentContentElement = currentContentElement;

    render(oldState, state);
  };

  document.querySelectorAll('.list-group').forEach((group) => {
    group.addEventListener('click', handleClick);
  });
};
```