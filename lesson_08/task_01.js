"use strict";

// Первая задача:

// Напишите функцию генератор  массива случайных чисел в файле task01.js

// Функция принимает один обязательный параметр это количество элементов в массиве
// И возвращает массив со случайными числами от одного до 100 включительно;
{
  const arr = [];

  const foo = (length) => {
    for (let i = 0; i < length; i++) {
      let c = Math.floor(Math.random() * 100) + 1;
      arr.push(c);
    }
    return arr;
  }

  const result = foo(6);
  console.log(result);
}



