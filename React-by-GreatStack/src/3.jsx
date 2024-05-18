//! 3. React UseState Hooks : Changing Variable Data

import React from "react";
import { useState } from "react";
import FirstComponent from './components/FirstComponent';

const ChangeData = () => {

    // Creating useState Variable
    const [count, setCount] = useState(0);

    const btnClick = () => {
        console.log("Click is Working");
        setCount(count + 1);          // Updating value using UseState Fnc
    }

    return (
        <>
            <h1>Count = {count} </h1>
            <button onClick={() => { btnClick() }}>Click Here</button>
            <FirstComponent />
        </>
    )
}

export default ChangeData