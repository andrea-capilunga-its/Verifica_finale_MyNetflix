import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-title">Su MyNetflix</h1>

        <section className="about-section">
          <h2>Il Progetto</h2>
          <p>
            MyNetflix è un progetto React che simula una piattaforma di streaming.
            I dati sui film provengono da TMDB (The Movie Database).
          </p>
        </section>

        <section className="about-section">
          <h2>Cosa puoi fare</h2>
          <ul className="features-list">
            <li>Scoprire film popolari e in tendenza</li>
            <li>Cercare film specifici</li>
            <li>Vedere dettagli e cast dei film</li>
            <li>Salvare i tuoi film preferiti</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Stack Tecnologico</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <h3>React</h3>
              <p>Libreria JavaScript</p>
            </div>
            <div className="tech-card">
              <h3>React Router</h3>
              <p>Navigazione tra pagine</p>
            </div>
            <div className="tech-card">
              <h3>Vite</h3>
              <p>Build tool</p>
            </div>
            <div className="tech-card">
              <h3>TailwindCSS</h3>
              <p>Styling CSS</p>
            </div>
            <div className="tech-card">
              <h3>Axios</h3>
              <p>Chiamate HTTP</p>
            </div>
            <div className="tech-card">
              <h3>TMDB API</h3>
              <p>Database film</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Note Tecniche</h2>
          <p>
            Progetto realizzato come esercitazione React.
          </p>
          <ul className="features-list">
            <li>Context API per lo stato globale</li>
            <li>React Router per il routing</li>
            <li>LocalStorage per salvare i preferiti</li>
            <li>Design responsive</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Credits</h2>
          <p className="api-credits">
            I dati sui film sono forniti da{' '}
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="tmdb-link"
            >
              TMDB
            </a>
          </p>
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="TMDB Logo"
            className="tmdb-logo"
          />
        </section>

        <div className="about-actions">
          <Link to="/" className="btn-home">
            Torna alla Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
