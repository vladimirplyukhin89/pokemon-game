import classes from './navbar.module.css';
import cn from 'classnames';

const Navbar = () => {
    return (
        <nav className={classes.root}>
            <div className={classes.navWrapper}>
                <p className={classes.brand}>
                    LOGO
                </p>
                <a className={cn(classes.menuButton, classes.active)}>
                    <span />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;

