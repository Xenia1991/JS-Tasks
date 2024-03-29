const lettersCount = (str) => {
    let letterObj = {};
    for (let i=0; i<str.length; i++) {
    letterObj[`${str[i].toLowerCase()}`] = letterObj[`${str[i].toLowerCase()}`] ? letterObj[`${str[i].toLowerCase()}`] +1 : 1; 
    } 
    return letterObj;
};

console.log(lettersCount('aAAbbccde'));
// {
//    a: 3,
//    b: 2,
//    c: 2,
//    d: 1,
//    e: 1,
// }


/*Реализуйте функцию lettersCount, которая принимает строку 
в качестве аргумента и возвращает объект, в котором ключами 
являются все буквы, которые есть в строке, а значениями - 
их количество в строке.

Перед подсчетом буквы необходимо привести к нижнему регистру. 
Большая буква и маленькая должны считаться одинаковой буквой. */ 