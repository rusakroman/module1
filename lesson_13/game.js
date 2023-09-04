// "use strict";

const ROCK = "КАМЕНЬ";
const SISSORS = "НОЖНИЦЫ";
const PAPER = "БУМАГА";
const DRAW = "НИЧЬЯ";
const count = {
  playerCounter: 0,
  pcCounter: 0 
};



function getInput() {
  let result = null;
  let userInput = prompt("выбери: \nкамень\n\ножницы\nбумага", '');
  if (userInput) {
    userInput = userInput.toUpperCase();
    if (userInput === 'КАМЕНЬ' || userInput === 'НОЖНИЦЫ' || userInput === 'БУМАГА') {
      result = userInput;
    } else {
      alert('ты выбрал некорректное значение, сделаю выбор за тебя - это камень!');
      result = ROCK;
    }
  }
  else {
    alert('incorrect value');
    result = SISSORS;
  }

  console.log(`Ты выбрал ${result}`);
  return result;
}

function computerInput() {
  let result = null;
  const computerChoise = Math.random();
  if (computerChoise < 0.34) {
    result = ROCK;
  } else if (computerChoise < 0.67) {
    result = SISSORS;
  } else {
    result = PAPER;
  }
  console.log(`Компьютер выбрал ${result}`);
  return result;
}


// function winner(cChoise, pChoise) {
//   if (cChoise === pChoise) {
//     return DRAW;
//   }
  
//   if (cChoise === ROCK && pChoise === PAPER || cChoise === PAPER && pChoise === SISSORS ||
//     cChoise === SISSORS && pChoise === ROCK) {
//     return 'PLAYER_WON';
//   }

//   else return 'COMPUTER_WON';
// }


function game() {
  const pChoise = getInput();
  const cChoise = computerInput();
  if (cChoise === pChoise) {
    confirm('Хотите сыграть еще?') ? game() : console.log('Конец игры');
  }

  if (cChoise === ROCK && pChoise === PAPER || cChoise === PAPER && pChoise === SISSORS ||
    cChoise === SISSORS && pChoise === ROCK) {
    count.playerCounter++;
    console.log('Player win!');

    confirm('Хотите сыграть еще?') ? game() : console.log('Конец игры');
    console.log(count);
  } else {
    count.pcCounter++;
    console.log('PC win!');
    confirm('Хотите сыграть еще?') ? game() : console.log('Конец игры');
    console.log(count);
  }



}

game();



// (()=> {






// window.RPS = game;
  
// })();