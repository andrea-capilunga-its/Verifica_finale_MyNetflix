import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo MyNetflix */}
        <div className="logo">
          <span className="logo-my">MY</span>
          <span className="logo-netflix">NETFLIX</span>
        </div>

        {/* Navigation Menu */}
        <ul className="nav-menu">
          <li className="nav-item active">Home</li>
          <li className="nav-item">Serie TV</li>
          <li className="nav-item">Film</li>
          <li className="nav-item">Nuovi e popolari</li>
          <li className="nav-item">La mia lista</li>
        </ul>

        {/* Right Side */}
        <div className="nav-right">
          <button className="icon-btn">
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          <button className="icon-btn">
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>

          <div className="profile">
            <div className="profile-avatar">U</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
