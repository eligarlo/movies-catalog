import { useNavigate } from 'react-router-dom'

const CreateActor: React.FC = () => {
  const navigate = useNavigate()
  const handleSave = () => {
    // Will persist the data in the DB

    navigate('/actors')
  }

  return (
    <>
      <h3>Create Actor</h3>
      <button className='btn btn-primary' onClick={handleSave}>
        Save Changes
      </button>
    </>
  )
}

export default CreateActor
