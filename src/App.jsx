import { useEffect, useState, useRef } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No hay resultados')
      return
    }
    
    if (search.match(/^\d+$/)) {
      setError('No se permiten números')
      return
    }

    if (search.length < 3) {
      setError('Mínimo 3 caracteres')
      return
    }

    setError(null)
    
  }, [search])

  return { search, setSearch, error }
}

function App() {
  const { movies } = useMovies()
  const { search, setSearch, error } = useSearch()

  const handleSubmit = (event) => {
   event.preventDefault()
   /*
      Manejo de formulario no controlada
      const { search } = Object.fromEntries(
        new window.FormData(event.target)
      )
    */
   console.log({ search })
  }
  
  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div className="page">

      <header>
        <h1>Movie Search</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input 
            style={{ 
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }}
            onChange={handleChange} name='search' value={search} placeholder='Avengers, Star Wars, ...' />
          { error && <p style={{ color: 'red', fontSize: '14px' }}>{ error }</p> }
          <button type='submit'>Search</button>
        </form>
      </header>
      
      <main>
        <Movies movies={ movies } />
      </main>

    </div>
  )
}

export default App
