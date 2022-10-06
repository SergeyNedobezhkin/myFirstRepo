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
const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
    title = prompt("Как называется ваш проект?", "Project");
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");
    do {
        screenPrice = +prompt("Сколько будет стоить данная работа?");
    } while (!isNumber(screenPrice));
    adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        let answer = 0;
        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?", "service1");

        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?", "service2");
        }
        answer = +prompt("Сколько это будет стоить?");
        while (!isNumber(answer)) {
            answer = +prompt("Сколько это будет стоить?");
        }
        sum += answer;
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


const getTitle = function (str) {
    const formattedStr = str.trim().toLowerCase();
    return formattedStr[0].toLocaleUpperCase() + formattedStr.slice(1);
};

const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (rollback / 100));
};

// Блок вызова
asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle(title);

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
