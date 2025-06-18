import { useState, type ChangeEvent } from "react";
import MovieInput from "./components/MovieInput/MovieInput";
import type { TypeMovie } from "./helpers/types";
import MovieList from "./components/MovieList.tsx/MovieList";
import "./App.css";

const App = () => {
    const [movies, setMovies] = useState<TypeMovie[]>([
        { name: "movie 1", id: crypto.randomUUID() },
        { name: "movie 2", id: crypto.randomUUID() },
    ]);
    const [currentMovie, setCurrentMovie] = useState("");

    const addMovie = () => {
        if (!currentMovie) {
            alert("Input is empty!");
            return;
        }
        const movie = {
            id: crypto.randomUUID(),
            name: currentMovie,
        };
        setCurrentMovie("");
        setMovies((prevState) => {
            return [...prevState, movie];
        });
    };

    const deleteMovie = (id: string) => {
        const copyMovies: TypeMovie[] = movies.filter(
            (movie) => movie.id !== id
        );
        setMovies(copyMovies);
    };

    const changeText = (event: ChangeEvent<HTMLInputElement>) => {
        setCurrentMovie(event.target.value);
    };

    return (
        <div className="container">
            <MovieInput
                addMovie={addMovie}
                value={currentMovie}
                changeText={changeText}
            />
            <MovieList movies={movies} deleteMovie={deleteMovie} />
        </div>
    );
};

export default App;
