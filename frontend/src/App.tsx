import { useEffect, useState } from 'react'
import MovieList from 'components/movies/MoviesList'
import { ILandingPage } from 'components/movies/IMovies'
import 'App.css'

const App = () => {
  const [movies, setMovies] = useState<ILandingPage>({})

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [
          {
            id: 1,
            title: 'Spider-Man: Far From Home',
            poster:
              'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg',
          },
          {
            id: 2,
            title: 'Luca',
            poster:
              'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jTswp6KyDYKtvC52GbHagrZbGvD.jpg',
          },
        ],
        upcomingReleases: [
          {
            id: 3,
            title: 'Soul',
            poster:
              'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg',
          },
        ],
      })
    }, 1000)

    return () => clearTimeout(timerId)
  }, [])

  return (
    <main className='container'>
      <h3>In Theaters</h3>
      <MovieList movies={movies.inTheaters} />
      <h3>Upcoming Releases</h3>
      <MovieList movies={movies.upcomingReleases} />
    </main>
  )
}

export default App
