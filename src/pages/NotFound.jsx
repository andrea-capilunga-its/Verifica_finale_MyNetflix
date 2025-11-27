import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Cleanup
    return () => clearInterval(timer);
  }, [navigate]);

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="notfound-page">
      <div className="notfound-container">
        <div className="error-code">404</div>
        <h1 className="error-title">Oops! Pagina non trovata</h1>
        <p className="error-description">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>

        <div className="notfound-animation">
          <div className="film-strip">
            <div className="film-frame"></div>
            <div className="film-frame"></div>
            <div className="film-frame"></div>
            <div className="film-frame"></div>
          </div>
          <p className="film-text">Nessun film trovato qui...</p>
        </div>

        <div className="redirect-info">
          <p className="countdown-text">
            Redirect automatico alla home tra{' '}
            <span className="countdown-number">{countdown}</span> secondi
          </p>
        </div>

        <div className="notfound-actions">
          <button onClick={handleGoHome} className="btn-primary">
            Vai alla Home
          </button>
          <Link to="/favourites" className="btn-secondary">
            I Miei Preferiti
          </Link>
        </div>

        <div className="suggestions">
          <p className="suggestions-title">Prova invece:</p>
          <div className="suggestions-links">
            <Link to="/" className="suggestion-link">
              🏠 Homepage
            </Link>
            <Link to="/favourites" className="suggestion-link">
              ❤️ Preferiti
            </Link>
            <Link to="/about" className="suggestion-link">
              ℹ️ About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
