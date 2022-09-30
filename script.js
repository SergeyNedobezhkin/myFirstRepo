let title = "myFirstRepo";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 100;
let rollback = 50;
let fullPrice = 200;
let adaptive = true;

console.log(typeof(title));
console.log(typeof(fullPrice));
console.log(typeof(adaptive));
console.log(screens.length);

console.log((screenPrice + ' USD') + ', ' + (screenPrice * 57 + ' RUB') + 
', ' + (screenPrice * 37 + ' UAH') + ', ' + (screenPrice * 7 + ' CNY'));

console.log((fullPrice + ' USD') + ', ' + (fullPrice * 57 + ' RUB') + 
', ' + (fullPrice * 37 + ' UAH') + ', ' + (fullPrice * 7 + ' CNY'));


console.log((screens.toLowerCase().split(", ")));
console.log((fullPrice * rollback)/100);



alert("Всем привет");

console.log("Сообщение выведено");