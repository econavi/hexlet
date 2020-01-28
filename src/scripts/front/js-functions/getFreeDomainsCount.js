/* emails.js

Реализуйте и экспортируйте по умолчанию функцию getFreeDomainsCount, которая принимает на вход список емейлов, а возвращает количество емейлов, расположенных на каждом бесплатном домене. Список бесплатных доменов хранится в константе freeEmailDomains.
Пример использования

const emails = [
    'info@gmail.com',
    'info@yandex.ru',
    'info@hotmail.com',
    'mk@host.com',
    'support@hexlet.io',
    'key@yandex.ru',
    'sergey@gmail.com',
    'vovan@gmail.com',
    'vovan@hotmail.com',
];

getFreeDomainsCount(emails);
// {
//   'gmail.com': 3,
//   'yandex.ru': 2,
//   'hotmail.com': 2,
// };
Другие примеры смотрите в модуле с тестами. */

// Моё решение
// https://ru.hexlet.io/code_reviews/204589
// Неудачно отобразил данные. Нужно было сразу возвращать одни домены,
// как у учителя, а не тащить пары по всей цепочке.
import { get } from 'lodash';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
];

// BEGIN (write your solution here)
const getFreeDomainsCount = (mails) => {
  if (!mails.length) return {};

  return mails
    .map((mail) => mail.split('@'))
    .filter(([, domain]) => freeEmailDomains.includes(domain))
    .reduce((acc, [, domain]) => ({
      ...acc,
      [domain]: get(acc, domain, 0) + 1,
    }), {});
};

export default getFreeDomainsCount;
// END


// Решение учителя
import { get } from 'lodash';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
];

// BEGIN
const getFreeDomainsCount = (emails) => emails
  .map((email) => {
    const [, domain] = email.split('@');
    return domain;
  })
  .filter((domain) => freeEmailDomains.includes(domain))
  .reduce((acc, domain) => {
    const count = get(acc, domain, 0) + 1;
    return { ...acc, [domain]: count };
  }, {});

export default getFreeDomainsCount;
// END

















