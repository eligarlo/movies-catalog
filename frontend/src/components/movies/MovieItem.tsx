import styles from 'components/movies/movieItem.module.css'
import { IMovie } from 'components/movies/IMovies'

const MovieItem: React.FC<IMovie> = ({ id, title, poster }) => {
  const buildLink = () => `movie/${id}`

  return (
    <div className={styles.movieItemContainer}>
      <a href={buildLink()}>
        <img src={poster} alt='Poster' />
      </a>
      <p>
        <a href={buildLink()}>{title}</a>
      </p>
    </div>
  )
}

export default MovieItem
