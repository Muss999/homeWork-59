import type { FC } from "react";
import type { TypeMovie } from "../../helpers/types";
import "./MovieItem.css";

interface Props {
    movie: TypeMovie;
}

const MovieItem: FC<Props> = (props) => {
    const { name } = props.movie;
    return (
        <div className="MovieItem-block">
            <div className="MovieItem-textBlock">
                <p>{name}</p>
            </div>
            <button type="button" className="MovieItem-deleteBtn">
                Delete
            </button>
        </div>
    );
};

export default MovieItem;
