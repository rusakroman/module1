"use strict";


const cart = {
  items: [],
  totalPrice: 30,
  count: 0,

  //тут нет вопросов
  getTotalPrice() {
    return this.totalPrice;
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
    return this.items.reduce((acc, item) => acc + (item.productPrice * item.productCount), 0);
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
    cart.calculateItemPrice();
    console.log('Общая стоимость корзины :>>>', this.totalPrice);
  },

}

cart.add('Macbook', 150000, 1)
cart.add('Apple watch', 80000, 3)
cart.add('Наушники Apple', 36000, 5)

console.log(cart.items);


const res = cart.calculateItemPrice();
console.log(res);

// cart.clear();
// console.log(cart.items);

cart.print();








