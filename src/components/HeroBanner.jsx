import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPopularMovies } from '../api/tmdb';
import ErrorMessage from './ErrorMessage';
import './HeroBanner.css';

const HeroBanner = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadFeaturedMovie = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getPopularMovies();
      const movies = response.data.results;
      const randomMovie = movies[Math.floor(Math.random() * Math.min(5, movies.length))];
      setMovie(randomMovie);
    } catch (error) {
      setError('Impossibile caricare il film in evidenza.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
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

  if (loading) {
    return (
      <div className="hero-banner skeleton">
        <div className="hero-overlay"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="hero-banner error">
        <ErrorMessage message={error} onRetry={loadFeaturedMovie} />
      </div>
    );
  }

  if (!movie) {
    return null;
  }

  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';
  const backdropUrl = movie.backdrop_path || movie.poster_path
    ? `${IMAGE_BASE_URL}${movie.backdrop_path || movie.poster_path}`
    : null;

  return (
    <div className="hero-banner">
      <div
        className="hero-background"
        style={{
          backgroundImage: backdropUrl
            ? `url(${backdropUrl})`
            : 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
        }}
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
