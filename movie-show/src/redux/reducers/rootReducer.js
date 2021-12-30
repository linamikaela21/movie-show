import {
  GET_MOVIES,
  GET_MOVIE_DETAILS
} from '../actions/constants'

const initialState = {
  movies: [],
  movieDetails: []
}

const rootReducer = (state = initialState, action) => {
  //console.log('state', state, 'action =>', action.type, 'payload =>', action.payload)
  switch (action.type) {

    case GET_MOVIES:
      return { ...state, movies: action.payload }

    case GET_MOVIE_DETAILS:
      return { ...state, movieDetails: action.payload }

    default:
      return state
  }
}

export default rootReducer
