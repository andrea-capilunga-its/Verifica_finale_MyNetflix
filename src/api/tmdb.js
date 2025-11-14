import axios from 'axios';

const API_KEY = 'ca574060c7a0abdc10d5407e5b379d8d'; // Sostituire con la propria chiave API
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

export default tmdb;
