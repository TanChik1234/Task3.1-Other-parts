// Напишите функцию mapObject, которая
// в чем-то очень похожа на функцию map для массивов.

// Эта функция должна принимать объект джаваскрипта
// и функцию transformer, которую нужно применить к каждому из полей того объекта, 
// ...а из результата применения функции transformer к каждому полю входящего объекта
// собрать новый объект и вернуть его.

// Так например можно будет замэппить объект типа 
// { "roma" : 5, "vasya": 2 } оценок студентов
// на функцию вроде (x) => x > 2
// чтобы получить объект 
// { "roma": true, "vasya": false } зачетов студентов

// Понятное дело для описания сигнатуры mapObject надо будет юзать
// 1) дженерики с несколькими параметрами-типами
// 2) такую штуку как Record (globalThis.Record, если быть точным ;) )


function mapObject<T, U>(someObject: Record<string, T>, fn: (input: T) => U): Record<string, U> {
  let newObject: Record<string, U> = {};
  for (let property in someObject) {
    if (someObject.hasOwnProperty(property)) {
      newObject[property] = fn(someObject[property]);
    }
  }
  return newObject;
}

let x = mapObject({ "roma" : 5, "vasya": 2 }, (x) => x > 2);
console.log(JSON.stringify(x));