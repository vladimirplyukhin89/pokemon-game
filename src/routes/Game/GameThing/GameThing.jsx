import classes from './game_thing.module.css';
import cn from 'classnames';

const GameThing = ({ title, onClickButton }) => {
    const handleClick = () => {
        onClickButton && onClickButton('app');
        console.log('GameThing');
    }

    return (
        <div>
            <button onClick={handleClick}>
                {title}
            </button>
        </div>
    )

}

export default GameThing;