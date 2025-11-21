import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPopularMovies } from '../api/tmdb';
import './HeroBanner.css';

const HeroBanner = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFeaturedMovie = async () => {
      try {
        const response = await getPopularMovies();
        const movies = response.data.results;
        // Seleziona un film casuale tra i primi 5
        const randomMovie = movies[Math.floor(Math.random() * Math.min(5, movies.length))];
        setMovie(randomMovie);
      } catch (error) {
        console.error('Errore nel caricamento del film in evidenza:', error);
      } finally {
        setLoading(false);
      }
    };

    loadFeaturedMovie();
  }, []);

  const truncateText = (text, maxLength) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  const handleDetailsClick = () => {
    if (movie) {
      navigate(`/movie/${movie.id}`);
    }
  };

  if (loading || !movie) {
    return (
      <div className="hero-banner skeleton">
        <div className="hero-overlay"></div>
      </div>
    );
  }

  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';
  const backdropUrl = movie.backdrop_path
    ? `${IMAGE_BASE_URL}${movie.backdrop_path}`
    : `${IMAGE_BASE_URL}${movie.poster_path}`;

  return (
    <div className="hero-banner">
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${backdropUrl})` }}
      ></div>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">{movie.title || movie.name}</h1>

        <div className="hero-info">
          <span className="hero-rating">★ {movie.vote_average.toFixed(1)}</span>
          <span className="hero-year">
            {movie.release_date ? new Date(movie.release_date).getFullYear() : ''}
          </span>
        </div>

        <p className="hero-description">
          {truncateText(movie.overview, 200)}
        </p>

        <div className="hero-buttons">
          <button
            className="hero-btn play-btn"
            onClick={handleDetailsClick}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z"/>
            </svg>
            Riproduci
          </button>

          <button
            className="hero-btn info-btn"
            onClick={handleDetailsClick}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="16" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
            Maggiori informazioni
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
