//! Q2. Counter App 
import React, { useState } from 'react'

const Two = () => {
    let [count, setCount] = useState(0);

    // Increase function
    const increase = () => {
        setCount((prev) => {
            return prev + 1
        });
    }

    // Decrease function
    const decrease = () => {
        setCount((prev) => {
            return prev - 1
        })
    }

    // Reset
    const reset = () => {
        setCount(0);
    }

    return (
        <>
            <div>
                <h1>Counter App</h1>
                <h3>{count}</h3>
                <div>
                    <button onClick={decrease}>-</button>
                    <button onClick={reset}>Reset</button>
                    <button onClick={increase}>+</button>
                </div>
            </div>
        </>
    )
}

export default Two