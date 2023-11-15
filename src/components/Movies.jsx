function ListOfMovies({ movies }) {
  return (
    <ul>
      {
        movies.map(movie => (
          <li key={movie.id}>
            <img src={movie.poster} alt={movie.Title} />
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
          </li>
        ))
      }
    </ul>
  ) 
}

function NoResults() {
  return (
    <p>No results</p>
  )
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies 
            ? (
              <ListOfMovies movies={movies} />
            )
            : (
              <NoResults />
            )
  )
}