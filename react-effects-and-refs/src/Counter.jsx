import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [num, setNum] = useState(0)
    const increment = () => {
        setNum(n => n + 1);
    };

    useEffect(() => {
        console.log("Running Callback!!")
        document.title = `Hi${'!'.repeat(num)}`
    })
    
    return (
        <div>
            {console.log("Rendering!!!")}
            Let's get excited!
            <button onClick={increment}>Get more excited</button>
            <h1>Counter: {num}</h1>
        </div>
        
    );
};

export default Counter;