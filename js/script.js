'use strict';
const title = document.getElementsByTagName('h1')[0];
const [startBtn, resetBtn] = document.getElementsByClassName('handler_btn');
const buttonPlus = document.querySelector('.screen-btn');
const buttonRange = document.querySelector('.rollback input');

const totalInput = document.getElementsByClassName('total-input');

const total = document.getElementById('total');
const totalCount = document.getElementById('total-count');
const totalCountOther = document.getElementById('total-count-other');
const fullTotalCount = document.getElementById('total-full-count');
const buttonServicePercentPrice = document.getElementById('total-count-rollback');


const buttonRangeSpan = document.querySelector('.rollback .range-value');
const buttonCountScreens = document.getElementById('total-count');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');
const otherItems = document.querySelectorAll('.other-items');
const inputTypeRange = document.querySelector('.rollback  input');
const inputTypeRangeValue = document.querySelector('.rollback span.range-value');


const screens = document.getElementsByClassName('screen');
const cloneScreen = screens[0].cloneNode(true);

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 0,
    servicePricesPersent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    init: function () {
        this.addTitile();
        startBtn.addEventListener("click", () => {
            this.start();
        });

        resetBtn.addEventListener("click", () => {
            this.reset();
        });

        buttonPlus.addEventListener("click", this.addScreenBlock);

        const changeRange = () => {
            buttonRangeSpan.textContent = buttonRange.value + '%';
            this.rollback = buttonRange.value;
        };
        buttonRange.addEventListener("input", changeRange);
        console.log(this);
    },
    addTitile: function () {
        document.title = title.textContent;
    },
    start: function () {
        startBtn.style.display = 'none';
        resetBtn.style.display = '';

        for (const screen of screens) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');

            if (!select.value || !input.value) {
                alert('Заполните все поля');
                return this.reset();
            }
        }
        this.addScreens();
        this.addServices();
        this.addPrices();
        // this.logger();
        this.showResult();

        this.blockInput();

    },
    blockInput: (itemDisabled = true) => {
        document.querySelectorAll
            ('.screen input[type=text],select,.screen-btn,.element input[type=checkbox],.rollback input[type=range]').
            forEach(item => {
                item.disabled = itemDisabled;
            });
    },
    reset: function () {
        [...screens].forEach(() => {
            while (screens.length > 1) {
                screens[0].remove();
            }
            screens[0].querySelector('select').value = '';
            screens[0].querySelector('input').value = '';
        });

        otherItemsPercent.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]');
            if (check.checked) {
                check.checked = '';
            }
        });

        otherItemsNumber.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]');
            if (check.checked) {
                check.checked = '';
            }
        });

        [...totalInput].forEach(function () {
            totalInput[0].value = 0;
            totalInput[1].value = 0;
            totalInput[2].value = 0;
            totalInput[3].value = 0;
            totalInput[4].value = 0;
            // console.log(totalInput[0].value);
        });

        buttonRange.value = 0;
        buttonRangeSpan.textContent = 0 + '%';

        startBtn.style.display = '';
        resetBtn.style.display = 'none';

        this.blockInput(false);

        console.log(this);
    },
    showResult: function () {
        total.value = this.screenPrice;
        totalCountOther.value = this.servicePricesPersent + this.servicePricesNumber;
        fullTotalCount.value = this.fullPrice;
    },
    addScreens: function () {
        [...screens].forEach((screen, index) => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;

            this.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                count: +input.value
            });
        });
        totalCount.value = this.screens.reduce((sum, item) => {
            return sum + item.count;
        }, 0);
    },
    addServices: function () {
        otherItemsPercent.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                this.servicesPercent[label.textContent] = +input.value;
            }
        });
        otherItemsNumber.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                this.servicesNumber[label.textContent] = +input.value;
            }
        });
    },
    addScreenBlock: function () {
        screens[screens.length - 1].after(cloneScreen.cloneNode(true));
    },
    addPrices: function () {
        for (let screen of this.screens) {
            this.screenPrice += +screen.price;
        }

        for (let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key];
        }

        for (let key in this.servicesPercent) {
            this.servicePricesPersent += this.screenPrice * (this.servicesPercent[key] / 100);
        }

        this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPersent;

        this.servicePercentPrice = this.fullPrice - (this.fullPrice * (this.rollback / 100));
        buttonServicePercentPrice.value = this.servicePercentPrice;
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
        for (let key in this) {
            console.log("Ключ:" + key + " " + "Значение:" + this[key]);
        }
    }
};
appData.init();