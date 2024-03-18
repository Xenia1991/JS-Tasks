function isEmpty(obj) {
    const isOwnProperites = Object.getOwnPropertyNames(obj);
    console.log(isOwnProperites)
    if (isOwnProperites.length === 0 ) {
        return true;
    } else {
        return false;
    }
}

const obj1 = Object.create(null);
console.log(isEmpty(obj1)); // -> true
console.log(isEmpty({ prop: 'value' })); // -> false


function isEmptyWithProtos(obj) {
    let result = true;
    for (let prop in obj) {
        if (prop) {
            return result=false;
        } 
    }
    return result;
}

const protoObj = Object.create(null);
const obj = Object.create(protoObj);
console.log(isEmptyWithProtos(obj)); // -> true
console.log(isEmptyWithProtos({})); // -> true

const animal = {
    name: 'monkey',
};
const nextAnimal = Object.create(animal);
console.log(nextAnimal);
console.log(isEmptyWithProtos(nextAnimal)); // -> false

/* Напишите функцию isEmpty, которая возвращает true, если у объекта 
нет свойств(у самого объекта, не у прототипов), иначе возвращает false.

Напишите функцию isEmptyWithProtos, которая возвращает true, 
если у объекта и его прототипов(не включая Object.prototype) нет свойств, 
иначе возвращает false.

Обрати внимание на то, что функция isEmptyWithProtos проверяет наличие 
свойств не только у самого объекта, но и у его прототипов. Если создать 
пустой объект литерально (просто через фигурные скобки как в примере {}) 
то у такого объекта автоматически будет прототип Object. 
Поэтому isEmptyWithProtos возвращает false для таких объектов.
*/