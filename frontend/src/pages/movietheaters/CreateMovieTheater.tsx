import { useNavigate } from 'react-router-dom'

const CreateMovieTheater: React.FC = () => {
  const navigate = useNavigate()
  const handleSave = () => {
    // Will persist the data in the DB

    navigate('/movietheaters')
  }

  return (
    <>
      <h3>Create Movie Theater</h3>
      <button className='btn btn-primary' onClick={handleSave}>
        Save Changes
      </button>
    </>
  )
}

export default CreateMovieTheater
