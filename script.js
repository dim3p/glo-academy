'use scrict';

function pathGenerator(url) {
	return function (imageName) {
		return url + imageName
	}
}

let urlToIcon = pathGenerator('http://mydomain.ru/assets/icons/')
let urlToImages = pathGenerator('http://mydomain.ru/assets/images/')

console.log(urlToIcon('clock.svg'));
console.log(urlToImages('man.png'));
