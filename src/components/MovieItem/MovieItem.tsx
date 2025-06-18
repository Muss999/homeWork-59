import type { FC, MouseEventHandler } from "react";
import type { TypeMovie } from "../../helpers/types";
import "./MovieItem.css";

interface Props {
    movie: TypeMovie;
    deleteMovie: MouseEventHandler;
}

const MovieItem: FC<Props> = (props) => {
    const { movie, deleteMovie } = props;
    return (
        <div className="MovieItem-block">
            <div className="MovieItem-textBlock">
                <p>{movie.name}</p>
            </div>
            <button
                type="button"
                className="MovieItem-deleteBtn"
                onClick={deleteMovie}
            >
                Delete
            </button>
        </div>
    );
};

export default MovieItem;
