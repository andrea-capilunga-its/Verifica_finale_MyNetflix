import { useNavigate } from 'react-router-dom';
import { useFavourites } from '../context/FavouritesContext';
import ImageWithFallback from '../components/ImageWithFallback';
import './Favourites.css';

const Favourites = () => {
  const { favourites, removeFavourite } = useFavourites();
  const navigate = useNavigate();

  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  const handleRemove = (e, movieId) => {
    e.stopPropagation();
    removeFavourite(movieId);
  };

  if (favourites.length === 0) {
    return (
      <div className="favourites-empty">
        <h1>I Miei Preferiti</h1>
        <div className="empty-state">
          <p className="empty-icon">❤️</p>
          <p className="empty-text">Non hai ancora aggiunto film ai preferiti</p>
          <button className="browse-btn" onClick={() => navigate('/')}>
            Esplora i film
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="favourites-page">
      <div className="favourites-header">
        <h1>I Miei Preferiti</h1>
        <p className="favourites-count">{favourites.length} {favourites.length === 1 ? 'film' : 'film'}</p>
      </div>

      <div className="favourites-grid">
        {favourites.map((movie) => (
          <div
            key={movie.id}
            className="favourite-card"
            onClick={() => handleMovieClick(movie.id)}
          >
            <ImageWithFallback
              src={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : null}
              alt={movie.title}
              className="favourite-poster"
              fallbackType="poster"
            />
            <button
              className="remove-btn"
              onClick={(e) => handleRemove(e, movie.id)}
              title="Rimuovi dai preferiti"
            >
              ×
            </button>
            <div className="favourite-info">
              <h3 className="favourite-title">{movie.title}</h3>
              <div className="favourite-meta">
                <span className="favourite-rating">★ {movie.vote_average.toFixed(1)}</span>
                {movie.release_date && (
                  <span className="favourite-year">
                    {new Date(movie.release_date).getFullYear()}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
