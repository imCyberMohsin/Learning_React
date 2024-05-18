//! 1. Rendering

import React from 'react'

const App = () => {
  /* This Area is used for JS scripts */
  // const array = [1, 2, 3, 4, 5]
  const x = "Learning React.js"
  let gender = "boy";

  return (
    <>
      <h1><i>{x}</i></h1>
      {gender === "boy" ? <h1>Boy</h1> : <h1>Girl</h1>}
    </>
  )
}

export default App