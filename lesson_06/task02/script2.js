"use strict";

let simpleCount = (count) => {
  for (let i = 2; i < count; i++) {
    if (count % i === 0) {
      return false;
    }
  }
  return count > 1;
}


console.log("2", simpleCount(2));
console.log("-11", simpleCount(-11));
console.log("4", simpleCount(4));
console.log("5", simpleCount(5));
console.log("6", simpleCount(6));
console.log("883", simpleCount(883)); 
