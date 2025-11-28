import { useState, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { FavouritesProvider } from './context/FavouritesContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

// Lazy loading delle pagine per ottimizzare le performance
const Home = lazy(() => import('./pages/Home'))
const MovieDetail = lazy(() => import('./pages/MovieDetail'))
const Favourites = lazy(() => import('./pages/Favourites'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  return (
    <FavouritesProvider>
      <Router>
        <div className="min-h-screen bg-black">
          <Navbar
            onSearch={handleSearch}
          />
          <Suspense fallback={
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '50vh',
              color: 'white'
            }}>
              <div className="loading-spinner"></div>
            </div>
          }>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    searchQuery={searchQuery}
                  />
                }
              />
              <Route path="/movie/:id" element={<MovieDetail />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </FavouritesProvider>
  )
}

export default App
