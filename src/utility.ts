// Напишите функцию, которая принимает:
// 1) некие данные предполагаемо типа Т, но возможно не со всеми полями
// 2) функцию-дополнятор, которая принимает такие штуки как из п.1, 
//    а возвращает полноценный объект типа Т
// ... как вы поняли, саму функцию писать не надо :) 
// нас интересует только ее сигнатура.

function myFunc1<T>(elem:Partial<T>, fn: (a:Partial<T>)=>T){

}

// Более сложный вариант:
// Напишите функцию, которая принимает:
// 1) некие данные предполагаемо типа Т (у которого поле id: string), 
//    но возможно без поля id
// 2) функцию-дополнятор, которая принимает такие штуки как из п.1, 
//    а возвращает полноценный объект типа Т
// ... как вы поняли, саму функцию писать не надо :) 
// нас интересует только ее сигнатура.

function myFunc2<T extends {id:string}>(elem: Pick<T, "id">, fn: (a: typeof elem) => T) {
  // ваш код тут
}



// Последняя задача:
// Напишите сигнатуру функции, которая принимает
// - некий класс 
// - количество
// ...а возвращает массив экземпляров этого класса

class Rectangle {
  w!: number;
  h!: number;
}
class Circle {
  radius!: number;
}

// сделайте норм сигнатуру тут.
// НЕТ, Rectangle|Circle это не вариант, надо сделать универсальную функцию 
function shtamp<T>(elem: new () => T, count: number): T[] {
  let a: T[] = [];
  for (let i = 0; i < count; i++) {
    a.push(new elem());
  }
  return a;
}

let a: Rectangle[] = shtamp(Rectangle, 10);
let b: Circle[] = shtamp(Circle, 20);
