export interface IMovie {
  id: number
  title: string
  poster: string
}

export interface ILandingPage {
  inTheaters?: IMovie[]
  upcomingReleases?: IMovie[]
}
