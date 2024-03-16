const getDaysBetweenDates = (date1, date2) => {
    if(!date1 && !date2) {       
        throw new TypeError('TypeError');
    }
    if(date1===undefined || date2===undefined) {       
        throw new TypeError('TypeError');
    }
    if ((date1 && date2) ||
        (date1===null || date2===null)) {
        let ms1 = new Date(date1).getTime();
        let ms2 = new Date(date2).getTime();
        let hrs1 = ms1/1000/3600;
        let hrs2 = ms2/1000/3600;
        let days;
        if(hrs2>hrs1) {
          days = Math.floor((hrs2-hrs1)/24)  
        } else if (hrs1===hrs2) {
            days = 0;
          } else if (hrs1>hrs2 && hrs1-hrs2<24) {
            days = 0
        } else {
            days = -(Math.floor((hrs1-hrs2)/24))
        }
        return days;
    }
};

console.log(getDaysBetweenDates('1-1-2020', '1-2-2020'));// -> 1
console.log(getDaysBetweenDates('1-1-2020', '1-1-2020'));// -> 0
console.log(getDaysBetweenDates('1-6-2020', '1-2-2020'));// -> -1
console.log(getDaysBetweenDates(new Date(2011, 6, 2, 6, 0), new Date(2012, 6, 2, 18, 0)));// -> 366
console.log(getDaysBetweenDates(1409796000000, 1409925600000));// -> 1
console.log(getDaysBetweenDates('1-1-2020', 'дата'));// -> NaN
console.log(getDaysBetweenDates(null));// -> TypeError

/*Реализуйте функцию getDaysBetweenDates которая принимает на вход две даты и возвращает количество полных дней между ними.

getDaysBetweenDates('1-1-2020', '1-2-2020'); // -> 1

Функция должна корректно работать с объектом Date
getDaysBetweenDates(new Date(2011, 6, 2, 6, 0), new Date(2012, 6, 2, 18, 0)); // -> 366

Функция должна корректно рабоать со значениями в миллисекундах
getDaysBetweenDates(1409796000000, 1409925600000); // -> 1

Если входные параметры - невалидные даты, то функция вовращает NaN:
getDaysBetweenDates('1-1-2020', 'дата'); // -> NaN

Если аргументов меньше 2-х, то функция должна пробросить исключение TypeError
getDaysBetweenDates(null); // -> TypeError

new Date(null) - валидная запись, которая вернёт количество миллисекунд, прошедшее с 01.01.1970 https://en.wikipedia.org/wiki/Unix_time*/