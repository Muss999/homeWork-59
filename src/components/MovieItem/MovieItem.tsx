import type { ChangeEvent, FC } from "react";
import type { TypeMovie } from "../../helpers/types";
import { memo } from "react";
import "./MovieItem.css";

interface Props {
    movie: TypeMovie;
    deleteMovie: (id: string) => void;
    changeMovieName: (id: string, event: ChangeEvent<HTMLInputElement>) => void;
}

const MovieItem: FC<Props> = memo(
    (props) => {
        const { movie, deleteMovie, changeMovieName } = props;
        return (
            <div className="MovieItem-block">
                <input
                    type="text"
                    value={movie.name}
                    className="MovieItem-input"
                    onChange={(event) => changeMovieName(movie.id, event)}
                />
                <button
                    type="button"
                    className="MovieItem-deleteBtn"
                    onClick={() => deleteMovie(movie.id)}
                >
                    Delete
                </button>
            </div>
        );
    },
    (prevProps, nextProps) => {
        return (
            prevProps.movie.id === nextProps.movie.id &&
            prevProps.movie.name === nextProps.movie.name
        );
    }
);

export default MovieItem;
