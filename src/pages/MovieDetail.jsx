import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieDetails, getMovieCredits } from '../api/tmdb';
import { useFavourites } from '../context/FavouritesContext';
import SkeletonMovieDetail from '../components/skeletons/SkeletonMovieDetail';
import './MovieDetail.css';

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isFavourite, toggleFavourite } = useFavourites();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovieData = async () => {
      try {
        setLoading(true);
        const [movieResponse, creditsResponse] = await Promise.all([
          getMovieDetails(id),
          getMovieCredits(id)
        ]);

        setMovie(movieResponse.data);
        setCast(creditsResponse.data.cast.slice(0, 10));
      } catch (error) {
        console.error('Errore nel caricamento dei dettagli:', error);
      } finally {
        setLoading(false);
      }
    };

    loadMovieData();
  }, [id]);

  if (loading) {
    return <SkeletonMovieDetail />;
  }

  if (!movie) {
    return <div className="error-message">Film non trovato</div>;
  }

  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';
  const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500';
  const PROFILE_BASE_URL = 'https://image.tmdb.org/t/p/w185';

  const handleFavouriteClick = () => {
    toggleFavourite({
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      vote_average: movie.vote_average,
      release_date: movie.release_date
    });
  };

  return (
    <div className="movie-detail">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Indietro
      </button>

      <div
        className="movie-backdrop"
        style={{
          backgroundImage: `url(${IMAGE_BASE_URL}${movie.backdrop_path})`
        }}
      >
        <div className="backdrop-overlay"></div>
      </div>

      <div className="movie-content">
        <div className="movie-poster-section">
          <img
            src={`${POSTER_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
            className="detail-poster"
          />
        </div>

        <div className="movie-info-section">
          <h1 className="detail-title">{movie.title}</h1>

          <div className="movie-meta">
            <span className="rating">★ {movie.vote_average.toFixed(1)}</span>
            <span className="release-date">
              {new Date(movie.release_date).getFullYear()}
            </span>
            <span className="runtime">{movie.runtime} min</span>
          </div>

          <div className="genres">
            {movie.genres.map((genre) => (
              <span key={genre.id} className="genre-badge">
                {genre.name}
              </span>
            ))}
          </div>

          <p className="overview">{movie.overview}</p>

          <button
            className={`favourite-btn ${isFavourite(movie.id) ? 'active' : ''}`}
            onClick={handleFavouriteClick}
          >
            {isFavourite(movie.id) ? '❤️ Rimuovi dai preferiti' : '🤍 Aggiungi ai preferiti'}
          </button>

          <div className="cast-section">
            <h2 className="cast-title">Cast Principale</h2>
            <div className="cast-grid">
              {cast.map((actor) => (
                <div key={actor.id} className="cast-card">
                  {actor.profile_path ? (
                    <img
                      src={`${PROFILE_BASE_URL}${actor.profile_path}`}
                      alt={actor.name}
                      className="cast-photo"
                    />
                  ) : (
                    <div className="cast-photo-placeholder">
                      {actor.name.charAt(0)}
                    </div>
                  )}
                  <div className="cast-info">
                    <p className="actor-name">{actor.name}</p>
                    <p className="character-name">{actor.character}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
