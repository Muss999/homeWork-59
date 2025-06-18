import type { ChangeEventHandler, FC, MouseEventHandler } from "react";
import "./MovieInput.css";

interface Props {
    value: string;
    addMovie: MouseEventHandler;
    changeText: ChangeEventHandler<HTMLInputElement>;
}

const MovieInput: FC<Props> = (props) => {
    const { value, addMovie, changeText } = props;
    return (
        <div className="MovieInput">
            <input
                value={value}
                type="text"
                placeholder="Movie name"
                onChange={changeText}
            />
            <button type="button" onClick={addMovie}>
                Add
            </button>
        </div>
    );
};

export default MovieInput;
