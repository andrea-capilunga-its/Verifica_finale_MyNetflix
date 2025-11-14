import Navbar from './components/Navbar'
import MovieRow from './components/MovieRow'
import { getPopularMovies, getTopRatedMovies, getTrendingMovies } from './api/tmdb'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Main Content */}
      <div style={{ paddingTop: '125px', paddingBottom: '32px' }}>
        <MovieRow title="Film Popolari" fetchMovies={getPopularMovies} />
        <MovieRow title="I Più Votati" fetchMovies={getTopRatedMovies} />
        <MovieRow title="In Tendenza" fetchMovies={getTrendingMovies} />
      </div>
    </div>
  )
}

export default App
