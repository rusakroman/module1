"use strict";

// const animals = ['dog', 'cat', 'mouse', 'wolf'];

// const printArr = arr => {
//   console.log(`Длина массива ${arr.length}`);
//   for (let i = 0; i < arr.length; i++) {
//     const elem = arr[i];
//     console.log(`Элемент под индексом ${i} - ${elem}`);
//   }

//   for (const key in arr) {
//     console.log(`Элемент под индексом ${key} - ${arr[key]}`);
//   }
// }

// printArr(animals);



// console.log(Array.isArray(animals));

const students = ['Ivanov', 'Sidorov', 'Petrov', 'Liushin', 'Mamonowa'];

const neudStudents = ['Sidorov', 'Petrov'];

const goodStudents = [];

for (let i = 0; i < students.length; i++) {
  for (let j = 0; j < neudStudents.length; j++) {
    if (neudStudents[j] !== students[i]) {
      goodStudents.push(students[i]);
      console.log(goodStudents);
    }
  }
}

// const neud = students.splice(2, 1, 'Haustow', 'Chernikova');

// const numbers = [1, 23, 4, 121, 2112, 3546, 24, 23];

// console.log(students);

// console.log(neud);

// console.log(students.includes('Liushin'));

// console.log(students.join(' '));

// const sortArr = arr => {
//   console.log(`Изначальный массив: ${arr}`);
//   arr.sort((a, b) => a - b);
//   console.log(`Отсортированный массив ${arr}`);
//   return arr.reverse();
// };

// sortArr(numbers);
// console.log(students.reverse());
// console.log('sortArr(numbers) ', sortArr(numbers));

// const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];

// const failedStudents = ['Сидоров', 'Смирнов', 'Попов',];

// const successStudents = [];

// const foo = (arr1, arr2) => {
//   for (let i = 0; i < allStudents.length; i++) {
//     for (let j = 0; j < failedStudents.length; j++) {
//       if (failedStudents[j] !== allStudents[i]) {
//         successStudents.push(allStudents[i]);
//       }
//     }
//   }
//   return successStudents;

// };

// const result = foo(allStudents, failedStudents);
// console.log(result);

// const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

// const addPrefix = (arr, prefix) => {
//   for (let i = 0; i < names.length; i++) {
//     console.log('Mr ' + names[i]);
//   }
//   return

// }

// addPrefix(names, 'Mr');

// const newNames = addPrefix(names, 'Mr');
// console.log(newNames);
