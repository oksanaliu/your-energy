import axios from 'axios';
import { API_ENDPOINT } from './settings.js';

axios.defaults.baseURL = API_ENDPOINT;

export const fetchCategories = (filter, page, perPage) => {
  const requestParams = {
    filter: filter,
    page: page,
    limit: perPage,
  };
  return axios.get(`/filters`, { params: requestParams });
};
