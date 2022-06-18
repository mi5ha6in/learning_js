# [Гуляем по DOM](https://javascript.info/dom-navigation)

Операции над DOM начинаются с объекта ```document```. От него можно получить
доступ к различным узлам документа.

Самые верхние узлы можно получить как свойства объекта ```document```. `<html> =
document.documentElement` `<head> = document.head` `<body> = document.body`

Можно получать доступ к любому типу узла:
![ссылки в DOM на любой узел](img/dom-links.svg)

А можно только к элементам:
![ссылки в DOM на элементы](img/dom-links-elements.svg)

Для любых узлов: `parentNode, childNodes, firstChild, lastChild,
previousSibling, nextSibling.`

Для элементов: `parentElement, children, firstElementChild, lastElementChild,
previousElementSibling, nextElementSibling`

Некоторые типы элементов DOM, например. таблицы, предоставлять дополнительные
свойства и коллекции для доступа к их содержимому.
