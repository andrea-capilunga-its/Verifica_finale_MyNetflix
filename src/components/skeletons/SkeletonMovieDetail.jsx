import './SkeletonMovieDetail.css';

const SkeletonMovieDetail = () => {
  return (
    <div className="skeleton-movie-detail">
      <div className="skeleton-backdrop"></div>

      <div className="skeleton-content">
        <div className="skeleton-poster-section">
          <div className="skeleton-detail-poster"></div>
        </div>

        <div className="skeleton-info-section">
          <div className="skeleton-detail-title"></div>
          <div className="skeleton-meta-row">
            <div className="skeleton-meta-item"></div>
            <div className="skeleton-meta-item"></div>
            <div className="skeleton-meta-item"></div>
          </div>
          <div className="skeleton-genres-row">
            <div className="skeleton-genre"></div>
            <div className="skeleton-genre"></div>
            <div className="skeleton-genre"></div>
          </div>
          <div className="skeleton-overview">
            <div className="skeleton-line"></div>
            <div className="skeleton-line"></div>
            <div className="skeleton-line"></div>
            <div className="skeleton-line short"></div>
          </div>
          <div className="skeleton-button"></div>

          <div className="skeleton-cast-section">
            <div className="skeleton-cast-title"></div>
            <div className="skeleton-cast-grid">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="skeleton-cast-card">
                  <div className="skeleton-cast-photo"></div>
                  <div className="skeleton-cast-name"></div>
                  <div className="skeleton-character-name"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonMovieDetail;
