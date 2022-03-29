import { Books } from './modules/class.js';
import { sectionBookList } from './modules/nav.js';
import { sectionAddBook } from './modules/nav.js';
import { sectionContact } from './modules/nav.js';
import { BookMethods } from './modules/methodClass.js';

const newBookMethod = new BookMethods();
newBookMethod.addBook();

