const arithmetic = (a, b, operator) => {
    if (operator === "add" ) {
        return a+b;
    } else if ( operator === "subtract") {
        return a-b;
    } else if ( operator === "divide") {
        return a/b;
    } else if ( operator === "multiply") {
        return a*b;
    } else {
        return NaN;
    }
};

console.log(arithmetic(5, 2, "add"))      //=> returns 7
console.log(arithmetic(5, 2, "subtract")) //=> returns 3
console.log(arithmetic(5, 2, "multiply")) //=> returns 10
console.log(arithmetic(5, 2, "divide"))  //=> returns 2.5
console.log(arithmetic(5, 2, "aaa"))     //=> returns NaN
/*
Реализуйте функцию, которая принимает на вход два числа и 
арифметический оператор (имя которого в виде строки) и 
возвращает результат соответстующей операции.

Первые 2 аргумента это положительные целые числа

Третий аргумент может быть одним из 
"add", "subtract", "divide", "multiply".
*/