"use strict";

const randNumber = Math.floor((Math.random() * 100) + 1);

const foo = () => {
  let userNumber = +prompt('Загадай число от 1 до 100', '1');

  if (userNumber < 1 || userNumber > 100) {
    alert('Ты что не понял в каком интервале число?');
    alert('Число от 1 до 100!!!');
    foo();
  }

  else if (randNumber > userNumber) {
    alert('Больше');
    foo();
  }

  else if (randNumber < userNumber) {
    alert('Меньше!');
    foo();
  }

  else if (randNumber === userNumber) {
    return alert(userNumber);

  }

}

foo(54);

