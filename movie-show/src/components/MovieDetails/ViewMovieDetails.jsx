import { CardDetails } from "../Common/CardDetails"
import { Link } from 'react-router-dom'

export const ViewMovieDetails = ({ movieDetails }) => {

    return (
        <div className='container'
            style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
            <div className='columnDetailsContent'>
                <Link to={'/movies'}>
                    <button className='button'>Go Back</button>
                </Link>
                <CardDetails
                    key={movieDetails?.id}
                    name={movieDetails?.name}
                    image={movieDetails?.image}
                    genres={movieDetails?.genres}
                    language={movieDetails?.language}
                    summary={movieDetails?.summary}
                />
            </div>
            )
        </div>
    )
}