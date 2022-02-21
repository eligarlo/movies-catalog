import { Link } from 'react-router-dom'

const Actors: React.FC = () => {
  return (
    <>
      <h3>Actors</h3>
      <Link className='btn btn-primary' to='/actors/create'>
        Create actor
      </Link>
    </>
  )
}

export default Actors
