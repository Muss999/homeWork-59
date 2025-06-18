import type { ChangeEventHandler, FC, MouseEventHandler } from "react";
import type { TypeMovie } from "../../helpers/types";
import { memo } from "react";
import "./MovieItem.css";

interface Props {
    movie: TypeMovie;
    deleteMovie: MouseEventHandler;
    changeMovieName: ChangeEventHandler<HTMLInputElement>;
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
                    onChange={changeMovieName}
                />
                <button
                    type="button"
                    className="MovieItem-deleteBtn"
                    onClick={deleteMovie}
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
