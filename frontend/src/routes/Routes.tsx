import { useRoutes } from 'react-router-dom'
import HomePage from 'pages/homepage/HomePage'
import Genres from 'pages/genres/Genres'

const Routes: React.FC = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/genres',
      element: <Genres />,
    },
  ])

  return routes
}

export default Routes
