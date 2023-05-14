'use strict';

{
  const moneyReverse = (money) => {
    const courseEuroByDollar = 1.2;
    const courseDollarByRouble = 64;
    return money * courseEuroByDollar * courseDollarByRouble;
  }

  const result = moneyReverse(1000);
  console.log('result ', result);
}


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