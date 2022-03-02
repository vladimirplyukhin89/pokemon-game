import { useState } from 'react';
import Navbar from './Navbar/Navbar';
import Menu from './Menu/Menu';


const MenuHeader = ({ bgActive }) => {
    const [isOpen, setOpen] = useState(null);

    const handleClickHamburg = () => {
        setOpen(prevState => !prevState);
    }

    return (
        <>
            <Menu isOpen={isOpen} />
            <Navbar
                isOpen={isOpen}
                bgActive={bgActive}
                onClickHamburg={handleClickHamburg}
            />
        </>
    )
}

export default MenuHeader;