import classes from './header.module.css';
import cn from 'classnames';

const Header = ({ title, desc: desc, onClickButton }) => {
    const handleClick = () => {
        onClickButton && onClickButton('game');
    }

    return (
        <header className={classes.root}>
            <div className={cn(classes.forest)}></div>
            <div className={classes.container}>
                <h1>{title}</h1>
                <p className={classes.paragraph}>{desc}</p>
                <button onClick={handleClick}>Start Game</button>
            </div>
        </header>
    )
}

export default Header;