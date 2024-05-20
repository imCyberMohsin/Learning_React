import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  //! Interview Question: 
  //? Q:   If SetCounter() is being called multiple times, how much the counter will be increased ? also how to increment by 4?
  //* Ans: 1
  //* Explanation: When you call setCounter(counter + 1) multiple times within the same function, React does not immediately update the state after each setCounter call. Instead, React batches the state updates to improve performance.
  //               So All are executed as 1 only.
  const Increment = () => {
    //? Increment by 1
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    //? Increment by 4.
    //  When using the functional form of setCounter, each call to setCounter will correctly increment the counter based on its previous state. 
    //  Therefore, calling setCounter((prevCounter) => prevCounter + 1) multiple times will result in the counter being incremented by 1 each time, for a total of 4 increments.
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }

  return (
    <>
      <h1>Interview Question</h1>

      <h2>Counter Value : {counter}</h2>

      <button onClick={Increment}>Increment {counter}</button>
    </>
  )
}

export default App;