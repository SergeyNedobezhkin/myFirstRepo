'use strict';
const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },
    asking: function () {
        appData.title = prompt("Как называется ваш проект?", "Project");
        appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");
        do {
            appData.screenPrice = +prompt("Сколько будет стоить данная работа?");
        } while (!appData.isNumber(appData.screenPrice));
        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    getAllServicePrices: function () {
        let sum = 0;
        for (let i = 0; i < 2; i++) {
            let answer = 0;
            if (i === 0) {
                appData.service1 = prompt("Какой дополнительный тип услуги нужен?", "service1");
            } else if (i === 1) {
                appData.service2 = prompt("Какой дополнительный тип услуги нужен?", "service2");
            }
            answer = +prompt("Сколько это будет стоить?");
            while (!appData.isNumber(answer)) {
                answer = +prompt("Сколько это будет стоить?");
            }
            sum += answer;
        }
        return sum;
    },
    getRollbackMessage: function (price) {
        if (price >= 30000) {
            return "Вам предоставляется скидка 10%";
        } else if (price >= 15000) {
            return "Вам предоставляется скидка 5%";
        } else if (price >= 0) {
            return "Скидка не предусмотрена";
        } else {
            return "Что то пошло не так";
        }
    },
    getFullPrice: function () {
        return appData.screenPrice + appData.allServicePrices;
    },
    getTitle: function (str) {
        const formattedStr = str.trim().toLowerCase();
        return formattedStr[0].toLocaleUpperCase() + formattedStr.slice(1);
    },
    getServicePercentPrice: function () {
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    start: function () {
        appData.asking();
        appData.isNumber();
        appData.getRollbackMessage();
        appData.title = appData.getTitle(appData.title);
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice();
        appData.servicePercentPrice = appData.getServicePercentPrice();
        appData.logger();

    },
    logger: function () {
        for (let key in appData) {
            console.log("Ключ:" + key + " " + "Значение:" + appData[key]);
        }
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
    }
};
appData.start();










