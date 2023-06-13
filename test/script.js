
"use strict";

// const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];

// const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

// const goodStudents = [];

// for (let i = 0; i < allStudents.length; i++) {
//   for (let j = 0; j < failedStudents.length; j++) {
//     if (allStudents[i] === failedStudents[j]) {
//       break;
//     }
//     else {
//       goodStudents.push(allStudents[i]);
//     }
//     console.log(goodStudents);
//   }
// }

// let a = 10;
// let b = 20;

// if (b) {
//   console.log('a меньше b');
// } else {
//   console.log('a больше b');
// }

// let a = 14;
// a++;
// ++a;
// alert(a);

// for (let a = 0; a < allStudents.length; a++) {
//   console.log('----------------');
//   for (let b = 0; b < failedStudents.length; b++) {
//     if (allStudents[a] === failedStudents[b]) {
//       break;
//     } else {
//       goodStudents.push(allStudents[a]);
//     }
//   }
//   console.log(goodStudents);
// }

const scientists = ['Mendelleev', 'Aristotle', 'Tesla', 'Curie', 'Darwin'];
const numbers = [152, 23, 24, 137, 15, 44, 16, 57, 542, 212, 33, 53];

// numbers.forEach((item) => {
//   console.log(item);
// })

// scientists.forEach((item, i, arr) => {
//   console.log(arr);
// })

// const items = numbers.find((item, i, arr) => {
//   return item % 2;
// });

const items = numbers.findIndex((item, i, arr) => item < 50 && item > 30);

console.log(items);