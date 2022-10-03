'use strict';

let title = "myFirstRepo";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 100;
let rollback = 50;
let fullPrice = 200;
let adaptive = true;

console.log(typeof (title));
console.log(typeof (fullPrice));
console.log(typeof (adaptive));
console.log(screens.length);

console.log((screenPrice + ' USD') + ', ' + (screenPrice * 57 + ' RUB') +
    ', ' + (screenPrice * 37 + ' UAH') + ', ' + (screenPrice * 7 + ' CNY'));

console.log((fullPrice + ' USD') + ', ' + (fullPrice * 57 + ' RUB') +
    ', ' + (fullPrice * 37 + ' UAH') + ', ' + (fullPrice * 7 + ' CNY'));

console.log((screens.toLowerCase().split(", ")));
console.log((fullPrice * rollback) / 100);

alert("Всем привет");

console.log("Сообщение выведено");

title = prompt("Как называется ваш проект?");
alert(title);

screens = prompt("Какие типы экранов нужно разработать? пример: Простые, Сложные, Интерактивные");
switch (screens) {
    case "Простой":
    case "Простые":
    case "простой":
    case "простые":
        alert(screens);
        break;
    case "Сложные":
    case "Сложный":
    case "сложные":
    case "сложный":
        alert(screens);
        break;
    case "Интерактивные":
    case "Интерактивный":
    case "интерактивные":
    case "интерактивный":
        alert(screens);
        break;
    default:
        alert("Ответ не верный");
}

screenPrice = prompt("Сколько будет стоить данная работа?");
alert(parseFloat(screenPrice));


adaptive = prompt("Нужен ли адаптив на сайте?");

switch (adaptive) {
    case "Да":
    case "Yes":
        alert(true);
        break;
    case "да":
    case "yes":
        alert(true);
        break;
    case "Нет":
    case "No":
        alert(false);
        break;
    case "нет":
    case "no":
        alert(false);
        break;
    default:
        alert(false);
}

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");

let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");

fullPrice = screenPrice + servicePrice1 + servicePrice2;

let servicePercentPrice = fullPrice - ((fullPrice * rollback) / 100);
console.log(Math.ceil(servicePercentPrice));

if (fullPrice > 30000 || fullPrice === 30000) {
    let result1 = fullPrice - (fullPrice * 0.10);
    console.log("Вам предоставляется скидка 10%. Итого: " + result1);

} if (fullPrice > 15000 && fullPrice < 30000) {
    let result2 = fullPrice - (fullPrice * 0.05);
    console.log("Вам предоставляется скидка 5%. Итого: " + result2);

} if (fullPrice < 15000 && fullPrice >= 0) {
    console.log("Скидка не предусмотрена");

} if (fullPrice < 0) {
    console.log("Что то пошло не так");
}
