import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import { ViewMovies } from "./ViewMovies"
import { getMovies } from "../../redux/actions/moviesActions"

export const Movies = () => {

    const dispatch = useDispatch()

    const allMovies = useSelector(state => state.movies)

    useEffect(() => {
        dispatch(getMovies())
    }, [dispatch])

    return (
        <div>
            <div className='rowContainer'>
                <ViewMovies
                    allMovies={allMovies}
                />
            </div>
        </div>
    )
}

