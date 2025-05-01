import React from 'react'
import { useState } from 'react' 

function Decrement({ count, setCount }) {
  const handleDecrement = () => {
    if (count > 0) {
        setCount(count - 1);
    } else {
        alert("Count cannot be negative");
    }
  } 
  
  return (
    <div>
        <button className="bg-red-500 hover:bg-red-700  text-white font-bold py-2 px-4 border border-black-700 rounded cursor-pointer" onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Decrement