import classes from './layout.module.css';


const Layout = ({ title, desc: desc, urlBg = false, colorBg = false }) => {
    const styledImg = urlBg ? { backgroundImage: ('../../assets/bg1.jpg') } : {};
    const styledBack = colorBg ? { backgroundColor: '#e2e2e2' } : {};
    return (
        <section className={classes.root} style={styledBack}>
            <div className={classes.wrapper}>
                <article style={styledImg}>
                    <div className={classes.title}>
                        {
                            title && (<h3>{title}</h3>)

                        }
                        <span className={classes.separator}></span>
                    </div>
                    <div className={`${classes.desc} ${classes.full}`} >
                        {
                            desc && (<p>{desc}</p>)

                        }
                    </div>
                </article>
            </div>

        </section>
    )
}

export default Layout