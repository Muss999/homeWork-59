import type { MouseEventHandler } from "react";

interface Props {
    newJoke: MouseEventHandler;
}
const NewJokeBtn = ({ newJoke }: Props) => {
    return (
        <button type="button" onClick={newJoke}>
            New Joke
        </button>
    );
};

export default NewJokeBtn;
