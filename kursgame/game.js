"use strict";

// let botflag;
// let userflag;
// let botChoise;
// let counter = {
//   user: 5,
//   bot: 5
// };

// (() => {

//   function game() {


//     let userChoise = +prompt('Я загадал число, угадай четное или нет', '');
//     // console.log(userChoise);

//     if (!userChoise) {
//       alert('вы не хотите играть , ну и ладно');
//       return;
//     }

//     else {
//       if (userChoise % 2 === 0) {
//         userflag = true;
//         console.log('число четное');
//       }
//       else {
//         userflag = false;
//         console.log('число нечетное');
//       }
//     }

//     console.log(userflag);

//     botChoise = Math.random();
//     if (botChoise < 0.5) {
//       botflag = true;
//     }
//     else {
//       botflag = false;
//     }

//     console.log(botflag);

//     if (userflag === true && botflag === true) {
//       counter.user = counter.user - userChoise;
//       counter.bot = counter.bot + userChoise;
//     } else {
//       counter.user = counter.user + userChoise;
//       counter.bot = counter.bot - userChoise;
//     }

//     console.log(counter.user);
//     console.log(counter.bot);

//     if (counter.user !== 0 && counter.bot !== 0) {
//       mainWrapper();
//     } else if (counter.user == 0) {
//       console.log('Бот победил');
//       return;
//     } else {
//       console.log('Игрок победил');
//       return;
//     }
//   }

//   window.RPS = game;

// })();

let botflag;
let userflag;
let botChoise;
let counter = {
  user: 5,
  bot: 5
};

function mainWrapper() {


  let userChoise = +prompt('Я загадал число, угадай четное или нет', '');
  // console.log(userChoise);

  if (!userChoise) {
    alert('вы не хотите играть , ну и ладно');
    return;
  }

  else {
    if (userChoise % 2 === 0) {
      userflag = true;
      console.log('число четное');
    }
    else {
      userflag = false;
      console.log('число нечетное');
    }
  }

  console.log(userflag);

  botChoise = Math.random();
  if (botChoise < 0.5) {
    botflag = true;
  }
  else {
    botflag = false;
  }

  console.log(botflag);

  if (userflag === true && botflag === true) {
    counter.user = counter.user - userChoise;
    counter.bot = counter.bot + userChoise;
  } else {
    counter.user = counter.user + userChoise;
    counter.bot = counter.bot - userChoise;
  }

  console.log(counter.user);
  console.log(counter.bot);

  if (counter.user !== 0 && counter.bot !== 0) {
    mainWrapper();
  } else if (counter.user == 0) {
    console.log('Бот победил');
    return;
  } else {
    console.log('Игрок победил');
    return;
  }
}

mainWrapper();