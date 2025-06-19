import { useEffect, useState, type ChangeEvent } from "react";
import MovieInput from "./components/MovieInput/MovieInput";
import type { TypeMovie } from "./helpers/types";
import MovieList from "./components/MovieList.tsx/MovieList";
import "./App.css";
import Joke from "./components/Joke/Joke";
import NewJokeBtn from "./components/NewJokeBtn/NewJokeBtn";

const App = () => {
    const [movies, setMovies] = useState<TypeMovie[]>([
        { name: "movie 1", id: crypto.randomUUID() },
        { name: "movie 2", id: crypto.randomUUID() },
    ]);
    const [currentMovie, setCurrentMovie] = useState("");
    const [joke, setJoke] = useState("");

    const fetchData = async () => {
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        if (response.ok) {
            const result = await response.json();
            setJoke(result.value);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const changeMovieName = (
        id: string,
        event: ChangeEvent<HTMLInputElement>
    ) => {
        setMovies((prevState) => {
            return prevState.map((movie) => {
                if (movie.id === id) {
                    return { ...movie, name: event.target.value };
                }
                return movie;
            });
        });
    };

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
        setMovies((prevState) => {
            return prevState.filter((movie) => movie.id !== id);
        });
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
            <MovieList
                movies={movies}
                deleteMovie={deleteMovie}
                changeMovieName={changeMovieName}
            />
            <NewJokeBtn newJoke={fetchData} />
            <Joke text={joke} />
        </div>
    );
};

export default App;
