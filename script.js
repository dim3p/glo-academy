// lesson02
// Step 1
const title = 'Lesson02';
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 100500;
const rollback = 50;
const fullPrice = 350000;
const adaptive = true;

// Step 2
console.log("Type title:", typeof title);
console.log("Type fullPrice:", typeof fullPrice);
console.log("Type adaptive:", typeof adaptive);

console.log("length of variable 'screens':", screens.length);

console.log("Стоимость верстки экранов", screenPrice, "рублей/долларов/гривен/юани");
console.log("Стоимость разработки сайта", fullPrice, "рублей/долларов/гривен/юани");

console.log(screens.toLowerCase().split(/\s*,\s*/)); // разделитель регулярное выражение

console.log("Процент отката посреднику за работу:", fullPrice * (rollback / 100));