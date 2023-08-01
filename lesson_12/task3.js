"use strict";

// Задача #1
// Создать объект rectangle, который описывает ширину и высоту(свойства width и height) прямоугольника
// Объект должен иметь 2 сеттера для записи ширины и высоты и два геттера для получения периметра и площади прямоугольника

// Сеттеры могут принимать только числа
// Геттеры возвращают строку число + "см"
// пример "40см"

// По умолчанию значения высоты и ширины заданы 5 см

const rectangle = {
  _width: 5,
  _height: 5,
  get square() {
    return `${this._width * this._height} см`;
  },
  get perimeter() {
    return `${(this._width * 2) + (this._height * 2)} см`;
  },

  set width(val) {
    this._width = val;
  },
  set height(value) {
    this._height = value;
  },

};



rectangle.width = 30;
rectangle.height = 60;

console.log(rectangle.perimeter);
console.log(rectangle.square);

console.log(rectangle);
