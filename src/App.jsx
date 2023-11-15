import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies } = useMovies()

  return (
    <div className="page">

      <header>
        <h1>Movie Search</h1>
        <form action="">
          <input placeholder='Avengers, Star Wars ...' />
          <button type='submit'>Search</button>
        </form>
      </header>
      
      <main>
        <Movies movies={movies} />
      </main>

    </div>
  )
}

export default App
