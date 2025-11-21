import { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    // Se il testo viene cancellato completamente, torna alla homepage
    if (newQuery.trim() === '') {
      onSearch('');
    }
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
      <form onSubmit={handleSubmit} className={`search-form ${isExpanded ? 'expanded' : ''}`}>
        <button
          type="button"
          className="search-icon-btn"
          onClick={handleToggle}
        >
          <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          />
        )}
      </form>
    </div>
  );
};

export default SearchBar;
