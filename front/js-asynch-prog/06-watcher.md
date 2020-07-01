watcher.js / 06

Реализуйте и экспортируйте по умолчанию асинхронную функцию, которая следит за изменением файла. Если файл был изменён со времени предыдущей проверки, то необходимо вызвать колбек. Отслеживание изменений файла должно начинаться с момента вызова функции. 

Параметры функции:
* Путь до файла, который нужно отслеживать
* Период отслеживания
* Колбек, который принимает на вход только ошибку

```
import watch from './watcher.js';

const id = watch(filepath, 500, (err) => {
  console.log('Wow!');
});

setTimeout(() => fs.appendFileSync(filepath, 'ehu'), 700);
```

Реализуйте эту логику используя функцию `setInterval`. Функция должна возвращать наружу идентификатор таймера. Если во время анализа файла (через `fs.stat`) произошла ошибка, то нужно остановить таймер и вызвать колбек, передав туда ошибку.

Подсказки

* [stats.mtimeMs](https://nodejs.org/api/fs.html#fs_stats_mtimems) — время последнего изменения
* [Date.now()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now) — текущая дата
* [clearInterval](https://www.w3schools.com/jsref/met_win_clearinterval.asp)

### Мое решение
```
const watcher = (filepath, interval, cb) => {
  let lastCheckTime = Date.now();

  const check = (timerId) => {
    fs.stat(filepath, (error, stats) => {
      if (error) {
        clearInterval(timerId);
        cb(error);
        return;
      }

      const { mtimeMs } = stats;
      if (mtimeMs > lastCheckTime) {
        cb(null);
        lastCheckTime = mtimeMs;
      }
    });
  };

  const timerId = setInterval(() => check(timerId), interval);

  return timerId;
};

export default watcher;
```