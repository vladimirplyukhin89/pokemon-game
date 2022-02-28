import cn from 'classnames';
import React from 'react';
import GameThing from './GameThing/GameThing';

const GamePage = ({ onChangePage }) => {
    const handleClickButton = (page) => {
        onChangePage && onChangePage(page);
        console.log('GamePage');

    }

    return (
        <React.Fragment>
            <GameThing
                title='Back to main page'
                onClickButton={handleClickButton}
            />
        </React.Fragment>
    );
};

export default GamePage;