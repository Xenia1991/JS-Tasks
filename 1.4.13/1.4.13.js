const createObjectCalculator = (initialA, initialB) => {
    let obj = {
        a: initialA,
        b: initialB,
    }

    function read(a,b) {
        this.a = a;
        this.b = b;
    }
    
    function sum() {
        return this.a+this.b;
    }

    function mul() {
        return this.a*this.b;
    }

    obj.read = read;
    obj.sum = sum;
    obj.mul = mul;

    return obj;    
};

const calculator = createObjectCalculator(2, 3);
console.log(calculator)
console.log(calculator.sum()); // 2 + 3 = 5
console.log(calculator.mul()); // 2 * 3 = 6
calculator.read(12, 34);
console.log(calculator.sum()); // 12 + 34 = 46
console.log(calculator.mul()); // 12 * 34 = 408
calculator.read(5, 5);
console.log(calculator.sum()); // 5 + 5 = 10
console.log(calculator.mul()); // 5 * 5 = 25

/*Реализуйте функцию createObjectCalculator, которая принимает в качестве аргументов два числа, а возвращает следующий объект:

Объект calculator (калькулятор) с тремя методами:

read(a, b) (читать) принимает два значения и сохраняет их как свойства объекта. 
sum() (суммировать) возвращает сумму сохранённых значений. 
mul() (умножить) перемножает сохранённые значения и возвращает результат.

Гарантируется, что оба числа, передаваемых в read всегда будут числами.*/