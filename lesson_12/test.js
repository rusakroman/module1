'use strict';

const cart = {
  items: [],
  count: 0,
  _discount: 0,

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
    this.calculateItemCount();
  },

  calculateItemPrice() {
    return this.items.reduce((acc, item) => acc +
      (item.productPrice * item.productCount), 0);
  },

  calculateItemCount() {
    return this.count = this.items.reduce((acc, item) => acc + item.productCount, 0);
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

  setDiscount(promocode) {
    if (promocode === 'METHED') {
      this._discount = 15;
    }

    else if (promocode === 'NEWYEAR') {
      this._discount = 21;
    }
  },
};

cart.add('Macbook', 150000, 2);
cart.add('Apple watch', 8000, 3);
cart.add('Наушники Apple', 12, 5);

console.log(cart.items);

cart.setDiscount('NEWYEAR');
console.log(cart);
cart.print();


