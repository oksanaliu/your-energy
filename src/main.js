import './js/api';
import './js/modal-exercises';
import './js/modal-rating';
import './js/quote';
import './js/filters';
import './js/search';
import './js/exercises';
import { showCategories } from './js/categories';
import './js/favorites';
import './js/mobile-menu';
import './js/header';

showCategories('Muscles', 1)
  .then(pages =>
    console.log(
      `Execute function for pagination with parameter ${JSON.stringify(pages)}`
    )
  )
  .catch(err => console.log(err));
