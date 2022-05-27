import React from 'react';

const Counter = ({number, onIncrease, onDecrease}) => {
    return (
        <div>
            {number}
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    );
};

export default Counter;