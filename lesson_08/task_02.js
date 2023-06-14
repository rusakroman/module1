"use strict";

const arr = [];
let min = 0;
let max = 0;

const foo = (length, n, m) => {

  if (n > m) {
    max = n;
  }

  if (n < m) {
    max = m;
  }

  if (n === m) return arrRandomNumber;


  for (let i = 0; i < length; i++) {
    if (n === m) {
      break;
    }
    arr.push(Math.floor(Math.random() * (Math.max(n, m) - Math.min(n, m) + 1)) + Math.min(n, m));
  }
  return arr;
}

const result = foo(22, -10, -10);
console.log(result);