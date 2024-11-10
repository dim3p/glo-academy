// Lesson 06
'use scrict';

function numRandomizer(x) {
	console.log(x);
	let msg = "Угадай число от 1 до 100"

	function guessing(msg) {
		let num = prompt(msg)
		console.log(num)
		if (num === null) {
			alert("Игра окончена")
			return
		}
		console.log(!isNaN(parseFloat(num)) && !isFinite(num))
		if (isNaN(parseFloat(num)) && !isFinite(num)) {
			guessing("Введи число!")
		} else if (Number(num) === x) {
			alert("Поздравляю, Вы угадали!!!")
			return
		} else if (Number(num) > x) {
			guessing("Загаданное число МЕНЬШЕ, введите другое число!")
		} else if (Number(num) < x) {
			guessing("Загаданное число БОЛЬШЕ, введите другое число!")
		}
	}

	guessing(msg)
}

numRandomizer(Math.round(Math.random() * 100))
