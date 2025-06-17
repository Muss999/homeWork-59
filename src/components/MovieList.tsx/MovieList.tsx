import type { FC } from "react";
import type { TypeMovie } from "../../helpers/types";
import MovieItem from "../MovieItem/MovieItem";
import "./MovieList.css";

interface Props {
    movies: TypeMovie[];
}
const MovieList: FC<Props> = (props) => {
    const { movies } = props;
    return (
        <>
            <h2>Films List:</h2>
            <div className="MovieList">
                {movies.map((movie) => {
                    return <MovieItem movie={movie} key={movie.id} />;
                })}
            </div>
        </>
    );
};

export default MovieList;
