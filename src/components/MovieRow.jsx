import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieRow.css';
import arrowIcon from '../assets/img/scroll-arrow-svgrepo-com.svg';

const MovieRow = ({ title, fetchMovies }) => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const rowRef = useRef(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const response = await fetchMovies();
        setMovies(response.data.results);
      } catch (error) {
        console.error('Errore nel caricamento dei film:', error);
      }
    };

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

  return (
    <div className="movie-row">
      <h2 className="row-title">{title}</h2>

      <div className="row-container">
        <button className="arrow-btn left" onClick={() => scroll('left')}>
          <img src={arrowIcon} alt="Scorri sinistra" className="arrow-icon left-arrow" />
        </button>
        <div className="row-posters" ref={rowRef}>
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="movie-card"
              onClick={() => handleMovieClick(movie.id)}
            >
              <img
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
              <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-rating">★ {movie.vote_average.toFixed(1)}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="arrow-btn right" onClick={() => scroll('right')}>
          <img src={arrowIcon} alt="Scorri destra" className="arrow-icon right-arrow" />
        </button>
      </div>
    </div>
  );
};

export default MovieRow;
