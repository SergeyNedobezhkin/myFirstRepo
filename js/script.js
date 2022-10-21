// 'use strict';
// const title = document.getElementsByTagName('h1')[0];
// const [startBtn, resetBtn] = document.getElementsByClassName('handler_btn');
// const buttonPlus = document.querySelector('.screen-btn');
// const buttonRange = document.querySelector('.rollback input');
// const buttonServicePercentPrice = document.getElementById('total-count-rollback');
// const buttonRangeSpan = document.querySelector('.rollback .range-value');
// const buttonCountScreens = document.getElementById('total-count');
// const otherItemsPercent = document.querySelectorAll('.other-items.percent');
// const otherItemsNumber = document.querySelectorAll('.other-items.number');
// const inputTypeRange = document.querySelector('.rollback  input');
// const inputTypeRangeValue = document.querySelector('.rollback span.range-value');
// const [total, totalCount, totalCountOther, fullTotalCount, totalCountRollback]
//     = document.getElementsByClassName('total-input');
// const screens = document.getElementsByClassName('screen');
// const cloneScreen = screens[0].cloneNode(true);

// const appData = {
//     title: '',
//     screens: [],
//     screenPrice: 0,
//     adaptive: true,
//     rollback: 10,
//     servicePricesPersent: 0,
//     servicePricesNumber: 0,
//     fullPrice: 0,
//     servicePercentPrice: 0,
//     servicesPercent: {},
//     servicesNumber: {},
//     init: function () {
//         this.addTitile();

//         startBtn.addEventListener("click", (event) => {
//             event.preventDefault();

//             document.querySelectorAll('input[type=text],select')
//                 .forEach(elem => elem.setAttribute("disabled", "true"));
//             this.start();
//             startBtn.style.display = 'none';
//             resetBtn.style.display = '';
//         });

//         // resetBtn.addEventListener("click", (event) => {
//         //     event.preventDefault();
//         //     console.log("hello");
//         //     // this.start();
//         // });

//         buttonPlus.addEventListener("click", this.addScreenBlock);
//         const changeRange = () => {
//             buttonRangeSpan.textContent = buttonRange.value + '%';
//             this.rollback = buttonRange.value;

//         };
//         buttonRange.addEventListener("input", changeRange);
//     },
//     addTitile: function () {
//         document.title = title.textContent;
//     },
//     start: function () {
//         for (const screen of screens) {
//             const select = screen.querySelector('select');
//             const input = screen.querySelector('input');



//             if (!select.value || !input.value) {
//                 return alert('Заполните все поля');
//             }
//         }
//         this.addScreens();
//         this.addServices();
//         this.addPrices();
//         // this.logger();
//         this.showResult();

//     },
//     showResult: function () {
//         total.value = this.screenPrice;
//         totalCountOther.value = this.servicePricesPersent + this.servicePricesNumber;
//         fullTotalCount.value = this.fullPrice;
//     },
//     addScreens: function () {
//         [...screens].forEach((screen, index) => {
//             const select = screen.querySelector('select');
//             const input = screen.querySelector('input');
//             const selectName = select.options[select.selectedIndex].textContent;

//             this.screens.push({
//                 id: index,
//                 name: selectName,
//                 price: +select.value * +input.value,
//                 count: +input.value
//             });
//         });
//         totalCount.value = this.screens.reduce((sum, item) => {
//             return sum + item.count;
//         }, 0);
//     },
//     addServices: function () {
//         otherItemsPercent.forEach((item) => {
//             const check = item.querySelector('input[type=checkbox]');
//             const label = item.querySelector('label');
//             const input = item.querySelector('input[type=text]');

//             if (check.checked) {
//                 appData.servicesPercent[label.textContent] = +input.value;
//             }
//         });
//         otherItemsNumber.forEach((item) => {
//             const check = item.querySelector('input[type=checkbox]');
//             const label = item.querySelector('label');
//             const input = item.querySelector('input[type=text]');

//             if (check.checked) {
//                 appData.servicesNumber[label.textContent] = +input.value;

//             }
//         });
//     },
//     addScreenBlock: function () {
//         screens[screens.length - 1].after(cloneScreen.cloneNode(true));
//     },
//     addPrices: function () {
//         for (let screen of this.screens) {
//             this.screenPrice += +screen.price;
//         }

//         for (let key in this.servicesNumber) {
//             this.servicePricesNumber += this.servicesNumber[key];
//         }

//         for (let key in this.servicesPercent) {
//             this.servicePricesPersent += this.screenPrice * (this.servicesPercent[key] / 100);

//         }
//         this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPersent;
//         this.servicePercentPrice = this.fullPrice - (this.fullPrice * (this.rollback / 100));
//         buttonServicePercentPrice.value = this.servicePercentPrice;
//     },
//     getRollbackMessage: function (price) {
//         if (price >= 30000) {
//             return "Вам предоставляется скидка 10%";
//         } else if (price >= 15000) {
//             return "Вам предоставляется скидка 5%";
//         } else if (price >= 0) {
//             return "Скидка не предусмотрена";
//         } else {
//             return "Что то пошло не так";
//         }
//     },
//     logger: function () {
//         for (let key in appData) {
//             console.log("Ключ:" + key + " " + "Значение:" + appData[key]);
//         }
//     }
// };
// appData.init();



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
const otherItems = document.querySelectorAll('.other-items');
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
    rollback: 0,
    servicePricesPersent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    init: function () {
        this.addTitile();

        startBtn.addEventListener("click", (event) => {
            event.preventDefault();
            document.querySelectorAll('input,select')
                .forEach(elem => elem.setAttribute("disabled", "true"));
            this.start();
        });

        resetBtn.addEventListener("click", (event) => {
            event.preventDefault();
            document.querySelectorAll('input,select')
                .forEach(elem => elem.removeAttribute("disabled"));
            this.reset();
        });

        buttonPlus.addEventListener("click", this.addScreenBlock);

        const changeRange = () => {
            buttonRangeSpan.textContent = buttonRange.value + '%';
            this.rollback = buttonRange.value;
        };
        buttonRange.addEventListener("input", changeRange);
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
                return;
            }
        }
        this.addScreens();
        this.addServices();
        this.addPrices();
        // this.logger();
        this.showResult();
    },
    reset: function () {
        total.value = '0';
        totalCount.value = '0';
        totalCountOther.value = '0';
        fullTotalCount.value = '0';
        totalCountRollback.value = '0';
        buttonRange.value = '0';
        buttonRangeSpan.textContent = '0' + '%';

        for (const screen of screens) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            console.log(screens);
            if (select.value || input.value) {
                select.value = '';
                input.value = '';
            }
            for (let i = 1; i < screens.length; i++) {

                screens[i].remove();
            }
        }
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
        startBtn.style.display = '';
        resetBtn.style.display = 'none';
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
                appData.servicesPercent[label.textContent] = +input.value;
            }
        });
        otherItemsNumber.forEach((item) => {
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
        for (let key in appData) {
            console.log("Ключ:" + key + " " + "Значение:" + appData[key]);
        }
    }
};
appData.init();