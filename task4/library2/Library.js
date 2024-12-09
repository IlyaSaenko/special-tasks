export class Library {
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

    const availableBooksList = availableBooks.map(book => `${book.title} (${book.author})`).join(', ');

    return availableBooksList;
  }
}
