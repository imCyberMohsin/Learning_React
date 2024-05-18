//! 4. Passing Props: Data From one Component to Another Component
// Here we will pass "count" varibale to the <FirstComponent />
// Also we will pass the 

import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import FirstComponent from './components/FirstComponent';

const LearningProps = () => {

    // Creating useState Variable
    const [count, setCount] = useState(0);

    const btnClick = () => {
        console.log("Click is Working");
        setCount(count + 1);          // Updating value using UseState
    }

    return (
        <>
            {/* <h1>Count = {count} </h1> */}
            <button onClick={() => { btnClick() }}>Click Here</button>
            <FirstComponent count={count} fnc={setCount}/>
        </>
    )
}

export default LearningProps