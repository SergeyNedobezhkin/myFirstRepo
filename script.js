'use strict';

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let rollback = 10;
let fullPrice = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);
let servicePercentPrice = fullPrice - (fullPrice * (rollback / 100));


if (adaptive == true) {
    console.log(true);
} else {
    console.log(false);
}

if (fullPrice >= 30000) {
    console.log("Вам предоставляется скидка 10%");
} else if (fullPrice >= 15000) {
    console.log("Вам предоставляется скидка 5%");
} else if (fullPrice >= 0) {
    console.log("Скидка не предусмотрена");
} else {
    console.log("Что то пошло не так");
}

console.log(title);
console.log(screens);
console.log((screens.toLowerCase().split(", ")));
console.log(typeof (title));
console.log(typeof (fullPrice));
console.log(typeof (adaptive));
console.log(screens.length);
console.log(screenPrice * 57 + ' RUB');
console.log(fullPrice * 57 + ' RUB');
console.log((fullPrice * rollback) / 100);
console.log(Math.ceil(servicePercentPrice));
console.log(screenPrice);
console.log(fullPrice);


