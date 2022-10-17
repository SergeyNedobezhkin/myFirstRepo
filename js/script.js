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
const screens = document.getElementsByClassName('screen');
const cloneScreen = screens[0].cloneNode(true);

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
        for (const screen of screens) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');

            if (!select.value || !input.value) return alert('Заполните все поля');
        }
        appData.addScreens();
        appData.addServices();
        appData.addPrices();
        // appData.logger();
        appData.showResult();
    },
    showResult: function () {
        total.value = appData.screenPrice;
        totalCountOther.value = appData.servicePricesPersent + appData.servicePricesNumber;
        fullTotalCount.value = appData.fullPrice;
    },
    addScreens: function () {
        [...screens].forEach((screen, index) => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;

            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                count: +input.value
            });
        });
        totalCount.value = appData.screens.reduce(function (sum, item) {
            return sum + item.count;
        }, 0);
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
        screens[screens.length - 1].after(cloneScreen.cloneNode(true));
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
    logger: function () {
        for (let key in appData) {
            console.log("Ключ:" + key + " " + "Значение:" + appData[key]);
        }
    }
};
appData.init();