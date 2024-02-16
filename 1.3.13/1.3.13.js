function replaceItemsClear(arr, item, replaceItem) {
    let newArray = [];
     for (let i=0; i<arr.length; i++) {
        arr[i] === item ? newArray[i]=replaceItem : newArray[i]=arr[i];
     }
    return newArray;
}

function replaceItemsMutate(arr, item, replaceItem) {
    for (let i=0; i<arr.length; i++) {
        arr[i] === item ? arr[i] = replaceItem : arr[i];
    }
    return arr;
}

console.log(replaceItemsClear([1,2,3,4,2], 2, 'a')) //  [1,'a',3,4,'a']
const arr = [1,2,3,4,2];
console.log(replaceItemsMutate(arr, 2, 'a'))
console.log(arr); // [1,'a',3,4,'a']

/*Напишите две функции replaceItemsClear(arr, item, replaceItem) и 
replaceItemsMutate(arr, item, replaceItem).

Функция replaceItemsClear находит все элементы массива arr, 
равные item, и возвращает новый массив, в котором на месте 
найденных значений стоит replaceItem.

Функция replaceItemsMutate реализует тот же функционал, только 
мутирует входящий массив и возвращает его же. */