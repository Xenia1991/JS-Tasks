const person = new Object({
     name: 'Maxim',
    age: 25,
    greet: function () {
        console.log('Greet!');
    }
})

Object.prototype.sayHello = function() {
    console.log('Hello');
}

//Это какой-то объект наследуемый 
// от родительских сущностей(объектов, массивов, функций и .т.д) и 
// иметь доступ к более расширенным фуенкциям

const lena = Object.create(person)
lena.name = 'Elena'

// Прототип раьотает так: он идет сверху вниз
// если на верхнем уровне он находит поле и функция и вызывает его, если не находит, 
// то тогода он обращается к протитипу и пытается что-то найти в нем 
// если он и в нем ничего не находит то он идет потом по цепочке прототипов
// и пытается найти этот метод, если и там ничего нет - выдает ошибку
// Т.Е. ЭТО ОПРЕДЕЛЕННЫЙ ОБЪЕКТ, КОТОРЫЙ ПРИСУТСТВУЕТ У ОБЪЕКТОВ И он вызввапется по цеопмчке сверху вниз
// т.е. если мы находим свойство или метод на верхнем уровне - ок
// но если нет, идем по цепочке вниз

const str1 = 'I am string'

// но как нам узнать какие в принц ипе есть поля у данного объекта-строки
// надо переписать инициализацию этой строки, что за кулисами:

const str = new String('I am string') 
// в прототипе (консоли) мы увидим все методы для этой str
// и если мы углубимся, то получится, что увидим еще один прототип,
// который ссылается уже на прототип object
//  это потому, что класс объект - самый главный класс в джаваскрипте

//  по сути прототип - это некий объект посредством которого мы расширяем 
// свойства объектов или классов, с помощью него мы можем устраивать некоторое
// наследование 

const mmyDate = new Date();
// есть много объектов, например, Array, Function, NUmber 
// это все функции и если запускать их при пмомщи слова new то это все будет объектами
// 

mmyDate instanceof Date // true - mmyDate является экземпляром Date

function Auto(brand, price, gas){
    this.brand = brand;
    this.price = price;
    this.gas = gas;
}

Auto.prototype.drive = function () {
    if (this.gas > 0) {
        this.gas = this.gas - 20;
        return this.gas;
    } else {
        console.log('бензин закончился');
    }
} // метод поместили внутри прототипа. 
//  Как джаваскрипт понимает, что метод надо искать внутри прототипа?
//  он сначала ищет его в свойствах экземпляра, потом идет искать его в прототип главного объекта


const bmw = new Auto ('bmw', '100,000', '100') //является экземпляром Auto
const nissan = new Auto('nissan', '40,000', '100')
// создавая каждый новый экземпляр машины
// мы создаем ей каждой отдельный функцию драйв
nissan.drive === bmw.drive // false

// Что нам дает использование прототипного наследования?
// 1. Мы не создаем копии методов
// 2. Если решили поменять работу нашего метода, то его обновленная версия 
// будет доступна для всех экзампляров, которые мы используем 


function Car(brand, color) {
    this.brand = brand;
    this.color = color;
}

const tesla = new Car('tesla', 'silver');
const lada = new Car('lada', 'red')
console.log(tesla);

// прототипное наследование - когда мы можем добавить какой-то метод в
// прототип головного объекта и этот метод становится доступным во всезх экземплярах
// этого объекта
// и когда мы создаем каждый раз экземпляр нашего главного объекта, мы создаем прототип
// и в нем будут доступны все методы

// Как добавить метод в объект?
Car.prototype.start = function () {
    console.log(`${this.brand} - start!`);
}
Car.prototype.stop = function() {
    console.log(`${this.brand} - stop!`);
}
// этот метод мы можем увидеть и в tesla и в lada, то есть этот метод унаследуется 
// всем экземплярам главного объекта Car, и если мы его переопределим
// он так же обновится во всех других экземплярах
// Если мы в консоли откроем экземпляры Car, и сам Car , мы увидим, что этого метода в объекте нет
// в них будут те свойства, которые мы прописали, а их мы найдем в Prototype, и они
// будут доступны для экземпляров


