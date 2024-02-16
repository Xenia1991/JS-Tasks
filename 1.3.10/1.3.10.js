function findAllIdx(arr, value) {
    let indexArray = [];
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === value) {
            indexArray.push(i);
        }
    }
    return indexArray;
}

console.log(findAllIdx([1,0,1,0,0,1], 0)) // [1,3,4]
console.log(findAllIdx([1,1], 0)) // []

/*Напишите функцию findAllIdx(arr, value), которая возвращает 
массив индексов элементов, у которые значение равно value.*/