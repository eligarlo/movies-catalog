import { useNavigate } from 'react-router-dom'

const CreateGenre: React.FC = () => {
  const navigate = useNavigate()
  const handleSave = () => {
    // Will persist the data in the DB

    navigate('/genres')
  }

  return (
    <>
      <h3>Create Genre</h3>
      <button className='btn btn-primary' onClick={handleSave}>
        Save Changes
      </button>
    </>
  )
}

export default CreateGenre
