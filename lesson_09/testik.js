// const obj = new Object();
// console.log('obj ', obj);


// const user = {};
// console.log('user ', user);

// const obj = Object.create(null);
// console.log('obj ', obj);

// const user = {
//   login: 'Deadshot',
//   firstName: 'Флойд',
//   lastName: 'Лоутон',
//   'favorite weapon': 'Clock 19',

//   say() {
//     console.log('Меня зовут Флойд');
//   }

// };

// console.log('user: ', user);
// console.log(user['login']);

// const str = 'lastName';
// console.log(user[str]);
// console.log(user['favorite weapon']);

// user.say();

// user.smoke = true;
// console.log(user);


// const element = {
//   tagName: 'div',
//   className: 'container',
// }

// const decorObj = obj => {
//   obj.prop = 'вот это да!';
// };

// decorObj(element);
// console.log('element: ', element);

// const hero = {
//   login: 'Deadpool',
//   firstName: 'Уэйд',
//   lastName: 'Уилсон',
//   favoriteWeapon: 'katanas',
//   otherWeapons: [
//     'Mateba Autorevolver',
//     'Ingram MAc - 10',
//     'Desert Eagle Mark XIX',
//     'M16',
//     'РГД-5'
//   ],
//   alive: true,
// };

// const {
//   login,
//   otherWeapons
// } = hero;

// console.log(otherWeapons);


// 1 способ
// for (const prop in hero) {
//   console.log(`hero.${prop} = ${hero[prop]}`);
// }

// 2способ
// const keys = Object.keys(hero);
// for (const key of keys) {
//   console.log(`hero.${key} = ${hero[key]}`);
// }

// 3способ cами ключи не нужны если
// const values = Object.values(hero);
// console.log('values ', values);

// for (const key of values) {
//   console.log('key:', key);
// }

// const obj1 = {
//   a: 1,
//   b: {
//     a: 2
//   },
// };

// const obj2 = {
//   c: 3,
//   b: {
//     d: 4
//   },
// };

// console.log(obj1);
// console.log(obj2);

// Object.assign(obj1, obj2);
// console.log('obj1 ', obj1);

// const obj3 = Object.assign({}, obj1, obj2);
// console.log('obj3 ', obj3);
// console.log('obj1 ', obj1);