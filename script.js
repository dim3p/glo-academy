'use strict';
// lesson05

let title;
let screens;
let screenPrice;
let adaptive;
const rollback = 50;
let service1
let service2
let servicePrice1
let servicePrice2
const ask1 = "Какой дополнительный тип услуги нужен?";
const ask2 = "Сколько это будет стоить?";
let fullPrice
let servicePrices
let servicePercentPrices
let allServicePrices
let rollbackPrice

console.log(!isNaN(parseFloat("10")) && isFinite("10"));

const isNumber = function (num) {
	return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function () {
	title = prompt("Как называется ваш проект?", "Калькулятор вёрстки");
	screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные")

	do {
		screenPrice = +prompt("Сколько будет стоить данная работа?", 10000)
	} while (!isNumber(screenPrice))

	adaptive = confirm("Нужен ли адаптив на сайте?")
}

const showTypeOf = function (variable) {
	console.log(variable, typeof variable);
}

const getRollbackMessage = function (price) {
	console.log("price", price);
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
	for (let i = 0; i < 2; i++) {
		if (i === 0) {
			service1 = prompt(ask1)
			do {
				servicePrice1 = +prompt(ask2)
			} while (!isNumber(servicePrice1))

		} else if (i === 1) {
			service2 = prompt(ask1)
			do {
				servicePrice2 = +prompt(ask2)
			} while (!isNumber(servicePrice2))

		}
	}
	return servicePrice1 + servicePrice2
}

function getFullPrice() {
	return screenPrice + allServicePrices
}

const getTitle = function (title) {
	title = title.trim();
	return title[0].toUpperCase() + title.substring(1).toLowerCase();
}

const getServicePercentPrices = function () {
	return fullPrice - Math.ceil(fullPrice * (rollback / 100));
}

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrices = getServicePercentPrices()
title = getTitle(title);
rollbackPrice = getRollbackMessage(fullPrice)

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);
showTypeOf(fullPrice);

console.log(screens);
console.log(rollbackPrice);
console.log("Итоговая стоимость за вычетом отката посреднику:", servicePercentPrices);
