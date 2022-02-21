import { useRoutes } from 'react-router-dom'
import HomePage from 'pages/homepage/HomePage'
// Genres
import Genres from 'pages/genres/Genres'
import CreateGenre from 'pages/genres/CreateGenre'
import EditGenre from 'pages/genres/EditGenre'
// Actors
import Actors from 'pages/actors/Actors'
import CreateActor from 'pages/actors/CreateActor'
import EditActor from 'pages/actors/EditActor'
// Movie Theaters
import MovieTheaters from 'pages/movietheaters/MovieTheaters'
import CreateMovieTheater from 'pages/movietheaters/CreateMovieTheater'
import EditMovieTheater from 'pages/movietheaters/EditMovieTheater'
// Movies
import CreateMovie from 'components/movies/CreateMovie'
import EditMovie from 'components/movies/EditMovie'
import FilterMovies from 'components/movies/FilterMovies'

const Routes: React.FC = () => {
  const routes = useRoutes([
    { path: '/', element: <HomePage /> },
    // Genres
    { path: '/genres', element: <Genres /> },
    { path: '/genres/create', element: <CreateGenre /> },
    { path: '/genres/edit', element: <EditGenre /> },
    // Actors
    { path: '/actors', element: <Actors /> },
    { path: '/actors/create', element: <CreateActor /> },
    { path: '/actors/edit', element: <EditActor /> },
    // Movie Theaters
    { path: '/movietheaters', element: <MovieTheaters /> },
    { path: '/movietheaters/create', element: <CreateMovieTheater /> },
    { path: '/movietheaters/edit', element: <EditMovieTheater /> },
    // Movies
    { path: '/movies/create', element: <CreateMovie /> },
    { path: '/movies/edit', element: <EditMovie /> },
    { path: '/movies/filter', element: <FilterMovies /> },
  ])

  return routes
}

export default Routes
