/* eslint-disable no-unused-vars */
import { sectionBookList, sectionAddBook, sectionContact } from './modules/nav.js';
/* eslint-enable */
import BookMethods from './modules/methodClass.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

const newBookMethod = new BookMethods();
newBookMethod.addBook();

document.querySelector('.date').innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
