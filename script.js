class Books {
  constructor(title, author) {
      this.title = title;
      this.author = author;
      this.id = Date.now();
  };
};
const bookTitle = document.querySelector('.title-holder');
const bookAuthor = document.querySelector('.author-holder');
const addButton = document.querySelector('.main-btn');
const bookContainer  = document.querySelector('.book-container')

class BookMethods {
    constructor() {
        this.list = JSON.parse(localStorage.getItem('bookData'))|| [];
    };
    
    addBook() {
        addButton.addEventListener('click', () => {
            // debugger
            const newBook = new Books(bookTitle.value, bookAuthor.value);
            this.list.push(newBook);
            localStorage.setItem('bookData', JSON.stringify(this.list));
            this.displayBook(bookTitle.value, bookAuthor.value);

        });
        // localStorage.setItem('bookData', JSON.stringify(this.list));
        this.localstorage();
    };

    displayBook(title, author, id) {
        bookContainer.innerHTML += `<div class="inner-container"> 
        <p>${title} by ${author}</p>
        <button class = 'inner-button' id=${id}>Remove</button>
        </div>`
        const removeBook = document.querySelectorAll('.inner-button');
        removeBook.forEach((button) => {
            button.addEventListener('click', () => {
                this.list = this.list.filter((book) => {
                    book.id !== button.id;
                })
            });
        });
        // localStorage.setItem('bookData', JSON.stringify(this.list));
    };
    localstorage() {
        if(localStorage !== null) {
          const storeData = JSON.parse(localStorage.getItem('bookData'));
          storeData.forEach((book) => {
            this.displayBook(book.title, book.author, book.id);
          });
        };
    };

};

const newBookMethod = new BookMethods();
newBookMethod.addBook();

