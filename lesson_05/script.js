'use strict';

// Напишите функцию конвертер, которая на вход принимает стоимость покупки в евро и выводит результат в рублях
// 1 евро = 1.2 доллара,
//   1 доллар = 64 рубля.

{
  const moneyReverse = (money) => {
    const courseEuroByDollar = 1.2;
    const courseDollarByRouble = 64;
    return money * courseEuroByDollar * courseDollarByRouble;
  }

  const result = moneyReverse(1000);
  console.log('result ', result);
}

// Напишите функцию, которая принимает строку и возвращает модифицированную строку
// Строка начинается с большой буквы, остальные буквы маленькие
// Пример: "привет Мир" => "Привет мир"

{
  const strModify = (str) => {
    str = str.toLowerCase();
    const strFirstLetter = str[0].toUpperCase();
    str = strFirstLetter + str.slice(1);
    return str;
  }

  const result = strModify('привет Мир');
  console.log('result ', result);
}


// Напишите функцию, которая принимает строку и возвращает обратную строку
// Пример: "Привет мир" => "рим тевирП"

{
  const strModify = (str) => {
    const reverse = str.split('').reverse().join('');
    return reverse;
  }

  const result = strModify('Рома и Маша');
  console.log('result ', result);

}

{

  const calculate = (summ, count, promo) => {
    let countSkidka = 0;
    let summBigSkidka = 0;
    let promoSkidka = 0;
    let promoSkidka2 = 0;
    let totalSkidka = 0;
    let summBig = 0;

    if (count > 10) {
      countSkidka = summ / 100 * 3;
    }

    if (summ > 30000) {
      summBig = summ - 30000;
      summBigSkidka = summBig / 100 * 5;
    }

    if (promo === "Methed") {
      promoSkidka = summ / 100 * 10;
    }

    totalSkidka = countSkidka + summBigSkidka + promoSkidka;
    summ = summ - totalSkidka;

    if (promo === 'G3H2Z1' && summ > 2000) {
      promoSkidka2 = 500;
    }

    return (summ - promoSkidka2);

  }

  const result = calculate(35000, 20, 'Methed');
  console.log('result ', result);
}