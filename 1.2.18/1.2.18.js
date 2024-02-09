function capitalize(str){
   str = str.toLowerCase().split(' ');
   const newStr = str.map(e => {
    return e[0].toUpperCase()+e.slice(1);
   });
   return newStr.join(' ');
}

const str = 'sOme RanDoM sTRING';
console.log(capitalize(str)); // Some Random String

/* Реализуйте функцию capitalize, которая принимает строку 
в качестве аргумента и возвращает новую строку, в которой 
первые буквы слов заглавные, а все остальные - строчные.*/
