'use scrict';

function counter(n) {
	return function (x) {
		return x + n
	}
}

let sum = counter(1)
// console.log(sum);
console.log(sum(15));
console.log(sum(20));