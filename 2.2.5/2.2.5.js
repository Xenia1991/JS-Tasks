const sum = (...args) => {
    if (args) {
        let sum=0;
        for (let arg of args) {
            if (isNaN(Number(arg))) {
                arg = 0;
            }
            sum += Number(arg);
        }
        return sum;
    }
};

console.log(sum(1, 2, 3, 4, 5, 6)); // 21
console.log(sum(-10, 15, 100)); // 105
console.log(sum()); // 0
console.log(sum(1, 'fqwfqwf', {}, [], 3, 4, 2, true, false)); // 11. Прим: true было приведено к 1 (см. преобразование типов в js)

/* Реализуйте функцию sum, которая принимает неограниченное количество чисел в качестве аргументов и возвращает их сумму. 
Вызов функции без аргументов должен вернуть 0. 
В случае, если аргумент не является числом и не может быть приведен к таковому, нужно проигнорировать его. 
Если его можно привести к числу, то приведите его и прибавьте, как и обычное число. */