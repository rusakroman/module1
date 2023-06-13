"use strict";

// Первая задача:
// Напишите функцию filter()
// функция принимает в параметрах 2 массива
// Первый массив — список всех студентов, второй — список студентов не сдавших экзамен.

{
  const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
  const neudStudents = ['Сидоров', 'Смирнов', 'Попов'];
  console.log(allStudents.filter(item => !neudStudents.includes(item)));
}


{
  const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

  function getAverageValue(arr) {
    let totalSumm = 0;
    let averageSumm = 0;
    for (let i = 0; i < arr.length; i++) {
      totalSumm = totalSumm + arr[i];
    }

    averageSumm = totalSumm / arr.length;
    return Math.floor(averageSumm);
  }

  console.log(getAverageValue(allCashbox));
}




const students = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const superStudents = [];



// Вторая задача:
// Напишите функцию getAverageValue
// для получения среднеарифметического значения
// с округлением в меньшую сторону до целого числа

// С помощью этой функции получите средний чек за день, в массиве данные всех чеков за день:


const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

function getAverageValue(arr) {
  let totalSumm = 0;
  let averageSumm = 0;
  for (let i = 0; i < arr.length; i++) {
    totalSumm = totalSumm + arr[i];
  }

  averageSumm = totalSumm / arr.length;
  return Math.floor(averageSumm);
}

console.log(getAverageValue(allCashbox));



// Третья задача:
// Напишите функцию addPrefix 
// Функция получает массив в виде параметров и возвращает массив с префиксами
// После префикса пробел добавляется автоматически

// 1 способ
{
  const foo = (prefix, arr) => {
    let i = 0;
    while (i < arr.length) {
      superStudents.push(prefix + ' ' + arr[i]);
      i++;
    }
    return superStudents;
  }

  foo('Mr', students);
  console.log(superStudents);

}

// 2 способ

{
  const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

  const addPrefix = names.map(name => `Mr ${name}`);

  console.log(addPrefix);

}


