
"use strict";

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];

const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const goodStudents = [];

for (let i = 0; i < allStudents.length; i++) {
  for (let j = 0; j < failedStudents.length; j++) {
    if (allStudents[i] === failedStudents[j]) {
      break;
    }
    else {
      goodStudents.push(allStudents[i]);
    }
    console.log(goodStudents);
  }
}



