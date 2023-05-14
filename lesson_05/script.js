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
