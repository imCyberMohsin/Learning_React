import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  // Hooks : Variables
  //? useState hook
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  //? useRef hook : for reference
  // pass this passwordRef to passwordInput field to take the password reference
  const passwordRef = useRef(null);


  //? useCallback : Keep methods in cache(remembers)
  // useCallback(function, [dependencies]);
  // Password generator method
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "&!@#$%^&*"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char);
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  //? Copy Method
  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    // alert('Password Copied To Clipboard');
  }, [password]);

  //? useEffect : When any parameter is changed, re-run the code/function.
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='bg-gray-700 h-screen w-full flex flex-col justify-center items-center'>
        <div className="bg-gray-400 p-6 rounded-md">
          <h1 className='text-3xl text-gray-800 pb-5 text-center font-semibold'>Password Generator</h1>

          <div className='flex justify-center items-center gap-2'>
            <input type="text" value={password} placeholder='23bhiwgf374skdbf' readOnly ref={passwordRef} className="p-2 bg-gray-200 w-full rounded-md outline-none ring-2 ring-gray-200 focus:ring-blue-500 transition-all duration-200" />
            <button className='p-2 border-2 bg-blue-500 rounded-md text-white font-semibold hover:bg-blue-600 focus:bg-blue-700'
              onClick={copyPasswordToClipboard}
            >copy</button>
          </div>

          <div className='flex gap-8 my-3'>
            {/* Range */}
            <div className='flex items-center gap-2 py-2'>
              <input type="range" min={6} max={30} value={length} className='cursor-pointer'
                onChange={(e) => { setLength(e.target.value) }}
              />
              <label htmlFor="range">Length: {length}</label>
            </div>

            {/* Number Allowed */}
            <div className='flex items-center gap-2 py-2'>
              <input type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev)
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>

            {/* Characters allowed */}
            <div className='flex items-center gap-2 py-2'>
              <input type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev)
                }}
              />
              <label htmlFor="characterInput">Characters</label>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
