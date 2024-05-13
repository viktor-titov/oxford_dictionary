# Oxford Dictionary

## Статус

> В разработке. 

Остановился на описании интерфейсов. Получается достаточно развесисто, можно сказать осознаный подход к созданию хорошего отображения для слова/фразы. Все концепции, нейминг взята с [API Oxford Dictionaries](https://developer.oxforddictionaries.com/documentation), так же подглядывал в кастомную реализацию этого апи [Free Dictionary API](https://dictionaryapi.dev/)

Реализовано:

- Супер пробный вариант открытия страницы, заполениня и активации поиска.
- Парсинг раздела где указаны похожие слова и фразы и выделение ссылок. Это нужно чтобы создавать карту зависимостей слова/фразы + часть речи = ссылка. Чтобы не вызывать процедуру поиска. Нужна будет реализация для хранения этой карты.  

Получить сервис отдающие структурированые данные по grpc клинету.

# Источники где можно найти что то полезное для разработки словаря.

- [Статья где собраны api различных словарей](https://medium.com/@martin.breuss/finding-a-useful-dictionary-api-52084a01503d)

Из интересного есть обертка API oxford dictionary API [web версия для пробы](https://medium.com/@martin.breuss/finding-a-useful-dictionary-api-52084a01503d)

[Endpoint запроса. Очень развесистая структура. Для примера.](https://developer.oxforddictionaries.com/documentation)

# Инструменты парсинга

- [cheerio](https://cheerio.js.org/docs/basics/manipulation#removing-elements)
- [puppeteer](https://pptr.dev/guides/page-interactions) 