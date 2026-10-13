# Вправи Reusable — Артем

Усі десять вправ виконані в оригінальних файлах каталогу `Exercises`.
У вправі 1 записано ім’я `Артем`, у вправі 2 — рік народження `2008`.

| № | Файл | Що реалізовано |
| --- | --- | --- |
| 1 | [1-let.js](Exercises/1-let.js) | Змінна з ім’ям |
| 2 | [2-const.js](Exercises/2-const.js) | Константа з роком народження |
| 3 | [3-hello.js](Exercises/3-hello.js) | Привітання з аргументом `name` |
| 4 | [4-range.js](Exercises/4-range.js) | Числа від `start` до `end` включно |
| 5 | [5-range-odd.js](Exercises/5-range-odd.js) | Непарні числа в діапазоні |
| 6 | [6-calculate.js](Exercises/6-calculate.js) | Квадрат, куб, середнє і цикл 0–9 |
| 7 | [7-objects.js](Exercises/7-objects.js) | Об’єкти, зміна полів і переприсвоєння |
| 8 | [8-create.js](Exercises/8-create.js) | Створення об’єкта користувача |
| 9 | [9-array.js](Exercises/9-array.js) | Телефонна книга в масиві та пошук циклом |
| 10 | [a-hash.js](Exercises/a-hash.js) | Телефонна книга в об’єкті та пошук за ключем |

Десятий файл називається `a-hash.js`: така назва вже задана в репозиторії.
Назви функцій та `module.exports` збережено, щоб працювали початкові тести.

## Запуск готової локальної папки

У VS Code обери **File → Open Folder** та відкрий цю папку `Reusable`.
Відкрий термінал через **Terminal → New Terminal**.

Якщо термінал відкрито в іншій папці, перейди до підготовленої роботи:

```bash
cd /Users/artem/Documents/Codex/2026-09-16/1-3-1-1-x-2/Reusable
```

Залежності в цій локальній папці вже встановлені. Для нового клону або
розпакованого архіву встанови їх командою:

```bash
npm i
```

Перевірка всіх вправ і ESLint:

```bash
npm t
```

У кожному тесті має бути `Status: Passed`, а перед ними не повинно бути
помилок ESLint. У цьому репозиторії `npm t` запускає тести навіть після
помилки ESLint. Для перевірки, яка зупиняється при будь-якій помилці:

```bash
npm run ci
```

Побачити результати всіх вправ у консолі:

```bash
node demo.js
```

Окремі файли експортують значення та функції для тестів. Наприклад,
`node Exercises/4-range.js` сам по собі нічого не надрукує: функцію
потрібно викликати. Для цього вже є `demo.js`.

## Пояснення вправи 7

`const user` забороняє переприсвоїти ідентифікатору `user` інший об’єкт.
Однак поле `user.name` змінювати можна: `const` не робить об’єкт незмінним.

Для `let guest` дозволені і зміна поля `guest.name`, і присвоєння іншого
об’єкта. Переприсвоєння `user` спричиняє `TypeError`, тому таку дію
не залишено у виконуваному коді. Пояснення також є в самому файлі вправи.

## Форк і завантаження на GitHub

Підготовлена локальна папка має історію оригінального репозиторію.
Її можна під’єднати до власного форку. Форк і публікація ще не виконані.

1. У своєму браузері увійди в GitHub як `Artem88-w`.
2. Відкрий [HowProgrammingWorks/Reusable](https://github.com/HowProgrammingWorks/Reusable).
3. Натисни **Fork**, залиш власника `Artem88-w` і назву `Reusable`,
   потім натисни **Create fork**.
4. Переконайся, що відкрився твій репозиторій `Artem88-w/Reusable`.

Після створення форку в терміналі готової локальної папки виконай:

```bash
git remote set-url origin https://github.com/Artem88-w/Reusable.git
git remote -v
git add Exercises demo.js HOWTO.ua.md
git commit -m "Complete reusable exercises"
git push -u origin master
```

Тут гілка називається `master`, як в оригінальному репозиторії.
Команди використовують HTTPS, тому не вимагають налаштованого SSH-ключа.

Якщо хочеш самостійно виконати саме клонування форку, після його
створення відкрий термінал у папці, де ще немає каталогу `Reusable`:

```bash
git clone https://github.com/Artem88-w/Reusable.git
cd Reusable
npm i
```

Скопіюй десять готових `.js`-файлів з каталогу `Exercises` в `Exercises`
свого клону. За бажанням також скопіюй `demo.js`. Потім:

```bash
npm t
git add Exercises
git commit -m "Complete reusable exercises"
git push -u origin master
```
