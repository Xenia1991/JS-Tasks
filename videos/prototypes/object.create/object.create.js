const person = Object.create({
    calculateAge () {
        console.log(new Date().getFullYear() - this.birthYear);
    }
}, {
    name: {
        value: 'Vlad',
        enumerable: true,
        writable: true,
        configurable: true,
    },
    birthYear: {
        value: 1990,
        enumerable: true,
        writable: true,
        configurable: false,
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthYear
        },

        set(value) {
            document.body.style.background = 'green'
            console.log('Set age', value);
        }
    }
})
console.log(person);
for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key, person[key]);
    }
    
} //  в консоли не будет никаких ключей при создании через Object.create
//  для того, чтобы настраивать поля("ключи") - добавлять enumerable: true и 
// их станет видно

// поля в таких объектах не переопределяются, за это отвечает свойство writable
// оно false по-умолчанию, для того, чтобы переопределятьих нужно ставить true

person.name = 'Max';
person.birthYear = 1989;

// есть еще один дескриптор, он позволяет манипулировать ключами такого объекта
//  это configurable, оно false по-умолчанию
// этот метод позволяет удалять из объекта ключ, есди его значение true - можем удалить
// false - не можем удалить 
delete person.name;
console.log(person);

// Геттеры и сеттеры
console.log(person.age);
person.age = 100
// на геттерах и сеттерах построено большое количество фреймворков, чтобы смотреть за
// изменениями опаределенных полей и писать дополнительную логику
let user = {
    get name() {
      return this._name;
    },
  
    set name(value) {
      if (value.length < 4) {
        alert("Имя слишком короткое, должно быть более 4 символов");
        return;
      }
      this._name = value;
    }
  };
  
user.name = "Pete";
alert(user.name); // Pete
  
user.name = ""; // Имя слишком короткое...

console.log(user);
user.name = 'nikolai'