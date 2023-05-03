'use strict';

const productName = 'printer';
const productCount = 10;
const productCategory = 'HP';
const productPrice = 8000;

const productTotalPrice = productCount * productPrice;

console.log('productName: ', productName);

console.log(productTotalPrice);

const productName2 = 'auto';
const productCount2 = 6;
const productCategory2 = 'Ferrari';
const productPrice2 = 15000000;

const productTotalPrice2 = productCount2 * productPrice2;

console.log('productName2: ', productName2);

console.log(productTotalPrice2);

// Новый блок инструкций!!!!

const productUserName = prompt('Введите наименование товара', '');
const productUserCount = +prompt('Введите количество товара', '');
const productUserPrice = +prompt('Введите Цену товара', '');

console.log(typeof productUserName);
console.log(typeof productUserCount);
console.log(typeof productUserPrice);

const productUserTotalPrice = productUserCount * productUserPrice;

console.log(`На складе ${productUserCount} единицы товара ${productUserName} на сумму ${productUserTotalPrice} деревянных`);

// Задача номер 2



