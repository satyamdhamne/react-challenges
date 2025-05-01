import React from 'react'
import { useState } from 'react'


function Increment({ count, setCount }) {
    const handleIncrement = () => {
        setCount(count + 1);
    }
  return (
    <div>
   <button className="bg-green-500 hover:bg-green-700  text-white font-bold py-2 px-4 border border-black rounded cursor-pointer" onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Increment