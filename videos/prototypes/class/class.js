console.log('hi');

const animal = {
    name: 'Animal',
    age: 5,
    hasTail: true,
}

console.log(animal);

// class позволяют более удобно создавать подобные объекты

class Animal {

    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.hasTale = options.hasTail
    }
    // реализуем метод внутри класса, и н сразу попадет в прототип
    voice() {
        console.log('I am animal')
    }
    // можем реализовывать какие-то статические методлы или переменные с помощью
    // ключевого слова static, такая переменная доступна только у самого класса 
    // если мы вызовем animal.type - получим undefined, а если вызовем Animal.type
    // то получим значение ('ANIMAL')
    static type = 'ANIMAL'

}

const animal1 = new Animal({
    name: 'Animal',
    age: 5,
    hasTail: true,
})

console.log(animal1);

// метод класса сразу попал в прототип

// Почему классы могут быть удобными? 
// Мы можем устраивать при помощи них полноценное наследование

class Cat extends Animal {
    static type = 'CAT'

    constructor(options) {
        super(options)
        this.color = options.color
    }

    voice() {
        super.voice()
        console.log('I am cat');
    }

    get ageInfo() {
        return this.age*7
    }

    set ageInfo(newAge) {
        this.age = newAge
    }
};

const cat = new Cat({
    name: 'Cat',
    age: 7,
    hasTail: true,
    color: 'black',
})

console.log(cat);
console.log(cat.ageInfo); //это не метод, это геттер, мы образаеммся к нему как к полю без ()
console.log(cat.ageInfo = 8); //через сеттерп присваиваем новое значение 
console.log(cat.ageInfo); //получаем результат через геттер

// Т.О. мы можем вызывать методы, которые есть у родительского класса 

console.log(cat.voice());

// если мы просто добавим в cat строку color: black, то при обращении конкретно к 
// cat.color мыне получим ничего и в консоли этого свойства у кошки не будет
// для этого, чтобы такое свойство было только у кошки, нам необходимо добавлять 
// constructor внутри extends, но есть загвоздка
// когда мы добавляем конструктор в дочерний класс, который наследуется от родительского класса
// мы для начала должны вызвать родительский конструктор при помощи ключевого слова super
// constructor(options) {
//     super(options)
//     this.color = options.color
// }
// 
// в дочернем классе мы можем переписывать некоторые родительские методы, и 
// и переписанный метолд в дочернем классе перетирает родительский метод
// но иногда нам нужно вызвать родительский метод, то мы так же используем слово super
// но вызываем как объект super.method()

//  в классах реализуются геттеры и сеттеры, при помощи слов get и set соответственно


// Практический пример

class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide() {
        this.$el.style.display = 'none'
    }

    show() {
        this.$el.style.display = 'block'
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector)

        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red',
})

const box2 = new Box({
    selector: '#box2',
    size: 200,
    color: 'yellow',
})

box1.hide()
box1.show()
box2.hide()
box2.show()

class Circle extends Box {
    constructor(options) {
        super(options) 

        this.$el.style.borderRadius = '50%'
    }
}

const c = new Circle({
    selector: '#circle',
    size: 90,
    color: 'blue'
})

c.hide();
c.show();