timer.js / 12

Реализуйте таймер в виде промиса.
```
import wait from './timer.js';

wait(100).then(() => console.log('time is over!'));
```

Экспортируйте функцию по умолчанию.


### Мое решение
```
export default (ms) => new Promise((resolve) => setTimeout(resolve, ms));
```