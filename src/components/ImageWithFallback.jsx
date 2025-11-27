import { useState } from 'react';
import './ImageWithFallback.css';

const ImageWithFallback = ({ src, alt, className, fallbackType = 'poster' }) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  if (imageError || !src) {
    return (
      <div className={`image-fallback ${fallbackType} ${className || ''}`}>
        <svg
          className="fallback-icon"
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          {fallbackType === 'poster' ? (
            <>
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <path d="M21 15l-5-5L5 21"/>
            </>
          ) : (
            <>
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </>
          )}
        </svg>
        <p className="fallback-text">{alt || 'Immagine non disponibile'}</p>
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div className={`image-skeleton ${className || ''}`}>
          <div className="shimmer"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className || ''} ${isLoading ? 'hidden' : ''}`}
        onError={handleError}
        onLoad={handleLoad}
      />
    </>
  );
};

export default ImageWithFallback;
