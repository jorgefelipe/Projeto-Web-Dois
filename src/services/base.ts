import axios from 'axios';

const api = axios.create({ baseURL: 'https://reqres.in/' });

export const apiMovies = axios.create({ baseURL: 'http://api.tvmaze.com/' });

export default api;
