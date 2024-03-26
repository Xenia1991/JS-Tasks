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
        return new Date().getFullYear() - new Date(this.birthDate).getFullYear()
    }

}

const person = new Person('Johannes', 'Helms', '1983-01-02');
console.log(person);
console.log(person.fullName);
console.log(person.getAge());

class Account {
    constructor(person, balance) {
        this.person = person
        this.balance = balance
        this.description = null
        this.operations = []
        this.amount = null
    }

    addMoney(amount, description) {
        this.description = description;
        this.amount = amount;
        this.balance = this.balance + this.amount;
        return this.amount, this.description;
    }

    withdrawMoney(amount, description) {
        this.description = description
        this.amount = amount;
        this.balance = this.balance - this.amount;
        return this.amount, this.description
    }

    getAmount() {
        return this.balance;
    }

    getAccountHistory() {
        if (Account.prototype.addMoney(this.amount, this.description) || Account.prototype.withdrawMoney(this.amount, this.description)) {
            let addOperation = {
                timestamp: new Date().getTime(),
                target:Account.prototype.addMoney() ? 'in' : 'out',
                amount: this.amount,
                description: this.description,
            }
            this.operations.push(addOperation);
        }
        // if(Account.prototype.withdrawMoney) {
        //     let operation = {
        //         timestamp: new Date().getTime(),
        //         target: 'out',
        //         amount: this.amount,
        //         description: this.description,
        //     }
        //     this.operations.push(operation);
        // }
        return this.operations
    }

    static transfer(fromAccount, toAccount, amount) {
        fromAccount.balance = fromAccount.balance - amount;
        toAccount.balance = toAccount.balance + amount;
        return amount;
    }
}

const alex = new Person('Alexey', 'Petrov', '1994-05-22');
const alexAccount = new Account(alex, 1000);
console.log(alexAccount);
const helen = new Person('Helen', 'Smith', '1990-06-06');
const helenAccount = new Account(helen, 400);

console.log(alexAccount.addMoney(1000, 'Зарплата'));
const amount = alexAccount.getAmount();
console.log(amount);
console.log(alexAccount.withdrawMoney(amount * 0.1, 'Налоги'));
console.log(Account.transfer(alexAccount, helenAccount, 100));
console.log(helenAccount.getAmount());// 500
console.log(alexAccount.getAmount());// 1700
console.log(alexAccount.getAccountHistory());
/* Личный Счет

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

person - Владелец счета

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













*/