import { Route, Routes } from "react-router-dom"
import { Home } from '../components/Home/Home'
import { MovieDetails } from '../components/MovieDetails/MovieDetails'
import { LandingPage } from '../components/LandingPage/LandingPage'

export const RouterWeb = () => {

  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path='/movies' element={<Home />} />
      <Route exact path='/movies/:id' element={<MovieDetails />} />
    </Routes>
  )
}