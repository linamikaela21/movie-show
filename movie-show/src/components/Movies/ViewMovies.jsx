import { BigCard } from "../Common/BigCard"
import { Carrusel } from "../Common/Carrusel"

export const ViewMovies = ({ movies, moviesPerPage, allMovies, pages }) => {


    const arrayMovies = allMovies.map(x => x.show)
    const carouselItems =
        arrayMovies?.map(movie => (
            <BigCard
                key={movie.id}
                title={movie.name}
                image={movie.image}
                buttonText='See more'
                link={`movies/${movie?.id}`}
                height='400vh'
                fontSize='2rem'
            />
        ))

    return (
        <div>
            <Carrusel
                items={carouselItems}
                n={3}
            />
        </div>
    )
}