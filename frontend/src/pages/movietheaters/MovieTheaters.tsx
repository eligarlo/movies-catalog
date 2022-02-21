import { Link } from 'react-router-dom'

const MovieTheaters: React.FC = () => {
  return (
    <>
      <h3>Movie Theaters</h3>
      <Link className='btn btn-primary' to='/movietheaters/create'>
        Create Movie Theaters
      </Link>
    </>
  )
}

export default MovieTheaters
