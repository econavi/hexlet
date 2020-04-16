timer.js

*Эта практика включает в себя элементы асинхронного программирования (setTimeout), так как bind в основном используется в этом контексте*

Реализуйте и экспортируйте по умолчанию функцию, которая возвращает объект-таймер. Таймер "заводится" на определенное время и запускается. Каждые **100** миллисекунд он вызывает колбек, передавая туда два параметра: `state` со значением `working` и `elapsedTime` содержащий прошедшее время со старта таймера (в миллисекундах). Когда таймер завершился, то он вызывает тот же колбек с параметром `state` и значением `finished`.
```
// Колбек
const cb = ({ state, elapsedTime }) => {
  switch state {
    case 'working':
      console.log(`Time elapsed: ${elapsedTime}`);
      break;
    case 'finished':
      console.log(`Timer has finished!`);
  }
};

// Создается объект-таймер
const timer = makeTimer(300, cb); // Завели на 300 миллисекунд
timer.start();
// Time elapsed: 100
// Time elapsed: 200
// Time elapsed: 300
// Timer has finished!
```
Подсказки

* Для запуска таймера используйте [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
* Для остановки [clearInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval)


### Мое решение (v.1)
```
export default (totalTime, cb) => ({
  start: () => {
    const intervalId = setInterval(() => {
      let elapsedTime = 0;

      elapsedTime += 100;
      cb({ state: 'working', elapsedTime });
    }, 100);

    setTimeout(() => {
      clearInterval(intervalId);
      cb({ state: 'finished' });
    }, totalTime);
  },
});
```

### Мое решение (v.2)
```
export default (totalTime, cb) => ({
  step: 100,
  totalTime,
  elapsedTime: 0,

  tick() {
    const newElapsedTime = this.elapsedTime + this.step;
    if (newElapsedTime > this.totalTime) {
      clearInterval(this.intervalId);
      cb({ state: 'finished' });
      return;
    }

    this.elapsedTime = newElapsedTime;
    cb({ state: 'working', elapsedTime: this.elapsedTime });
  },

  start() {
    this.intervalId = setInterval(this.tick.bind(this), this.step);
  },
});
```
