import "./MovieInput.css";

const MovieInput = () => {
    return (
        <div className="MovieInput">
            <input type="text" placeholder="Movie name" />
            <button type="button">Add</button>
        </div>
    );
};

export default MovieInput;
