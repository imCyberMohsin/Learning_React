//! 5. React 'UseRef' Hook

import React, { useRef, useState } from "react";

const LearningHooks = () => {

    // useState
    const [data, setData] = useState([]);

    // creating useref Hook
    const InputRef = useRef(null);

    return (
        <>
            <input ref={InputRef} type="text" />
            <button onClick={()=>{setData([...data, InputRef.current.value])}}>Submit</button>
            {data.map((item,index)=>{return <h2 key={index} >{item}</h2> })}
        </>
    )
}

export default LearningHooks