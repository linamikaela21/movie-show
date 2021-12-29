import { CardDetails } from "../Common/CardDetails"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const ViewMovieDetails = () => {

    const movieDetails = useSelector(state => state.movieDetails)

    console.log(movieDetails)

    return (
        <div className='container' 
        style={{ paddingTop: '3rem', paddingBottom: '3rem'}}>
            <div className='columnDetailsContent'>
                <Link to={'/movies'}>
                    <button className='button'>Go Back</button>
                </Link>
            <CardDetails
                // key={movieDetails?.id}
                // name={movieDetails?.name}
                // image={details?.image}
                // textOne={`Species: ${movieDetails?.species}`}
                // textTwo={`Gender: ${movieDetails?.gender}`}
                // textThree={`Status: ${movieDetails?.status}`}
                // textFour={`Location: ${movieDetails?.location?.name}`}
                // textElections='Episodes'
                // elections={movieDetails?.episodes?.map(x => x.name)}
                // link='home'
                // buttonText='Go Back'
            />
            </div>
            )
        </div>
    )
}