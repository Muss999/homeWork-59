import type { FC } from "react";
import type { TypeMovie } from "../../helpers/types";
import MovieItem from "../MovieItem/MovieItem";
import "./MovieList.css";

interface Props {
    movies: TypeMovie[];
    deleteMovie: (id: string) => void;
}
const MovieList: FC<Props> = (props) => {
    const { movies, deleteMovie } = props;
    return (
        <>
            <h2>Films List:</h2>
            <div className="MovieList">
                {movies.map((movie) => {
                    return (
                        <MovieItem
                            movie={movie}
                            key={movie.id}
                            deleteMovie={() => deleteMovie(movie.id)}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default MovieList;
