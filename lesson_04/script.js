'use strict';

{
  const productName = 'printer';
  const productCount = 10;
  const productCategory = 'HP';
  const productPrice = 8000;
  const productTotalPrice = productCount * productPrice;
  console.log('productName: ', productName);
  console.log(productTotalPrice);
}

{
  const productName = 'auto';
  const productCount = 6;
  const productCategory = 'Ferrari';
  const productPrice = 15000000;
  const productTotalPrice = productCount * productPrice;
  console.log('productName: ', productName);
  console.log(productTotalPrice);
}

// Новый блок инструкций!!!!

{
  const productName = prompt('Введите наименование товара', '');
  const productCount = +prompt('Введите количество товара', '');
  const productPrice = +prompt('Введите Цену товара', '');
  console.log(typeof productName);
  console.log(typeof productCount);
  console.log(typeof productPrice);
  const productTotalPrice = productCount * productPrice;
  console.log(`На складе ${productCount} единицы товара ${productName} на сумму ${productTotalPrice} деревянных`);
}

