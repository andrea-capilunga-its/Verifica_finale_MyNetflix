import { Link } from 'react-router-dom';
import { FaGithub, FaReact, FaFilm } from 'react-icons/fa';
import { SiVite, SiTailwindcss, SiAxios } from 'react-icons/si';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Header Section */}
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              MyNetflix
            </h1>
            <p className="text-xl text-gray-400">
              Un clone di Netflix moderno costruito con React e TMDB API
            </p>
          </div>

          {/* Project Description */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 mb-8 border border-gray-700">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <FaFilm className="text-red-600" />
              Il Progetto
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              MyNetflix è un'applicazione web che replica l'esperienza di Netflix,
              permettendo agli utenti di esplorare film popolari, ricercare titoli specifici
              e creare la propria lista di preferiti.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Questo progetto dimostra l'integrazione di API esterne (TMDB),
              la gestione dello stato con Context API, il routing con React Router
              e un design responsive moderno con TailwindCSS.
            </p>
          </div>

          {/* Features */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 mb-8 border border-gray-700">
            <h2 className="text-3xl font-bold mb-6">✨ Funzionalità Principali</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-red-500">🎬 Esplora Film</h3>
                <p className="text-gray-400">
                  Scopri film popolari, più votati e in tendenza
                </p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-red-500">🔍 Ricerca</h3>
                <p className="text-gray-400">
                  Cerca i tuoi film preferiti per titolo
                </p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-red-500">❤️ Lista Preferiti</h3>
                <p className="text-gray-400">
                  Salva e gestisci la tua collezione personale
                </p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-red-500">📱 Responsive</h3>
                <p className="text-gray-400">
                  Design ottimizzato per tutti i dispositivi
                </p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-red-500">🎭 Dettagli Film</h3>
                <p className="text-gray-400">
                  Visualizza cast, trama, rating e informazioni complete
                </p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-red-500">💾 Persistenza</h3>
                <p className="text-gray-400">
                  I preferiti vengono salvati nel browser
                </p>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 mb-8 border border-gray-700">
            <h2 className="text-3xl font-bold mb-6">🛠️ Tecnologie Utilizzate</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <FaReact className="text-6xl text-cyan-400 mb-3" />
                <h3 className="font-semibold text-lg">React 19</h3>
                <p className="text-gray-400 text-sm">UI Library</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <SiVite className="text-6xl text-purple-500 mb-3" />
                <h3 className="font-semibold text-lg">Vite</h3>
                <p className="text-gray-400 text-sm">Build Tool</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <SiTailwindcss className="text-6xl text-cyan-500 mb-3" />
                <h3 className="font-semibold text-lg">TailwindCSS</h3>
                <p className="text-gray-400 text-sm">Styling</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <SiAxios className="text-6xl text-blue-400 mb-3" />
                <h3 className="font-semibold text-lg">Axios</h3>
                <p className="text-gray-400 text-sm">HTTP Client</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <FaFilm className="text-6xl text-yellow-500 mb-3" />
                <h3 className="font-semibold text-lg">TMDB API</h3>
                <p className="text-gray-400 text-sm">Film Database</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <FaGithub className="text-6xl text-gray-400 mb-3" />
                <h3 className="font-semibold text-lg">GitHub</h3>
                <p className="text-gray-400 text-sm">Version Control</p>
              </div>
            </div>
          </div>

          {/* API Credit */}
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-lg p-8 mb-8 border border-blue-700/50">
            <h2 className="text-2xl font-bold mb-4">🎬 Dati forniti da TMDB</h2>
            <p className="text-gray-300 mb-4">
              Questo prodotto utilizza l'API di TMDB ma non è approvato o certificato da TMDB.
            </p>
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Visita TMDB →
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              🏠 Torna alla Home
            </Link>
            <Link
              to="/favourites"
              className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              ❤️ I Miei Preferiti
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>Made with ❤️ using React, Vite & TMDB API</p>
          <p className="mt-2 text-sm">© 2025 MyNetflix - Educational Project</p>
        </div>
      </footer>
    </div>
  );
}

export default About;
