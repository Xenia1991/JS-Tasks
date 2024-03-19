function Book(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.reader = null;
}

Book.prototype = {
    isAvailable () {
        if (this.reader !== null) {
            return false;
        } else {
            return true;
        }
    },
    takeBook (readerName) {
        if(this.isAvailable()) {
            this.reader = readerName;
            return true;
        } else {
            return false;
        }
    },
    returnBook () {
        if (this.reader !== null) {
            this.reader = null;
            return true;
        } else {
            return false;
        }
    },
    changeBookName (newBookName) {
        if (this.name) {
            this.name = newBookName;
            return true;
        } else {
            return false;
        }
    },
    changeAuthorName (newAuthorName) {
        if (this.author) {
            this.author = newAuthorName;
            return true;
        } else {
            return false;
        }
    },
    getCurrentReader () {
        return this.reader;
    }
}


const book1 = new Book('Капитанская дочь', 'А.С.Пушкин', '1975');
console.log(book1);
book1.isAvailable();
book1.getCurrentReader();
book1.takeBook('Oleg Andreev');
book1.getCurrentReader();
console.log(book1.reader);
book1.returnBook();
console.log(book1.reader);
book1.changeAuthorName('Н.В.Гоголь');
console.log(book1.author);
book1.changeAuthorName('А.С.Пушкин');
console.log(book1.author);
book1.changeBookName('Вечера на Хуторе близ Диканьки');
book1.changeAuthorName('Н.В.Гоголь');
console.log(book1.author, book1.name);
book1.changeBookName('Повести Белкина');
book1.changeAuthorName('А.С.Пушкин');
console.log(book1.author, book1.name);
book1.isAvailable();
book1.getCurrentReader();
console.log(book1.reader);
book1.takeBook('Xenia Andreeva');
book1.getCurrentReader();

/*
Реализуйте функционал для работы с книгами в библиотеке:

создание книги(добавление новой книги в библиотеку)
Выдача книги читателю
Получение книги от читателя
Получение у кого книга сейчас находится

Необходимо создать контруктор объектов Book, который будет создавать объекты со следующими полями:

name - имя книги
author - имя автора
year - год книги
reader - текущий читатель книги(у кого она на руках) - если она сейчас свободна - должно быть равно null

Необходимо реализовать на прототипе следующие методы работы с книгой:

+isAvailable() // true/false - доступна ли книга для выдачи или она у кого-то на руках
+takeBook(readerName) - должен выдавать книгу читателю, если она доступна для выдачи и записывать его имя в reader, возвращает true, 
если выдача книги возможна и она произведена, false, если книга уже выдана
+returnBook() - регистрирует возврат книги, устанавливает reader в null, возвращает true, если книга была на руках, false если книга итак в библиотеке
+changeBookName(newBookName) - изменяет название книги на newBookName, возвращает true/false, в зависимости от результата
+changeAuthorName(newAuthorName) - изменяет имя автора на newAuthorName, возвращает true/false в зависимости от результата
+getCurrentReader() - возвращает имя текущего читателя или null, если книга доступна для выдачи
*/