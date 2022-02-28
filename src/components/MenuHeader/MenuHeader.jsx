import { useState } from 'react';
import Navbar from './Navbar/Navbar';
import Menu from './Menu/Menu';
import classes from './menu_header.module.css';
import cn from 'classnames';

const MenuHeader = ({ bgActive }) => {
    const [isOpen, setOpen] = useState(null);

    const handleClickHamburg = () => {
        setOpen(prevState => !prevState);
    }

    return (
        <div>
            <Menu isOpen={isOpen} />
            <Navbar
                isOpen={isOpen}
                bgActive={bgActive}
                onClickHamburg={handleClickHamburg}
            />
        </div>
    )
}

export default MenuHeader;