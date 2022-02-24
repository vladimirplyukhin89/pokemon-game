import classes from './header.module.css';
import ball from '../../assets/ball.png';

const HeaderBlock = ({ title, hideBackground = false, descr }) => {
    const styleRoot = hideBackground ? { backgroundImage: 'none' } : {};
    return (
        <div>
            <div style={styleRoot}>
                <img className={classes.image__ball} src={ball} />
                {
                    title ?
                        (<h1 className={classes.header}>
                            {title}
                        </h1>) : null
                }
                {
                    descr ?
                        (<p className={classes.paragraph}>
                            {descr}
                        </p>) : null
                }
            </div>
        </div>
    )
}

export default HeaderBlock;