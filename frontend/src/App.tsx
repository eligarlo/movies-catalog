import { BrowserRouter as Router } from 'react-router-dom'
import Routes from 'routes/Routes'
import Navbar from 'components/layout/Navbar'
import 'App.css'

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className='container'>
        <Routes />
      </main>
    </Router>
  )
}

export default App
