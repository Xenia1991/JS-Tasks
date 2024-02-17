const moveToStart = (arr, n) => {
    let newArr = [];
    if (n<arr.length) {
        newArr = newArr.concat(arr.slice(arr.length-n), arr.slice(0, arr.length-n));
    } else if (n>=arr.length) {
        newArr = arr.slice();
    }
    return newArr;
};

console.log(moveToStart([1, 2, 3, 4, 5], 3)); // [3, 4, 5, 1, 2]
console.log(moveToStart([1, 2, 3, 4, 5], 10)); // [1, 2, 3, 4, 5]

/* Реализуйте функцию moveToStart, которая принимает массив и число n. 
Функция должна переставить n элементов массива из конца в начало.

Если второй аргумент больше или равен длине массива, то должен быть 
возвращен новый массив, порядок элементов которого совпадает с изначальным.

Функция должна возвращать новый массив, а не мутировать старый.*/