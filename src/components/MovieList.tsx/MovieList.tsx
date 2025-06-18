import type { ChangeEvent, FC } from "react";
import type { TypeMovie } from "../../helpers/types";
import MovieItem from "../MovieItem/MovieItem";
import "./MovieList.css";

interface Props {
    movies: TypeMovie[];
    deleteMovie: (id: string) => void;
    changeMovieName: (id: string, event: ChangeEvent<HTMLInputElement>) => void;
}
const MovieList: FC<Props> = (props) => {
    const { movies, deleteMovie, changeMovieName } = props;
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
                            changeMovieName={(
                                event: ChangeEvent<HTMLInputElement>
                            ) => changeMovieName(movie.id, event)}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default MovieList;
