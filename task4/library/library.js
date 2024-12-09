class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.status = 'available';
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook = (book) => {
    this.books.push(book);
  }

  borrowBook = (isbn) => {
    const book = this.books.find(b => b.isbn === isbn);
    if (book && book.status === 'available') {
      book.status = 'borrowed';
      return `Вы взяли книгу: ${book.title}`;
    }
    return 'Книга не найдена или уже взята';
  }

  returnBook = (isbn) => {
    const book = this.books.find(b => b.isbn === isbn);
    if (book && book.status === 'borrowed') {
      book.status = 'available';
      return `Вы вернули книгу: ${book.title}`;
    }
    return 'Книга не найдена или не была взята';
  }

  listAvailableBooks = () => {
    const availableBooks = this.books.filter(book => book.status === 'available');
    if (availableBooks.length === 0) {
      return 'Нет доступных книг';
    }
    return availableBooks.map(book => `${book.title} (${book.author})`).join(', ');
  }
}

const book1 = new Book('Война и мир', 'Лев Толстой', '978-3-16-148410-0');
const book2 = new Book('Убийство в Восточном экспрессе', 'Агата Кристи', '978-0-06-269366-2');
const book3 = new Book('Гарри Поттер и философский камень', 'Джоан Роулинг', '978-0-7432-9782-1');

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

console.log(library.listAvailableBooks()); 
console.log(library.borrowBook('978-3-16-148410-0')); 
console.log(library.listAvailableBooks()); 
console.log(library.returnBook('978-3-16-148410-0')); 
console.log(library.listAvailableBooks());
