import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Main Content */}
      <div className="pt-24 px-4 lg:px-16">
        <div className="text-white text-center py-20">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Benvenuto su MyNetflix
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300">
            Film, serie TV e tanto altro. Senza limiti.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
