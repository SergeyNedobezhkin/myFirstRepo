'use strict';
// Блок объявления переменных

let title = prompt("Как называется ваш проект?", "Project");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", 15000);
let adaptive = confirm("Нужен ли адаптив на сайте?");


let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");

let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;

// Блок функций

const getAllServicePrices = function () {
    return servicePrice1 + servicePrice2;
};

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return "Вам предоставляется скидка 10%";
    } else if (price >= 15000) {
        return "Вам предоставляется скидка 5%";
    } else if (price >= 0) {
        return "Скидка не предусмотрена";
    } else {
        return "Что то пошло не так";
    }
};

const getFullPrice = function () {
    return screenPrice + allServicePrices;
};

const getTitle = function () {
    let varible = title.trim().toLowerCase().substring(1);
    let elem = title.trim().substring(0, 1).toLocaleUpperCase() + varible;
    return elem;
};

const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (rollback / 100));
};

if (adaptive == true) {
    console.log(true);
} else {
    console.log(false);
}

// Блок вызова

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log(typeof (title));
console.log(typeof (adaptive));
console.log(typeof (screenPrice));
console.log(screens.length);
console.log(Math.ceil(servicePercentPrice));
console.log('"Стоимость верстки экранов"' + screenPrice + ' рублей' + 'и' + '" Стоимость разработки сайта"'
    + fullPrice + " рублей");
console.log(screens);
console.log((screens.toLowerCase().split(", ")));






// console.log(title);
// console.log(typeof (fullPrice));
// // console.log((fullPrice * rollback) / 100);
// console.log(fullPrice = getFullPrice(screenPrice, allServicePrices));