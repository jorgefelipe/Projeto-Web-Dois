import { apiMovies as api } from './base';

const getMovies = (search: string) =>
  api.get('/search/shows', { params: { q: search } });

export { getMovies };
