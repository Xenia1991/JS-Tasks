function invert (obj) {
    let newObj = Object.fromEntries(Object.entries(obj).map((el) => el.reverse()));
    return newObj;
}

console.log(invert({ a: 1, b: 2, c: 3 })); // { 1: a, 2: b, 3: c }
console.log(invert({ name: 'Maks', age: 32, feature: 'dump', feature: "clever" })); // {32: 'age', Maks: 'name', clever: 'feature'}

// or
/* function invert (obj) {
    const invertedArray = Object.entries(obj).map((el) => {
        return el.reverse();
    });
    let newObj = Object.fromEntries(invertedArray);
    return newObj;
}*/

/*Напишите функцию, которая создает объект, состоящий из инвертированных ключей и значений объекта.

Если объект содержит повторяющиеся значения, последующие значения перезаписывают присвоения свойств предыдущих значений.
*/