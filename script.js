'use strict';
const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: [],

    start: function () {
        appData.asking();
        appData.addPrices();
        appData.getServicePercentPrice();
        appData.getTitle(appData.title);
        appData.logger();
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },
    asking: function () {

        do {
            appData.title = prompt("Как называется ваш проект?");
        } while (appData.isNumber(appData.title));

        for (let i = 0; i < 2; i++) {
            let name;
            let price = 0;

            do {
                appData.name = prompt("Какие типы экранов нужно разработать?");
            } while (appData.isNumber(appData.name));

            do {
                price = +prompt("Сколько будет стоить данная работа?");
            } while (!appData.isNumber(price));

            appData.screens.push({ id: i, name: name, price: price });
        }

        for (let i = 0; i < 2; i++) {
            let name;
            let price = 0;

            do {
                appData.name = prompt("Какой дополнительный тип услуги нужен?");
            } while (appData.isNumber(appData.name));

            do {
                price = +prompt("Сколько это будет стоить?");
            } while (!appData.isNumber(price));

            appData.services.push({ id: i, name: name, price: price });
        }
        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    addPrices: function () {
        
        appData.screenPrice = appData.screens.reduce(function(sum,item){
           return sum + item.price;
        }, 0);

        for (let service of appData.services) {
            appData.allServicePrices += +service.price;
        }
        appData.fullPrice = appData.screenPrice + appData.allServicePrices;
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
    getTitle: function (str) {
        const formattedStr = str.trim().toLowerCase();
        appData.title = formattedStr[0].toLocaleUpperCase() + formattedStr.slice(1);
    },
    getServicePercentPrice: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    logger: function () {
        for (let key in appData) {
            console.log("Ключ:" + key + " " + "Значение:" + appData[key]);
        }
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
        console.log(appData.services);
    }
};
appData.start();