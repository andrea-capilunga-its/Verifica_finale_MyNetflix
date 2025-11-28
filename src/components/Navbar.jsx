import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useFavourites } from '../context/FavouritesContext';
import './Navbar.css';

const Navbar = ({ onSearch }) => {
  const location = useLocation();
  const { favourites } = useFavourites();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    onSearch('');
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo MyNetflix */}
        <Link to="/" className="logo" onClick={handleLogoClick}>
          <span className="logo-my">MY</span>
          <span className="logo-netflix">NETFLIX</span>
        </Link>

        {/* Navigation Menu */}
        <ul className="nav-menu">
          <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/favourites' ? 'active' : ''}`}>
            <Link to="/favourites">La mia lista</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
            <Link to="/about">About</Link>
          </li>
        </ul>

        {/* Right Side */}
        <div className="nav-right">
          <SearchBar onSearch={onSearch} />

          <Link to="/favourites" className="favourites-link">
            <button className="icon-btn">
              <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              {favourites.length > 0 && (
                <span className="favourites-badge">{favourites.length}</span>
              )}
            </button>
          </Link>

          <div className="profile">
            <div className="profile-avatar">U</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
