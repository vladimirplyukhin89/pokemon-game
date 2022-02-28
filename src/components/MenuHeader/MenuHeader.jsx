import { useState } from 'react';
import Navbar from './Navbar/Navbar';
import Menu from './Menu/Menu';
import classes from './menu_header.module.css';
import cn from 'classnames';

const MenuHeader = () => {
    return (
        <div>
            <Menu />
            <Navbar />
        </div>
    )
}

export default MenuHeader;