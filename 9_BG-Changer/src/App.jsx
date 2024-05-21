import { useState } from "react"

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
      <section className="h-screen w-full flex flex-col justify-end items-center" style={{ backgroundColor: color }}>
        <div className="cursor-pointer shadow-lg bg-white w-fit flex flex-wrap gap-10 justify-evenly py-3 px-5 mb-20 rounded-2xl text-center font-semibold">
          <a
            onClick={() => setColor("green")}
            className="cursor-pointer shadow-lg bg-green-500 w-20 p-2 rounded-full ">Green</a>
          <a
            onClick={() => setColor("crimson")}
            className="cursor-pointer shadow-lg bg-red-500 w-20 p-2 rounded-full ">Red</a>
          <a
            onClick={() => setColor("purple")}
            className="cursor-pointer shadow-lg bg-purple-500 w-20 p-2 rounded-full ">Lavender</a>
          <a
            onClick={() => setColor("blue")}
            className="cursor-pointer shadow-lg bg-blue-500 w-20 p-2 rounded-full ">Blue</a>
          <a
            onClick={() => setColor("yellow")}
            className="cursor-pointer shadow-lg bg-yellow-500 w-20 p-2 rounded-full ">Yellow</a>
          <a
            onClick={() => setColor("pink")}
            className="cursor-pointer shadow-lg bg-pink-500 w-20 p-2 rounded-full ">Pink</a>
          <a
            onClick={() => setColor("white")}
            className="cursor-pointer shadow-lg bg-white border-2 w-20 p-2 rounded-full ">White</a>
          <a
            onClick={() => setColor("gray")}
            className="cursor-pointer shadow-lg bg-gray-500 w-20 p-2 rounded-full ">Gray</a>
        </div>
      </section>
    </>
  )
}

export default App
