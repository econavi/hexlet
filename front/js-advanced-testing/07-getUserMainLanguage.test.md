07 / getUserMainLanguage.test.js

В этом задании нужно протестировать такую же функцию `getUserMainLanguage(user)`, но используя не инверсию зависимостей, а манки патчинг через библиотеку *nock*.

Подсказки:

* В тестах выключены реальные запросы. Это значит, что если запустить тесты, в которых выполняется реальный запрос, nock его перехватит и выведет на экран. Так можно узнать адреса по которым *@octokit/rest* выполняет свои запросы.

### Мое решение
```
import nock from 'nock';
import getFunction from '../functions.js';

const getUserMainLanguage = getFunction();

nock.disableNetConnect();

// BEGIN (write your solution here)
test('getUserMainLanguage', async () => {
  const data = [
    { language: 'ruby' },
    { language: 'php' },
    { language: 'java' },
    { language: 'php' },
    { language: 'js' },
  ];

  // https://api.github.com/users/linus/repos
  nock(/api\.github\.com/)
    .get(/\/users\/linus\/repos/)
    .reply(200, data);

  const mainLanguage = await getUserMainLanguage('linus');
  expect(mainLanguage).toEqual('php');
});
```