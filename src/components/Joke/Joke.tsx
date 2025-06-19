interface Props {
    text: string;
}

const Joke = ({ text }: Props) => {
    return (
        <div>
            <p>{text}</p>
        </div>
    );
};

export default Joke;
