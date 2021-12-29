import { ViewMovieDetails } from './ViewMovieDetails'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getMoviesDetails } from '../../redux/actions/moviesActions'
import { useParams } from 'react-router'

export const MovieDetails = () => {

    const dispatch = useDispatch()

    const { id } = useParams()

    useEffect(() => {
        dispatch(getMoviesDetails(id))
    }, [dispatch, id])

    return (
        <div>
            <ViewMovieDetails />
        </div>
    )
}
