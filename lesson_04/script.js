'use strict';

{
  const productName = prompt('Введите наименование товара', '');
  const productCount = prompt('Введите количество товара', '');
  const productPrice = prompt('Введите Цену товара', '');
  console.log(typeof productName);
  console.log(typeof productCount);
  console.log(typeof productPrice);
  const productTotalPrice = productCount * productPrice;

  if ((isNaN(productCount)) || (isNaN(productPrice))) {
    console.log("Вы ввели некорректные данные");
  } else {
    console.log(`На складе ${productCount} единицы товара ${productName} на сумму ${productTotalPrice} деревянных`);
  }

}

