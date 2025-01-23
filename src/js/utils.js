'use strict';

import { CATEGORIES_ON_PAGE, EXERCISES_ON_PAGE } from './settings.js';

export const getResolution = () => {
  const width = window.innerWidth;
  return width < 768 ? 'mobile' : width < 1440 ? 'tablet' : 'desktop';
};

export const getGategoriesOnPage = () => CATEGORIES_ON_PAGE[getResolution()];

export const getExercisesOnPage = () => EXERCISES_ON_PAGE[getResolution()];
