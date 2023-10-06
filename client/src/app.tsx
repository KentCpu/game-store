import React, {useState} from 'react';

export const App = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(prevCounter => prevCounter + 1);
    }

    return (
        <div>
            <button onClick={increment}>{counter}</button>
        </div>
    );
};
