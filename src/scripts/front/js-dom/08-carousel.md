08 / carousel.js

В Bootstrap есть компонент [Carousel](https://v4-alpha.getbootstrap.com/components/carousel/#content).

Этот слайдер устроен также как и все остальное в бутстрапе. В верстке определяются data аттрибуты, по которым бутстрап понимает что это карусель и оживляет ее.

На слайдере отображаются две стрелки, одна влево другая вправо. Клики по этим стрелкам приводят к перемотке слайдов по кругу. С точки зрения DOM происходит следующее:

* Класс `active` снимается с текущего элемента .`carousel-item`
* Активный элемент получает класс `active`

Реализуйте логику слайдера в функции экспортированной по умолчанию.

Постройте свою логику так, чтобы она позволила использовать на одной странице любое количество компонентов `carousel` с любым количеством картинок внутри.

### Мое решение
```
import $ from 'jquery';

export default () => {
  $('[data-ride="carousel"]').each((_index, carousel) => {
    const $root = $(carousel);
    const $slides = $root.find('.carousel-item');
    const maxIndex = $slides.length - 1;

    const handlerGenerator = (next) => () => {
      const currentIndex = $slides.filter('.active').index();
      const newCurrentIndex = next(currentIndex);
      $slides.removeClass('active');
      $slides.filter((id) => id === newCurrentIndex).addClass('active');
    };

    const $prevButton = $root.find('[data-slide="prev"]');
    $prevButton.click(handlerGenerator((i) => (i === 0 ? maxIndex : i - 1)));
    const $nextButton = $root.find('[data-slide="next"]');
    $nextButton.click(handlerGenerator((i) => (i === maxIndex ? 0 : i + 1)));
  });
};
```