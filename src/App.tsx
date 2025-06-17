import { useState } from "react";
import MovieInput from "./components/MovieInput/MovieInput";
import type { TypeMovie } from "./helpers/types";
import MovieList from "./components/MovieList.tsx/MovieList";
import "./App.css";

const App = () => {
    const [movies, setMovies] = useState<TypeMovie[]>([
        { name: "movie 1", id: crypto.randomUUID() },
        { name: "movie 2", id: crypto.randomUUID() },
    ]);
    return (
        <div className="container">
            <MovieInput />
            <MovieList movies={movies} />
        </div>
    );
};

export default App;
