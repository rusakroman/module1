"use strict";



// Вторая задача:

// Скопируйте код task01.js в task02.js

// Продолжаем работать с предыдущей функцией

// Функция принимает еще два параметра n и m

// Числа m и n формируют диапазон, в пределах которого должно сгенерироваться числа для массива
// m и n включительно

// Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.




{
  const arr = [];
  let min = 0;
  let max = 0;

  const foo = (length, n, m) => {

    if (n > m) {
      max = n;
    } else if (n < m) {
      max = m;
    }
    for (let i = 0; i < length; i++) {
      arr.push(Math.round(Math.random() * (max - min) + min));
    }
    return arr;
  }

  const result = foo(12, 10, 30);
  console.log(result);
}
