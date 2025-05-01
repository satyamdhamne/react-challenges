import { useState } from 'react'
import './App.css'
import Increment from './Components/Increment'
import Decrement from './Components/Decrement'
import Reset from './Components/Reset'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline bg-gray-600 text-center text-yellow-400 p-4">
          Counter is Loading!
        </h1>
        <div className="flex justify-center items-center p-4 mt-10">
          <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-6 w-full max-w-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Counter Card</h2>
            <p className="text-gray-600 mb-4 text-center">Current Count: {count}</p>
            <div className="flex justify-between gap-2">
              <Increment count={count} setCount={setCount} />
              <Decrement count={count} setCount={setCount} />
              <Reset count={count} setCount={setCount} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
