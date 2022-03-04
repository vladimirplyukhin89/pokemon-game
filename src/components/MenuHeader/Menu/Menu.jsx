import classes from './menu.module.css';
import cn from 'classnames';
import { Link } from 'react-router-dom';

const MENU = [
    {
        title: 'HOME',
        to: 'home',
    },
    {
        title: 'GAME',
        to: 'game',
    },
    {
        title: 'ABOUT',
        to: 'about',
    },
    {
        title: 'CONTACT',
        to: 'contact',
    }
]

const Menu = ({ isOpen, onClickHamburg }) => {
    return (
        <div className={cn(classes.menuContainer, {
            [classes.active]: isOpen === true,
            [classes.deactive]: isOpen === false
        })}>
            <div className={classes.overlay} />
            <div className={classes.menuItems}>
                <ul>
                    {
                        MENU.map(({ title, to }, index) => (
                            <li
                                className={cn({
                                    [classes.active]: isOpen,
                                })}
                                onClick={onClickHamburg}
                                key={index}>
                                <Link to={to}>
                                    {title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Menu;