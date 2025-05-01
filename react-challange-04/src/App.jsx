import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Registerform from './Components/Registerform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='text-3xl bg-amber-400 text-center text-white p-4'>Form Handeling In React</h1>
        <div className="flex justify-center items-center h-screen">
          <Registerform />
          </div>
       </div>
    </>
  )
}

export default App
