function getStringCount(object) {
   if (typeof(object) === 'object' && !null) {
   let count = 0;    
      for (let key in object) {
    //    console.log(object[key])
       if (typeof(object[key]) === 'string') {
            count ++;
        } else if (typeof(object[key]) === 'object' && !null) {
            count = count + getStringCount(object[key]);
        } 
      }
     return count; 
   }  
}  

console.log(getStringCount
({
  first: '1',
  second: '2',
  third: false,
  fourth: ['anytime', 2, 3, 4 ],
  fifth:  null,
})); // 3

console.log(getStringCount(['1', '2', ['3']])) // 3

/* Реализуйте (с использованием рекурсии) функцию getStringCount, которая должна принимать 
массив или объект и считать количество строк в массиве / значениях объекта с учетом вложенности.*/