import MovieItem from 'components/movies/MovieItem'
import { IMovie } from 'components/movies/IMovies'
import styles from 'components/movies/moviesList.module.css'
import GenericList from 'components/utils/GenericList'

interface IMovieListProps {
  movies?: IMovie[]
}

const MovieList: React.FC<IMovieListProps> = ({ movies }) => {
  return (
    <GenericList list={movies}>
      <div className={styles.movieListContainer}>
        {movies?.map(movie => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </div>
    </GenericList>
  )
}

export default MovieList
