let fac = function f(n) {
    return (n !==1) ? f(n-1)*n : n;
}

let fib = function fibonacci (n) {
    return (n>2) ? fibonacci(n-1) + fibonacci(n-2) : 1; 
}

function logResultDecorator(func, functionName) {
    return function() {
        let result = func.apply(this, arguments);
        console.log(`Результат функции ${functionName}: ${result}`);
        return result; 
    }
}

function callCountDecorator (func, functionName) {
    let count = 0;
    return function () {
        count++;
        console.log(`Функция ${functionName} была вызвана ${count} раз`);
        return func.apply(this, arguments);
    }
}

function timeDecorator(func, functionName) {
    return function() {
        let startTime = performance.now();
        let result = func.apply(this, arguments);
        let time = performance.now() - startTime;
        console.log(`Функция ${functionName} выполнялась ${time} миллисекунд`);
        return result;
    }
}

function cacheDecorator (func) {
    let cache = {};
    return function(n) {
        if(typeof cache[n] === 'undefined') {
            cache[n] = func.apply(this, arguments);
        }
        return console.log(cache[n]);
    }
}

function argumentsCountDecorator(func, requiredNumber) {
    return function() {
        let argsCount = arguments.length;
        if(requiredNumber !== argsCount) {
            console.warn('Количество аргументов не совпадает');
            return;
        }
        return func.apply(this, arguments);
    }

}

fac = logResultDecorator(fac, 'factorial');
fac = cacheDecorator(fac);
fac = callCountDecorator(fac, 'factorial');
fac = timeDecorator(fac, 'factorial');
fac = argumentsCountDecorator(fac, 1);

fib = logResultDecorator(fib, 'fibonacci');
fib = cacheDecorator(fib);
fib = callCountDecorator(fib, 'fibonacci');
fib = timeDecorator(fib, 'fibonacci');
fib = argumentsCountDecorator(fib, 1);

// fac(6);
// fac(20, 20)
fib(6);
fib(210)