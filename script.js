'use strict';

let title = "myFirstRepo";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 100;
let rollback = 50;
let fullPrice = 200;
let adaptive = true;
let service1;
let service2;
let servicePrice1;
let servicePrice2;
let servicePercentPrice;

console.log(typeof (title));
console.log(typeof (fullPrice));
console.log(typeof (adaptive));
console.log(screens.length);
console.log(screenPrice * 57 + ' RUB');
console.log(fullPrice * 57 + ' RUB');
console.log((screens.toLowerCase().split(", ")));
console.log((fullPrice * rollback) / 100);

alert("Всем привет");

title = prompt("Как называется ваш проект?");
console.log(title);

screens = prompt("Какие типы экранов нужно разработать?");
console.log(screens);

screenPrice = +prompt("Сколько будет стоить данная работа?");
console.log(screenPrice);

adaptive = confirm("Нужен ли адаптив на сайте?");
if(adaptive == true){
    console.log(true);
}else{
    console.log(false);
}
service1 = prompt("Какой дополнительный тип услуги нужен?");
servicePrice1 = +prompt("Сколько это будет стоить?");
service2 = prompt("Какой дополнительный тип услуги нужен?");
servicePrice2 = +prompt("Сколько это будет стоить?");
fullPrice = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);
console.log(fullPrice);

servicePercentPrice = fullPrice - fullPrice * rollback / 100;
console.log(Math.ceil(servicePercentPrice));
if (fullPrice >= 30000) {
    console.log("Вам предоставляется скидка 10%");
} else if (fullPrice >= 15000) {
    console.log("Вам предоставляется скидка 5%");
} else if ( fullPrice >= 0) {
    console.log("Скидка не предусмотрена");
} else {
    console.log("Что то пошло не так");
}