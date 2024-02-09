function compareWithPrecision(a, b, precision) {
    return precision >= Math.abs((b-a).toFixed(4)) ? true : false;
}

console.log(compareWithPrecision(0.1 + 0.2, 0.3, 0.0001));
console.log(compareWithPrecision(10, 9.7001, 0.3));
console.log(compareWithPrecision(10, 9.7001, 0.3));
console.log(compareWithPrecision(10, 10.2999, 0.3));
console.log(compareWithPrecision(10, 10.2999, 0.3));


console.log(compareWithPrecision(-10, -10.2999, 0.3));
console.log(compareWithPrecision(-1000, -999, 1));
console.log(compareWithPrecision(1, -1, 2)); //true
console.log(compareWithPrecision(-123, -125, 2)); //true
console.log(compareWithPrecision(1, -2, 0.1));//false
console.log(compareWithPrecision(-1, -0.699, 0.3)); //false
console.log(compareWithPrecision(-1, -0, 0.5)) //false

/*Напишите функцию, которая сравнивает два числа с определенной 
погрешностью.
Пример:
compareWithPrecision(0.1 + 0.2, 0.3, 0.0001) // true 

Cчитаем разницу между А и Б, сравниваем с Погрешностью - 
на выходе boolean (погрешность > результата = тру)*/