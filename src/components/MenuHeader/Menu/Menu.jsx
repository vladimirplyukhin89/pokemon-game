import classes from './menu.module.css';
import cn from 'classnames';

const Menu = () => {
    return (
        // "menuContainer active/deactive"
        <div className={cn(classes.menuContainer, {})}>
            <div className={classes.overlay} />
            <div className={classes.menuItems}>
                <ul>
                    <li>
                        {/*<a href={`#${welcome}`}>
                            HOME
                        </a>*/}
                    </li>
                    <li>
                        {/*<a href={`#${game}`}>
                            GAME
                        </a>*/}
                    </li>
                    <li>
                        {/*<a href={`#${about}`}>
                            ABOUT
                        </a>*/}
                    </li>
                    <li>
                        {/*<a href={`#${contact}`}>
                            CONTACT
                        </a>*/}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;