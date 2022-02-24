import classes from './header.module.css';

const Header = ({ title, desc: desc }) => {
    return (
        <header className={classes.root}>
            <div className={classes.forest}></div>
            <div className={classes.container}>
                <h1>{title}</h1>
                <p1 className={classes.paragraph}>{desc}</p1>
            </div>
        </header>
    )
}

export default Header;