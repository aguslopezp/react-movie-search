/* eslint-disable react/prop-types */
export function Movies ({ movies }) {
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

const ListOfMovies = ({ movies }) => {
  return (
    <ul className="movies">
      {
        movies.map(movie => (
          <li className="movie" key={movie.id}>
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
    <p>No results for your search</p>
  )
}
