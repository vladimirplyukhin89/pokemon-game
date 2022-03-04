import { useHistory } from 'react-router-dom/';
import classes from './header.module.css';
import cn from 'classnames';

const Header = ({ title, desc }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push('game');
    }

    return (
        <header className={classes.root}>
            <div className={cn(classes.forest)}></div>
            <div className={classes.silhouette}></div>
            <div className={classes.moon}></div>
            <div className={classes.container}>
                <h1>{title}</h1>
                <p className={classes.paragraph}>{desc}</p>
                <button onClick={handleClick}>Start Game</button>
            </div>
        </header>
    )
}

export default Header;