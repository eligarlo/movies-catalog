import { Link } from 'react-router-dom'

const Genres: React.FC = () => {
  return (
    <>
      <h3>Genres</h3>
      <Link className='btn btn-primary' to='/genres/create'>
        Create Genre
      </Link>
    </>
  )
}

export default Genres
