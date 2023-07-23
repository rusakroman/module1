'use strict';

const cart = {
  items: [],
  count: 0,

  get totalPrice() {
    return this.calculateItemPrice();
  },


  add(productName, productPrice, productCount) {
    const product = {
      productName,
      productPrice,
      productCount,
    };

    cart.items.push(product);
    this.increaseCount();
  },

  calculateItemPrice() {
    return this.items.reduce((acc, item) => acc +
      (item.productPrice * item.productCount), 0);
  },


  increaseCount(number) {
    this.count += number;
  },


  clear() {
    this.items = [];
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log('Общая стоимость корзины print :>>>', this.totalPrice);
  },

};

cart.add('Macbook', 150000, 12);
cart.add('Apple watch', 810000, 3);
cart.add('Наушники Apple', 36000, 5);

console.log(cart.items);
cart.print();

