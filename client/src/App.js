import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home '
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Nav />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
