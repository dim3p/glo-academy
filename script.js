// lesson02
// Step 1
let title = 'Lesson02';
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 100500;
let rollback = 50;
let fullPrice = 350000;
let adaptive = true;

// Step 2
console.log("Type title:", typeof title);
console.log("Type fullPrice:", typeof fullPrice);
console.log("Type adaptive:", typeof adaptive);

console.log("length of variable 'screens':", screens.length);

console.log("Стоимость верстки экранов", screenPrice, "рублей/долларов/гривен/юани");
console.log("Стоимость разработки сайта", fullPrice, "рублей/долларов/гривен/юани");

console.log(screens.toLowerCase().split(/\s*,\s*/)); // разделитель регулярное выражение

console.log("Процент отката посреднику за работу:", fullPrice * (rollback / 100));