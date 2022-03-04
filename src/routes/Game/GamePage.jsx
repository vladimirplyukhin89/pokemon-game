import React from 'react';
import GameThing from './GameThing/GameThing';


const GamePage = ({ onChangePage }) => {

    const handleClickBtn = (page) => {
        onChangePage && onChangePage(page);
        console.log('GamePage');
    }

    return (
        <>
            <GameThing
                onClick={handleClickBtn}
                title='Back to main page'
            />
        </>
    );
};

export default GamePage; 