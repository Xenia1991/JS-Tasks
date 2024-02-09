const defaultTo = (value, defaultValue) => {
    return value == undefined || value == null || isNaN(value) ? defaultValue : value;
};

console.log(defaultTo(1, 10));
console.log(defaultTo(undefined, 10));
console.log(defaultTo("u"/"f", 10));
console.log(defaultTo(null, 5));

/*Реализуйте функцию defaultTo, которая принимает значение 
первым аргументом и его значение по-умолчанию вторым. 
Если первое значение null, NaN или undefined, 
то должно быть возвращено значение по-умолчанию. Если нет, 
то нужно вернуть само значение (первый аргумент).*/