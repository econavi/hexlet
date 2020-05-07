07 / autocomplete.js

Задача этого упражнения состоит в том чтобы реализовать автокомплит по странам. На странице присутствует элемент `input`, с аттрибутами `data-autocomplete` и `data-autocomplete-name`, к которому нужно привязаться. Атрибут `data-autocomplete` содержит ссылку, по которой нужно делать запрос на данные. Атрибут `data-autocomplete-name` содержит имя, по которому необходимо найти на странице список `ul` с точно таким же аттрибутом и значением. В этом списке выводятся данные.

Реализуйте автокомплит по странам.

Как только в поле ввода появляется хотя бы один символ, необходимо выполнить запрос на сервер с параметром `term` значением которого, будет строка введенная в `input`. Сервер возвращает массив из стран (на английском языке).

Если этот массив не пустой, то нужно заполнить список таким образом:
```
<ul data-autocomplete-name="country">
  <li>pakistan</li>
  <li>panama</li>
  <li>paraguay</li>
</ul>
```
Если с сервера пришел пустой список то нужно вывести:
```
<ul data-autocomplete-name="country">
  <li>Nothing</li>
</ul>
```

Подсказки

* Для формирования правильного запроса на сервер, используйте [URL](https://nodejs.org/api/url.html#url_url_strings_and_url_objects)
* Текущий хост можно извлечь так `window.location.origin`
* Значение поля `input` необходимо брать из события так: `e.target.value`
* Используйте *async/await*
* Ваш код должен работать даже в том случае если на странице множество автокомплитов
* Используйте событие [input](https://developer.mozilla.org/en-US/docs/Web/Events/input)

### Мое решение
```
import 'whatwg-fetch';

export default () => {
  const handler = async (e) => {
    const input = e.target;
    const inputValue = input.value;

    const host = window.location.origin;
    const path = input.dataset.autocomplete;
    const url = new URL(path, host);
    url.searchParams.append('term', inputValue);

    const listSelector = input.dataset.autocompleteName;
    const listEl = document.querySelector(`ul[data-autocomplete-name="${listSelector}"]`);

    const response = await fetch(url);
    const data = await response.json();

    if (!data.length) {
      listEl.innerHTML = '<li>Nothing</li>';
      return;
    }

    const optionsList = data.map((item) => `<li>${item}</li>`);
    listEl.innerHTML = optionsList.join('');
  };

  const inputs = document.querySelectorAll('input[data-autocomplete]');
  inputs.forEach((input) => input.addEventListener('input', handler));
};
```
