const books = [
	{ id: 0, name: 'Дорога домой', author: 'Виталий Зыков', price: 1200 },
	{ id: 1, name: 'Война за выживание', author: 'Виталий Зыков', price: 1500 },
	{ id: 2, name: 'Мир бесчисленных островов', author: 'Виталий Зыков', price: 1300 },
	{ id: 3, name: 'Далекая страна', author: 'Алекс Кош', price: 950 },
	{ id: 4, name: 'Адреналин', author: 'Алекс Кош', price: 1650 },
]

// Добавление и удаление элементов
// 1) CONCAT arr.concat(arg1, arg2, ...)
// const newArray = books.concat({id: 5, name: 'Школа Пепла', author: 'Виталий Зыков', price: 1980})

// 2) arr.slice([start], [end])
// const newArray = books.slice(0, 3) 

// 3) arr.splice(index, deleteCount, elements)
// универсальный. умеет добавлять и удалять. 
// не возвращает новый массив! меняет исходный
// index - c какого индекса удалять
// deleteCount -  сколько элементов удалять
// elements - добавляемые элементы, можно несколько

// books.splice(2, 3)
// books.splice(2, 3, {id: 5, name: 'Школа Пепла', author: 'Виталий Зыков', price: 1980})
// console.log(newArray)

// Поиск и удаление элементов
// 1) FIND возвращает целый объект по заданному условию
//let result = arr.find(function(item, index, array) {
// если true - возвращает текущий элемент
// если все итерации оказались ложными возвращает undefined
// item - очередной элемент
// index - его индекс
// array - сам массив
// });

// let result = books.find(function(item, index, array) {
// 	return item.name === 'Война за выживание'
// });

// console.log(result)


// result = books.find(function(item, index, array) {
// 	return item.id === 3
// });

// console.log(result)

// // метод findIndex возвращает только индекс
// result = books.findIndex(function(item, index, array) {
// 	return item.id === 3
// });

// console.log(result)

// Методы перебора и преобразования массивов, для приведения массивов данных в нужный вид
// 1) forEach() изменяет исходный массив!
// arr.forEach(function(item, index, array) {
// 	... делает что-то с item});

// books.forEach(function(item, index, array) {
// 	item.price = item.price + 'руб'
// });

// console.log(books);


// 2) map() создаёт новый массив!
// arr.map(function(item, index, array) {
// 		возвращается новое значение вместо элемента
// });

const newArray = books.map(function (item, index, array) {
	return item
});

console.log(newArray);




// 3) filter()
// arr.filter(function(item, index, array) {
// 		если true - элемент добавляется к результату и перебор продолжается
// 		возвращается пустой массив в случае если ничего не найдено
// });