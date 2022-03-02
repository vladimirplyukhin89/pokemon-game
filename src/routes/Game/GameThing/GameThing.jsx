import classes from './game_thing.module.css';

const GameThing = ({ onClick, title }) => {
    const handleClickGame = () => {
        onClick && onClick('app');
        console.log('GameThing');
    }

    return (
        <>
            <div className={classes.game}>
                <button
                    className={classes.game__button}
                    onClick={handleClickGame}
                >
                    {title}
                </button>
            </div>
        </>
    )

}

export default GameThing;