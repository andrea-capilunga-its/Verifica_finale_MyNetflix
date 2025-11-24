import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { FavouritesProvider } from './context/FavouritesContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import Favourites from './pages/Favourites'
import About from './pages/About'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  return (
    <FavouritesProvider>
      <Router>
        <div className="min-h-screen bg-black">
          <Navbar onSearch={handleSearch} />
          <Routes>
            <Route path="/" element={<Home searchQuery={searchQuery} />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </FavouritesProvider>
  )
}

export default App
