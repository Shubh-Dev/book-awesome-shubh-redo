import Books from './class.js';

const bookTitle = document.querySelector('.title-holder');
const bookAuthor = document.querySelector('.author-holder');
const addButton = document.querySelector('.main-btn');
const bookContainer = document.querySelector('.book-container');

export default class BookMethods {
  constructor() {
    this.list = JSON.parse(localStorage.getItem('bookData')) || [];
  }

  addBook() {
    addButton.addEventListener('click', () => {
      // debugger
      const newBook = new Books(bookTitle.value, bookAuthor.value);
      this.list.push(newBook);
      localStorage.setItem('bookData', JSON.stringify(this.list));
      this.displayBook(bookTitle.value, bookAuthor.value);
    });
    localStorage.setItem('bookData', JSON.stringify(this.list));
    this.localstorage();
  }

  displayBook(title, author, id) {
    if (title === '' || author === '') {
      return;
    }
    bookContainer.innerHTML += `<div class="inner-container"> 
        <p class="inner-para">${title} <span class="inner-span">by</span> ${author}</p>
        <button class = 'inner-button' id=${id}>Remove</button>
        </div>`;
    const removeBook = document.querySelectorAll('.inner-button');
    removeBook.forEach((button) => {
      button.addEventListener('click', () => {
        this.list = this.list.filter((book) => book.id !== Number(button.id));

        bookContainer.innerHTML = '';
        this.list.forEach((book) => {
          this.displayBook(book.title, book.author, book.id);
        });
        localStorage.setItem('bookData', JSON.stringify(this.list));
      });
    });
    localStorage.setItem('bookData', JSON.stringify(this.list));
  }

  localstorage() {
    if (localStorage !== null) {
      const storeData = JSON.parse(localStorage.getItem('bookData'));
      storeData.forEach((book) => {
        this.displayBook(book.title, book.author, book.id);
      });
    }
  }
}