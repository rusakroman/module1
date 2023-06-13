"use strict";




const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];

const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const goodStudents = [];

for (let i = 0; i < allStudents.length; i++) {
  let found = false; // флаг, указывающий, найден ли элемент во втором массиве
  for (let j = 0; j < failedStudents.length; j++) {
    // тут условия при котором будет break
  }
  if (!found) {
    goodStudents.push(allStudents[i]); // если элемент не найден, добавляем его в массив
  }
}

console.log(goodStudents);