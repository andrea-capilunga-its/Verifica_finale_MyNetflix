import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieRow.css';
import arrowIcon from '../assets/img/scroll-arrow-svgrepo-com.svg';
import SkeletonCard from './skeletons/SkeletonCard';
import ErrorMessage from './ErrorMessage';
import ImageWithFallback from './ImageWithFallback';

const MovieRow = ({ title, fetchMovies }) => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const rowRef = useRef(null);

  const loadMovies = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetchMovies();
      setMovies(response.data.results);
    } catch (error) {
      setError('Impossibile caricare i film. Verifica la tua connessione.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMovies();
  }, [fetchMovies]);

  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  const scroll = (direction) => {
    const scrollAmount = direction === 'left' ? -400 : 400;
    rowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  if (error) {
    return (
      <div className="movie-row">
        <h2 className="row-title">{title}</h2>
        <ErrorMessage message={error} onRetry={loadMovies} />
      </div>
    );
  }

  return (
    <div className="movie-row" role="region" aria-label={title}>
      <h2 className="row-title">{title}</h2>

      <div className="row-container">
        <button
          className="arrow-btn left"
          onClick={() => scroll('left')}
          aria-label={`Scorri ${title} a sinistra`}
        >
          <img src={arrowIcon} alt="" className="arrow-icon left-arrow" aria-hidden="true" />
        </button>
        <div className="row-posters" ref={rowRef} role="list">
          {loading ? (
            [...Array(8)].map((_, index) => <SkeletonCard key={index} />)
          ) : (
            movies.map((movie) => (
              <div
                key={movie.id}
                className="movie-card"
                onClick={() => handleMovieClick(movie.id)}
                role="listitem"
                tabIndex="0"
                onKeyDown={(e) => e.key === 'Enter' && handleMovieClick(movie.id)}
                aria-label={`${movie.title}, valutazione ${movie.vote_average.toFixed(1)} stelle`}
              >
                <ImageWithFallback
                  src={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : null}
                  alt={`Poster di ${movie.title}`}
                  className="movie-poster"
                  fallbackType="poster"
                  loading="lazy"
                />
                <div className="movie-info">
                  <h3 className="movie-title">{movie.title}</h3>
                  <p className="movie-rating" aria-label={`Valutazione: ${movie.vote_average.toFixed(1)} su 10`}>★ {movie.vote_average.toFixed(1)}</p>
                </div>
              </div>
            ))
          )}
        </div>
        <button
          className="arrow-btn right"
          onClick={() => scroll('right')}
          aria-label={`Scorri ${title} a destra`}
        >
          <img src={arrowIcon} alt="" className="arrow-icon right-arrow" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default MovieRow;
