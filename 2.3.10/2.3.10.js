class Person {
    constructor(name, surname, birthDate) {
        this.firstName = name
        this.lastName = surname
        this.birthDate = birthDate
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    getAge() {
        const userBirthDay = new Date(this.birthDate).getDay();
        const currentDay = new Date().getDay();
        let userAge = new Date().getFullYear() - new Date(this.birthDate).getFullYear();
        if (userBirthDay > currentDay) {
            return userAge-1
        } else {
            return userAge
        }
    }
}

class Account {
    constructor(person, balance) {
        this.person = person
        this.balance = balance
        this.operations = []
    }

    addOperation(timestamp, target, amount, description) {
        const addOperation = {
            timestamp,
            target,
            amount,
            description,
        }
        this.operations.push(addOperation);
    }

    addMoney(amount, description) {
        this.addOperation(new Date().getTime(), 'in', amount, description);
        this.balance = this.balance + amount;
        return amount, description
    }


    withdrawMoney(amount, description) {
        this.addOperation(new Date().getTime(), 'out', amount, description);
        this.balance = this.balance - amount;
        return amount, description
    }
    
    static transfer(fromAccount, toAccount, amount) {
        if (fromAccount) {
            const addOperation = {
                timestamp: new Date().getTime(),
                target: 'out',
                amount: amount,
                description: 'Перевод между счетами',
            }
            fromAccount.operations.push(addOperation)
        }
        if (toAccount) {
            const addOperation = {
                timestamp: new Date().getTime(),
                target: 'in',
                amount: amount,
                description: 'Перевод между счетами',
            }
            toAccount.operations.push(addOperation)
        }
        fromAccount.balance = fromAccount.balance - amount;
        toAccount.balance = toAccount.balance + amount;
        return amount;
    }

    getAmount() {
        return this.balance;
    }

    getAccountHistory() {
        return this.operations;
    }
}

const alex = new Person('Alexey', 'Petrov', '1994-05-22');
const alexAccount = new Account(alex, 1000);
console.log(alex.getAge());
const helen = new Person('Helen', 'Smith', '1990-06-06');
const helenAccount = new Account(helen, 400);
console.log(helen.getAge());

console.log(alexAccount.addMoney(1000, 'Зарплата'));
const amount = alexAccount.getAmount();
console.log(alexAccount.withdrawMoney(amount * 0.1, 'Налоги'));
console.log(Account.transfer(alexAccount, helenAccount, 100));
console.log(helenAccount.getAmount());// 500
console.log(alexAccount.getAmount());// 1700
console.log(alexAccount.getAccountHistory());
console.log(helenAccount.getAccountHistory());

/* Личный Счет
Создайте 2 класса:
Person для описания клиента и 
Account для работы с банковским счетом частного лица.

Считаем, что отрицательный баланс счета - это нормально, обрабатывать 
как ошибку не надо.

Person
const person = new Person('Johannes', 'Helms', '1983-01-02');

Методы
getAge() - Возвращает возраст владельца счета

Свойства
firstName - Имя
lastName - Фамилия
fullName - Имя вместе с фамилией, вычислямое свойство (используем геттер)

Account
new Account(person, 1000);

Методы
addMoney(amount, description) - Положить деньги на аккаунт с комментарием 
к переводу
withdrawMoney(amount, description) - Вывести деньги с аккаунта с комментарием
к переводу
getAmount() - Получить текущее состояние счета
getAccountHistory() - Возвращает массив с объектами формата 
{ timestamp: 1574434091131, target: 'in', amount: 10, description: 'ЗП' }. 
Поле target может иметь значения in или out.
transfer(fromAccount, toAccount, amount) - статический метод, переводит 
деньги с одного счета на другой

Свойства

person - Владелец счета */