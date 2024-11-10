'use scrict';

function one(x) {
	function two() {
		console.log(x);
		console.dir(two);
	}

	two()
}

one(3)