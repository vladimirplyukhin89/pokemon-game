import React, { useState } from 'react';

function Example() {
    // Объявление новой переменной состояния «count»
    const [count, setCount] = useState(1);
    const handleClick = () => {
        setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div>
            <p>Вы кликнули {count} раз(а)</p>
            <button onClick={handleClick}>
                Нажми на меня
            </button>
        </div>
    );
}

export default Example;