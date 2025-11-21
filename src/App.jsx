import { useState } from 'react'
import Navbar from './components/Navbar'
import MovieRow from './components/MovieRow'
import { getPopularMovies, getTopRatedMovies, getTrendingMovies, searchMovies } from './api/tmdb'
import './App.css'

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar onSearch={handleSearch} />

      {/* Main Content */}
      <div className="main-content">
        {searchQuery ? (
          <MovieRow
            title={`Risultati per: "${searchQuery}"`}
            fetchMovies={() => searchMovies(searchQuery)}
            key={searchQuery}
          />
        ) : (
          <>
            <MovieRow title="Film Popolari" fetchMovies={getPopularMovies} />
            <MovieRow title="I Più Votati" fetchMovies={getTopRatedMovies} />
            <MovieRow title="In Tendenza" fetchMovies={getTrendingMovies} />
          </>
        )}
      </div>
    </div>
  )
}

export default App
