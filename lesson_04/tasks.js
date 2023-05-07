'use strict';

// Задача номер 2

{
  const rain = Math.round(Math.random() * 1);

  if (rain === 1) {
    console.log('Пошёл дождь. Возьмите зонт!');
  } else if (rain === 0) {
    console.log('Нет дождя');
  }

}



// Задача номер 3

{

  const markMathem = +prompt('Введите кол-во балов по математике');
  const markRash = +prompt('Введите кол-во балов по математике');
  const markInform = +prompt('Введите кол-во балов по математике');

  const markTotal = markMathem + markRash + markInform;

  if ((Number.isNaN(markMathem)) || Number.isNaN(markRash) || Number.isNaN(markInform)) {
    console.log("Вы ввели некорректные данные");
  }

  else if (markTotal >= 265) {
    console.log('Вы поступили на бюджет!');
  } else {
    console.log('Увы, вы не прошли на бюджет!');
  }

}

{
  const sumUser = prompt('Введите сумму денег, которую вы хотите снять');
  if (sumUser % 100 === 0) {
    console.log('Банкомат может выдать вам желаемую сумму');
  } else {
    console.log('Банкомат не может выдать такую сумму, есть купюры только по 100р');
  }
}