import { useState, useEffect } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  // Effettua la ricerca automaticamente dopo un breve ritardo (debounce)
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query);
    }, 300); // 300ms di ritardo per evitare troppe chiamate API

    return () => clearTimeout(timer);
  }, [query, onSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ora il submit non fa nulla perché la ricerca è automatica
  };

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      setQuery('');
      onSearch('');
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className={`search-form ${isExpanded ? 'expanded' : ''}`} role="search">
        <button
          type="button"
          className="search-icon-btn"
          onClick={handleToggle}
          aria-label={isExpanded ? 'Chiudi ricerca' : 'Apri ricerca'}
          aria-expanded={isExpanded}
        >
          <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        {isExpanded && (
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Cerca film..."
            className="search-input"
            autoFocus
            aria-label="Campo di ricerca film"
          />
        )}
      </form>
    </div>
  );
};

export default SearchBar;
