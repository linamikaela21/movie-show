import axios from 'axios'
import { URL_BASE, URL_MOVIE_DETAILS } from './UrlConstants'

import {
  GET_MOVIES,
  GET_MOVIE_DETAILS
} from './constants'

export const getMovies = () => {
  return async function (dispatch) {
    try {
      const movies = await axios.get(URL_BASE)
      const movieResponse = movies.data.flat()
      return dispatch({ type: GET_MOVIES, payload: movieResponse })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getMoviesDetails = (id) => {
  console.log(id, 'ID')
  return async function (dispatch) {
    try {
      const movieId = await axios.get(`${URL_MOVIE_DETAILS}/${id}`)
      return dispatch({ type: GET_MOVIE_DETAILS, payload: movieId.data })
    } catch (error) {
      console.log(error)
    }
  }
}