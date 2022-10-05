'use strict';
// Блок объявления переменных
let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

// Блок функций
const isNumber = function (num, sum) {
    return !isNaN(parseFloat(num, sum)) && isFinite(num, sum);
};

const asking = function () {
    title = prompt("Как называется ваш проект?", "Project");
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");
    do {
        screenPrice = +prompt("Сколько будет стоить данная работа?");
    } while (!isNumber(screenPrice));
    // screenPrice = prompt("Сколько будет стоить данная работа?");
    adaptive = confirm("Нужен ли адаптив на сайте?");
};

let sum;
const getAllServicePrices = function () {
    sum = 0;
    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?");
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?");
        }
        sum += +prompt("Сколько это будет стоить?");
        while (!isNumber(sum)) {
            sum = prompt("Сколько это будет стоить?");
        }
    }
    return sum;
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

// Блок вызова

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);
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