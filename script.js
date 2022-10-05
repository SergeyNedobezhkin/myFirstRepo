'use strict';
// Блок объявления переменных
let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");

let rollback = 10;
let allServicePrices;
let fullPrice = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);
let servicePercentPrice = fullPrice - (fullPrice * (rollback / 100));


// Блок функций

function getAllServicePrices() {
    allServicePrices = servicePrice1 + servicePrice2;
    console.log(allServicePrices);
}
getAllServicePrices(servicePrice1, servicePrice2);

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

const getServicePercentPrices = function (a) {
    return servicePercentPrice;
};

if (adaptive == true) {
    console.log(true);
} else {
    console.log(false);
}

// Блок вызова

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);
getAllServicePrices();

console.log(getRollbackMessage(fullPrice));
console.log(typeof (title));
console.log(typeof (adaptive));
console.log(typeof (screenPrice));
console.log(screens.length);
console.log(Math.ceil(servicePercentPrice));

console.log(getTitle(title));
console.log(screens);
console.log((screens.toLowerCase().split(", ")));
console.log(getServicePercentPrices());
console.log('"Стоимость верстки экранов"' + screenPrice + ' рублей' + 'и' + '" Стоимость разработки сайта"'
    + fullPrice + " рублей");


// console.log(title);
// console.log(typeof (fullPrice));
// // console.log((fullPrice * rollback) / 100);
// console.log(fullPrice = getFullPrice(screenPrice, allServicePrices));


