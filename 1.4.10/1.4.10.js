const once = fn => { 
    let a = true;
    return function () {
        if (a) {
           fn();
           a = false;
        }
    }
};

const f = () => console.log('hi!');
const onceF = once(f);
console.log(onceF()); // hi!
console.log(onceF()); // nothing


/*Реализуйте функцию once, которая принимает функцию в качестве аргумента и возвращает новую функцию, 
которая вызывает функцию-аргумент, но только единожды. 
Повторный вызов функции-результата once не должен давать никакого эффекта.*/