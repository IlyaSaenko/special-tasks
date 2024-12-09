import { Book } from './Book.js';
import { Library } from './Library.js';

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
