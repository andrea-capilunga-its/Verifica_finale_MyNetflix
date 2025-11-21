import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">
              <span className="logo-my">My</span>
              <span className="logo-netflix">Netflix</span>
            </h3>
            <p className="footer-description">
              La tua piattaforma personale per scoprire e salvare i tuoi film preferiti.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Menu</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/favourites">Preferiti</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Informazioni</h4>
            <ul className="footer-links">
              <li><a href="#about">Chi siamo</a></li>
              <li><a href="#contact">Contatti</a></li>
              <li><a href="#privacy">Privacy</a></li>
              <li><a href="#terms">Termini di servizio</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Social</h4>
            <ul className="footer-links">
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#twitter">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} MyNetflix. Tutti i diritti riservati.
          </p>
          <p className="footer-credits">
            Powered by <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">TMDB</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
