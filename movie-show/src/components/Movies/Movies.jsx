import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
//import { SearchBar } from "../SearchBar/SearchBar"
import { ViewMovies } from "./ViewMovies"
import { getMovies } from "../../redux/actions/moviesActions"

export const Movies = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovies())
    }, [dispatch])


    // //PAGINADO
    const allMovies = useSelector(state => state.movies)
    const [currentPage, setCurrentPage] = useState(1)
    const MoviesPerPage = 3
    const lastMovie = currentPage * MoviesPerPage
    const firstMovie = lastMovie - MoviesPerPage
    const movies = allMovies.slice(firstMovie, lastMovie)

    const pages = pageNumber => setCurrentPage(pageNumber)

    return (
        <div className=''>
            <div className='rowContainer'>
                <ViewMovies
                    movies={movies}
                    MoviesPerPage={MoviesPerPage}
                    allMovies={allMovies}
                    pages={pages}
                />
            </div>
        </div>
    )
}

