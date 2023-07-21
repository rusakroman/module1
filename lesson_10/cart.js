"use strict";


const cart = {
  items: [],
  totalPrice: 30,
  count: 0,

  // Чтобы это предотвратить, необходимо свойство totalPrice сделать геттером который будет возвращать результат вызова метода calculateItemPrice
  get totalPrice() {
    return this.totalPrice = this.calculateItemPrice();
  },


  add(productName, productPrice, productCount) {

    const product = {
      productName: productName,
      productPrice: productPrice,
      productCount: productCount
    }

    cart.items.push(product);
    this.calculateItemPrice();
    this.increaseCount();
  },

  calculateItemPrice() {

    return this.totalPrice = this.items.reduce((acc, item) => acc + (item.productPrice * item.productCount), 0);
  },


  // тут вроде нет вопросов
  increaseCount(number) {
    this.count = this.count + number;
  },


  clear() {
    this.items = [];
  },

  print() {
    console.log(JSON.stringify(this.items));
    // console.log([this.items]);
    // cart.calculateItemPrice(); ???????????????тут тоже убираем его??????????????
    console.log('Общая стоимость корзины :>>>', this.totalPrice);
  },

}

cart.add('Macbook', 150000, 1)
cart.add('Apple watch', 80000, 3)
cart.add('Наушники Apple', 36000, 5)



console.log(cart.items);

// cart.totalPrice = 20011; //не влияет на вывод. в принте запускается метод increaseCount который возвращает totalPrice по формуле.

// const res = cart.calculateItemPrice();
// console.log(res);

cart.print();











// Продолжим работу с cart.js

// Обнаружена уязвимость в нашем функционале

// Если после добавления последнего товара присвоить к totalPrice любое значение,

//   например

// cart.totalPrice = 10;

// то при выводе print() общая стоимость корзины будет равна 10



// Чтобы это предотвратить, необходимо свойство totalPrice сделать геттером который будет возвращать результат вызова метода calculateItemPrice



// метод getTotalPrice больше не нужен



// calculateItemPrice переделать таким образом, чтобы сумму он возвращал, а не записывал в свойство totalPrice



// Вызов метода calculateItemPrice оставить только у геттера totalPrice

