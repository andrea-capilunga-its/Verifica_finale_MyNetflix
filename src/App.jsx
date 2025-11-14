import Navbar from './components/Navbar'
import MovieRow from './components/MovieRow'
import { getPopularMovies, getTopRatedMovies, getTrendingMovies } from './api/tmdb'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Main Content */}
      <div className="pt-24">
        <div className="text-white text-center py-12 px-4">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Benvenuto su MyNetflix
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300">
            Film, serie TV e tanto altro. Senza limiti.
          </p>
        </div>

        {/* Movie Categories */}
        <div className="pb-8">
          <MovieRow title="Film Popolari" fetchMovies={getPopularMovies} />
          <MovieRow title="I Più Votati" fetchMovies={getTopRatedMovies} />
          <MovieRow title="In Tendenza" fetchMovies={getTrendingMovies} />
        </div>
      </div>
    </div>
  )
}

export default App
