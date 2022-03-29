const sectionBookList = document.querySelector('.books-list');
sectionBookList.addEventListener('click', () => {
  const firstSection = document.querySelector('.section-1');
  firstSection.style.display = 'block';
  const secondSection = document.querySelector('.section-2');
  secondSection.style.display = 'none';
  const thirdSection = document.querySelector('.section-3');
    thirdSection.style.display = 'none';
});

const sectionAddBook = document.querySelector('.add-book');
sectionAddBook.addEventListener('click', () => {
    const secondSection = document.querySelector('.section-2');
    secondSection.style.display = 'block';
    const firstSection = document.querySelector('.section-1');
    firstSection.style.display = 'none';
    const thirdSection = document.querySelector('.section-3');
    thirdSection.style.display = 'none';
});

const sectionContact = document.querySelector('.contact');
sectionContact.addEventListener('click', () => {
    const thirdSection = document.querySelector('.section-3');
    thirdSection.style.display = 'block';
    const firstSection = document.querySelector('.section-1');
    firstSection.style.display = 'none';
    const secondSection = document.querySelector('.section-2');
    secondSection.style.display = 'none';
})

export {sectionBookList, sectionAddBook, sectionContact};