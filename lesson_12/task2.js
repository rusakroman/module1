"use strict";

const arrMass = [2];

const functionRecurs = (arrMass) => {

  let summ = 0;
  const randNumber = Math.floor((Math.random() * 10) + 1);

  for (let i = 0; i < arrMass.length; i++) {
    summ += arrMass[i];
  }

  if (summ < 50) {
    arrMass.push(randNumber);
    functionRecurs(arrMass);
  }

  else if (summ >= 50) {
    return arrMass;
  }
}

const res = functionRecurs(arrMass);
console.log(res);