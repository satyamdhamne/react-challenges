import React from 'react'
import { useState } from 'react'

function Reset({ count, setCount }) {
    const handleReset = () =>{
        setCount(0);
    }
  return (
    <div>
    <button className="bg-yellow-500 hover:bg-yellow-700  text-white font-bold py-2 px-4 border border-black rounded cursor-pointer" onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Reset