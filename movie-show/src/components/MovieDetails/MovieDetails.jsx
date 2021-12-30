import { ViewMovieDetails } from './ViewMovieDetails'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMoviesDetails } from '../../redux/actions/moviesActions'
import { useParams } from 'react-router'

export const MovieDetails = () => {

    const dispatch = useDispatch()

    const movieDetails = useSelector(state => state.movieDetails)

    const { id } = useParams()

    useEffect(() => {
        dispatch(getMoviesDetails(id))
    }, [dispatch, id])

    return (
        <div>
            <ViewMovieDetails
                movieDetails={movieDetails}
            />
        </div>
    )
}
