"use strict";

{
  const ourArray = [];
  let min;
  let max;
  let m;
  let n;



  const foo = (length, m, n, str) => {
    if (str !== 'even' && str !== 'odd') {
      alert('введите even или odd');
      return ourArray;
    }

    if (m > n) {
      max = m;
      min = n;
    }
    else {
      max = n;
      min = m;
    }

    for (let i = 0; i < length; i++) {
      let c = Math.floor(min + Math.random() * (max + 1 - min));
      if (str === 'even' && (c % 2 === 0)) {
        ourArray.push(c);
        continue;
      }
      if (str === 'odd' && (c % 2 !== 0)) {
        ourArray.push(c);
        continue;
      }
      length++;
    }


    return ourArray;
  }

  const result = foo(12, 5, 15, 'even');
  console.log(result);

}

