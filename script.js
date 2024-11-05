'use strict';
// lesson04

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?", "пример: \"Простые, Сложные, Интерактивные\"");
let screenPrice = +prompt("Сколько будет стоить данная работа?", "пример:12000");
let rollback = 50;
let adaptive = confirm("Нужен ли адаптив на сайте?");
let ask1 = "Какой дополнительный тип услуги нужен?";
let ask2 = "Сколько это будет стоить?";
let service1 = prompt(ask1);
let servicePrice1 = +prompt(ask2);
let service2 = prompt(ask1);
let servicePrice2 = +prompt(ask2);

let fullPrice;

const showTypeOf = function (variable) {
	console.log(variable, typeof variable);
}

const getRollbackMessage = function (price) {
	switch (true) {
		// Учесть варианты 0, 15000 и 30000
		case price == 0:
		case price == 15000:
		case price == 30000:
			return "Секретная суперскидка 50%"
		case price > 30000:
			return "Даем скидку в 10%"
		case 15000 < price && price < 30000:
			return "Даем скидку в 5%"
		case 0 < price && price < 15000:
			return "Скидка не предусмотрена"
		case price < 0:
			return "Что-то пошло не так"
	}
}

const getAllServicePrices = function () {
	return servicePrice1 + servicePrice2
}

const allServicePrices = getAllServicePrices();

function getFullPrice() {
	return screenPrice + allServicePrices
}

fullPrice = getFullPrice();

const getTitle = function (title) {
	title = title.trim();
	return title[0].toUpperCase() + title.substring(1).toLowerCase();
}

title = getTitle(title);

const getServicePercentPrices = function () {
	return fullPrice - Math.ceil(fullPrice * (rollback / 100));
}

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);
showTypeOf(getFullPrice());

console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log("Итоговая стоимость за вычетом отката посреднику:", getServicePercentPrices());
