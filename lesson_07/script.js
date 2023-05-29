"use strict";

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];

const neudStudents = ['Сидоров', 'Смирнов', 'Попов'];

const goodStudents = [];

for (let i = 0; i < allStudents.length; i++) {
  for (let j = 0; j < neudStudents.length; j++) {
    if (neudStudents[j] !== students[i]) {
      goodStudents.push(students[i]);
      console.log(goodStudents);
    }
  }
}
