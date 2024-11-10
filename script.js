'use strict';
// lesson07

const appData = {
	title: '',
	screens: '',
	screenPrice: 0,
	adaptive: true,
	rollback: 50,
	service1: '',
	service2: '',
	servicePrice1: 0,
	servicePrice2: 0,
	ask1: "Какой дополнительный тип услуги нужен?",
	ask2: "Сколько это будет стоить?",
	fullPrice: 0,
	servicePrices: 0,
	servicePercentPrices: 0,
	allServicePrices: 0,
	rollbackPrice: 0,
	asking: function () {
		appData.title = prompt("Как называется ваш проект?", "Калькулятор вёрстки");
		appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные")

		do {
			appData.screenPrice = +prompt("Сколько будет стоить данная работа?", 10000)
		} while (!appData.isNumber(appData.screenPrice))

		appData.adaptive = confirm("Нужен ли адаптив на сайте?")
	},
	isNumber: function (num) {
		return !isNaN(parseFloat(num)) && isFinite(num)
	},
	getRollbackMessage: function (price) {
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
	},
	getAllServicePrices: function () {
		for (let i = 0; i < 2; i++) {
			if (i === 0) {
				appData.service1 = prompt(appData.ask1)
				do {
					appData.servicePrice1 = +prompt(appData.ask2)
				} while (!appData.isNumber(appData.servicePrice1))

			} else if (i === 1) {
				appData.service2 = prompt(appData.ask1)
				do {
					appData.servicePrice2 = +prompt(appData.ask2)
				} while (!appData.isNumber(appData.servicePrice2))

			}
		}
		return appData.servicePrice1 + appData.servicePrice2
	},
	getFullPrice: function () {
		return appData.screenPrice + appData.allServicePrices
	},
	getTitle: function (title) {
		title = title.trim();
		return title[0].toUpperCase() + title.substring(1).toLowerCase();
	},
	getServicePercentPrices: function () {
		return appData.fullPrice - Math.ceil(appData.fullPrice * (appData.rollback / 100));
	},
	logger: function () {
		console.log(appData.title);
		console.log(appData.fullPrice);
		console.log(appData.allServicePrices);
		console.log(appData.servicePercentPrices);
		console.log(appData.rollbackPrice);
		console.log("Свойства и методы объекта appData:")
		for (let key in appData) {
			console.log(key);
		}
	},
	start: function () {
		appData.asking();
		appData.allServicePrices = appData.getAllServicePrices();
		appData.fullPrice = appData.getFullPrice();
		appData.servicePercentPrices = appData.getServicePercentPrices();
		appData.title = appData.getTitle(appData.title);
		appData.rollbackPrice = appData.getRollbackMessage(appData.fullPrice);
		appData.logger()
	}

}


appData.start();

