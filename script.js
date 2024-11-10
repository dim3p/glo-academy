'use scrict';

let a = 5

function one(c, d) {
	// LexicalEnvironment = {c: 3, d: undefined}
	let a = 10
	// LexicalEnvironment = {a: 10, c: 3, d: undefined}
	console.log(a, c, d);

	function two() {
		// LexicalEnvironment = {} пустое
		// Scope = {a: 10, c: 3, d: undefined}
		console.log(a, c);
	}
	two()

}

one(3)