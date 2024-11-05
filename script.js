'use strict';
// lesson03

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?", "пример: \"Простые, Сложные, Интерактивные\"");
let screenPrice = +prompt("Сколько будет стоить данная работа?", "пример:12000");
const rollback = 50;
let fullPrice = 350000;
let adaptive = !!confirm("Нужен ли адаптив на сайте?");

let ask1 = "Какой дополнительный тип услуги нужен?";
let ask2 = "Сколько это будет стоить?";

let service1 = prompt(ask1);
let servicePrice1 = +prompt(ask2);
let service2 = prompt(ask1);
let servicePrice2 = +prompt(ask2);

fullPrice = screenPrice + servicePrice1 + servicePrice2;

let servicePercentPrice = fullPrice - Math.ceil(fullPrice * (rollback / 100));
console.log("Итоговая стоимость за вычетом отката посреднику:", servicePercentPrice);

switch (true) {
  case fullPrice == 0:
  case fullPrice == 15000:
  case fullPrice == 30000:
    console.log("Секретная суперскидка 50%");
    break;
  case fullPrice > 30000:
    console.log("Даем скидку в 10%");
    break;
  case 15000 < fullPrice && fullPrice < 30000:
    console.log("Даем скидку в 5%");
    break;
  case 0 < fullPrice && fullPrice < 15000:
    console.log("Скидка не предусмотрена");
    break;
  case fullPrice < 0:
    console.log("Что-то пошло не так");
}

// Step 2 (lesson02)
console.log("Type title:", typeof title);
console.log("Type fullPrice:", typeof fullPrice);
console.log("Type adaptive:", typeof adaptive);

console.log("length of variable 'screens':", screens.length);

console.log("Стоимость верстки экранов", screenPrice, "рублей/долларов/гривен/юани");
console.log("Стоимость разработки сайта", fullPrice, "рублей/долларов/гривен/юани");

console.log(screens.toLowerCase().split(/\s*,\s*/)); // разделитель регулярное выражение

console.log("Процент отката посреднику за работу:", fullPrice * (rollback / 100));