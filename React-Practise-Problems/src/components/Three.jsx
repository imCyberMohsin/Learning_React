//! Create one form input and display in realtime 
import React, { useState } from 'react'

const Three = () => {
    const [input, setInput] = useState("*****")

    return (
        <>
            <form action="#">
                <div>
                    <label htmlFor="name">Name</label>
                </div>
                <input name="name" type="text" placeholder='Enter Your Name'
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={(e) => setInput("*****")}>Reset</button>
            </form>

            <div>
                <h2>Your Name is {input}</h2>
            </div>
        </>
    )
}

export default Three