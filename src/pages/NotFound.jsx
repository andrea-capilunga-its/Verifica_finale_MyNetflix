import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFilm, FaHome, FaSearch } from 'react-icons/fa';

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

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated 404 */}
        <div className="mb-8 relative">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent animate-pulse">
            404
          </h1>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <FaFilm className="text-6xl text-gray-800 animate-spin-slow" />
          </div>
        </div>

        {/* Error Message */}
        <h2 className="text-4xl font-bold mb-4">Oops! Pagina non trovata</h2>
        <p className="text-xl text-gray-400 mb-8">
          Sembra che il film che stai cercando non esista nel nostro catalogo.
        </p>

        {/* Fun Message */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 mb-8 border border-gray-700">
          <p className="text-lg text-gray-300 mb-2">
            🎬 Questa pagina è come un film mai prodotto...
          </p>
          <p className="text-gray-400">
            Non esiste ancora, ma puoi trovare migliaia di film nella nostra home!
          </p>
        </div>

        {/* Countdown */}
        <div className="mb-8">
          <p className="text-gray-400 mb-2">
            Verrai reindirizzato alla home tra:
          </p>
          <div className="text-6xl font-bold text-red-600 animate-pulse">
            {countdown}
          </div>
          <p className="text-sm text-gray-500 mt-2">secondi</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 w-full sm:w-auto justify-center"
          >
            <FaHome />
            Torna alla Home
          </Link>
          <Link
            to="/favourites"
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 w-full sm:w-auto justify-center"
          >
            <FaSearch />
            I Miei Preferiti
          </Link>
        </div>

        {/* Suggestions */}
        <div className="mt-12 text-left bg-gray-800/30 rounded-lg p-6 border border-gray-700/50">
          <h3 className="text-xl font-semibold mb-4 text-center">
            💡 Suggerimenti:
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              <span>Controlla che l'URL sia corretto</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              <span>Usa la barra di ricerca per trovare film</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              <span>Esplora i film popolari nella homepage</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-1">•</span>
              <span>Controlla la tua lista dei preferiti</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
