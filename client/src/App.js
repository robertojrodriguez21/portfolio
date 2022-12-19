import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home '

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Nav />
      <main className="flex-grow-1">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
