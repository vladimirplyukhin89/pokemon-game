import classes from './layout.module.css';


const Layout = ({ title, urlBg, colorBg, children }) => {
    const sectionStyle = {};

    if (urlBg) {
        sectionStyle.backgroundImage = `${urlBg}`;
    }
    if (colorBg) {
        sectionStyle.backgroundColor = `${colorBg}`;
    }
    return (
        <section
            className={classes.root}
            style={sectionStyle}
        >
            <div className={classes.wrapper}>
                <article>
                    <div className={classes.title}>
                        {
                            title && (<h3>{title}</h3>)
                        }
                        <span className={classes.separator}></span>
                    </div>
                    <div className={`${classes.desc} ${classes.full}`} >
                        {children}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout