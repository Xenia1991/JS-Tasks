const reverseLongWords = (str) => {
  let newStr = str.split(' ');
  for (let i=0; i<newStr.length; i++) {
    newStr[i].length >= 5 ? newStr[i] = newStr[i].split('').reverse().join('') : newStr[i]
  }
  return newStr.join(' ');
};

console.log(reverseLongWords('Hey fellow warriors')); // Hey wollef sroirraw
console.log(reverseLongWords('This is a test')); // This is a test
console.log(reverseLongWords('This is another test')); // This is rehtona test

/* Реализуйте функцию reverseLongWords, которая принимает 
строку в качестве аргумента и возвращает новую строку, в 
которой каждое слово, которое содержит 5 или больше символов, 
написана наоборот */