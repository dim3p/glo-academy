'use scrict';

function one(x) {
	function two() {
		const a = +prompt("Введите число")
		x--

		console.log(a);
		console.log(x);
		if (a !== x) {
			two()
		}
	}

	two()
}

one(10)