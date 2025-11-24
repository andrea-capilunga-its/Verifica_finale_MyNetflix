import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'it-IT',
  },
});

export const getPopularMovies = () => tmdb.get('/movie/popular');

export const getTopRatedMovies = () => tmdb.get('/movie/top_rated');

export const getTrendingMovies = () => tmdb.get('/trending/movie/week');

export const searchMovies = (query) => tmdb.get('/search/movie', {
  params: {
    query: query,
  }
});

export const getMovieDetails = (movieId) => tmdb.get(`/movie/${movieId}`);
export const getMovieCredits = (movieId) => tmdb.get(`/movie/${movieId}/credits`);

export default tmdb;
