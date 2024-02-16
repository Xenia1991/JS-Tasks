const areBracketsBalanced = (str) => {
    let bracketStack = [];
    if (str.length === 0) {
        return true;
    } else if (str[0] === ')') {
        return false;
    }
    for (let i=0; i<str.length; i++) {
        if (bracketStack.length === 0 && str[i] === '(') {
            bracketStack.push(str[i])
        } else if (str[i] === bracketStack[bracketStack.length-1] && str[i] === '(') {
            bracketStack.push(str[i]); 
        } else if (bracketStack.length === 0 && str[i] === ')') {
            return false;
        } else {
            bracketStack.pop(bracketStack[bracketStack.length-1]); 
        }
    }
    return bracketStack.length === 0;
};

console.log(areBracketsBalanced(''));
console.log(areBracketsBalanced('())('));
console.log(areBracketsBalanced('()()()()()()()()'));
console.log(areBracketsBalanced('()()()())))'));
console.log(areBracketsBalanced('()()(()'));
console.log(areBracketsBalanced('()()()'));
console.log(areBracketsBalanced('(())())'));


/* Реализуйте функцию, которая принимает на вход строку, состоящую только 
из открывающих и закрывающих круглых скобок, и проверяет является 
ли эта строка корректной. Пустая строка (отсутствие скобок) считается 
корректной.

Строка считается корректной (сбалансированной), если содержащаяся в ней 
скобочная структура соответствует требованиям:

Скобки — это парные структуры. У каждой открывающей скобки должна быть 
соответствующая ей закрывающая скобка.
Закрывающая скобка не должна идти впереди открывающей.
*/