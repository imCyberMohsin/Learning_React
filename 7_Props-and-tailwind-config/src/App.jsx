import Card from './components/Card'

function App() {
  // Object to pass as props
  let Obj = {
    name: 'Mohsin(From Object)',
    age: 21
  }
  // Array to pass as props
  let arr = [1, 2, 3];

  return (
    <>
      <h1 className='bg-green-500 rounded-xl p-3 mb-5'>Testing Tailwind</h1>

      {/* Cards */}
      <Card username="Mohsin" btnText='Click Me'/>
      <Card username="Alisha" btnText='Visit Me'/>
    </>
  )
}

export default App
