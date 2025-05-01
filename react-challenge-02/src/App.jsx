import { useState } from 'react'
import './App.css'
import UserCard from './Components/UserCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className="text-3xl font-bold underline bg-red-600 text-black p-4">
        Hello world!
      </h1>
      <div className='App'>
        <UserCard
          name="sam"
          age="23"
          location="USA"
        />
      </div>
    </div>
  )
}

export default App