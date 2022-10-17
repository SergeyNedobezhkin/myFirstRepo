'use strict';
const title = document.getElementsByTagName('h1')[0];
const [startBtn, resetBtn] = document.getElementsByClassName('handler_btn');
const buttonPlus = document.querySelector('.screen-btn');
const buttonRange = document.querySelector('.rollback input');
const buttonServicePercentPrice = document.getElementById('total-count-rollback');
const buttonRangeSpan = document.querySelector('.rollback .range-value');
const buttonCountScreens = document.getElementById('total-count');

const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');
const inputTypeRange = document.querySelector('.rollback  input');
const inputTypeRangeValue = document.querySelector('.rollback span.range-value');
const [total, totalCount, totalCountOther, fullTotalCount, totalCountRollback]
    = document.getElementsByClassName('total-input');
let screens = document.querySelectorAll('.screen');

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    servicePricesPersent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    isError: false,
    init: function () {
        appData.addTitile();

        startBtn.addEventListener("click", (event) => {
            event.preventDefault();
            appData.start();
        });

        buttonPlus.addEventListener("click", appData.addScreenBlock);

        const changeRange = function () {
            buttonRangeSpan.textContent = buttonRange.value + '%';
            appData.rollback = buttonRange.value;
            console.log(appData.rollback);
        };

        buttonRange.addEventListener("input", changeRange);
    },
    addTitile: function () {
        document.title = title.textContent;
    },
    start: function () {
        
        appData.isError = false;

        console.log(appData.screens);
        appData.screens.forEach(function () {
            const select = document.querySelector('select');
            const input = document.querySelector('input');
            if (select.value === "" || input.value === "") {
                appData.isError = true;
            }
        });

        if (appData.isError) {
            return;
        }
        appData.addScreens();

        appData.addServices();
        appData.addPrices();
        // appData.getServicePercentPrice();
        // appData.logger();
        appData.showResult();
    },
    showResult: function () {
        total.value = appData.screenPrice;
        totalCountOther.value = appData.servicePricesPersent + appData.servicePricesNumber;
        fullTotalCount.value = appData.fullPrice;
    },
    addScreens: function () {
        screens = document.querySelectorAll('.screen');

        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;
            const buttonCountScreens = document.getElementById('total-count');

            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                count: +input.value
            });

            const resultCount = appData.screens.reduce(function (sum, item) {
                return sum + item.count;
            }, 0);
            buttonCountScreens.value = resultCount;
        });
    },
    addServices: function () {
        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value;
            }
        });
        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value;
            }
        });
    },
    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreen);
    },

    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key];
        }

        for (let key in appData.servicesPercent) {
            appData.servicePricesPersent += appData.screenPrice * (appData.servicesPercent[key] / 100);

        }

        appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPersent;

        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
        buttonServicePercentPrice.value = appData.servicePercentPrice;
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

    getServicePercentPrice: function () {

        // appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    logger: function () {
        for (let key in appData) {
            console.log("Ключ:" + key + " " + "Значение:" + appData[key]);
        }
        // console.log(appData.fullPrice);
        // console.log(appData.servicePercentPrice);
        // console.log(appData.screens);
        // console.log(appData.services);
    }
};
appData.init();



// console.log(title);
// console.log(start);
// console.log(reset);
// console.log(plus);
// console.log(percent);
// console.log(number);
// console.log(inputTypeRange);
// console.log(inputTypeRangeValue);
// console.log(total, totalCount, totalCountOther, totalFullCount, totalCountRollback);
// console.log(screenBlock);