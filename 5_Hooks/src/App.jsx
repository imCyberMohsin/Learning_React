import { useState } from "react";

function App() {
  // Initalizing useState
  //     variable, update variable
  let [counter, setCounter] = useState(0);

  //? Functions
  const Increment = () => {
    // let counter = 15;  //old way
    // counter++;    // old way
    // console.log("clicked ",counter);

    // Increment till 20
    if (counter < 20) {
      setCounter(counter + 1)
    }
  }

  const Decrement = () => {
    // Avoid Negatives
    if (counter > 0) {
      setCounter(counter - 1);
    }

  }

  const Reset = () => {
    setCounter(0);
  }

  return (
    <>
      <h1>1. Counter Project</h1>

      <h2>Counter Value : {counter}</h2>

      <button onClick={Increment}>Increment {counter}</button>
      <br />
      <button onClick={Reset}>Reset</button>
      <br />
      <button onClick={Decrement}>Decrement {counter}</button>
    </>
  )
}

export default App
