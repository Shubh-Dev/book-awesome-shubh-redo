let myArrOfBooks = [];
function addBookLocalStorage() {
    const myBookInput = document.querySelector('.title-holder').value;
    const myAuthorInput = document.querySelector('.author-holder').value;
    localStorage.setItem('title', JSON.stringify(myBookInput));
    localStorage.setItem('author', JSON.stringify(myAuthorInput));
};

const myBookAddButton = document.querySelector('.main-btn');
myBookAddButton.addEventListener('click', () => {
    addBookLocalStorage();
    preventDefault();
});



// const bookContainer = document.querySelector('.book-container');
// function addBookFunc() {
    
//     for(let i = 0; i < myArrOfBooks.length; i++) {
//         const innerBookHolder = document.createElement('div');
//         innerBookHolder.className = 'inner-book-holder';
//         const paragraph = document.createElement('p');
//         paragraph.textContent= myArrOfBooks[i].title +  '  by  ' + myArrOfBooks[i].author;
//         const removeButton = document.createElement('button');
//         removeButton.innerHTML = 'Remove';
//         innerBookHolder.appendChild(paragraph);
//         innerBookHolder.appendChild(removeButton);
//         bookContainer.appendChild(innerBookHolder);
//     };  
// };

// addBookFunc();


