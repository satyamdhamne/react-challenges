import { useState } from 'react'

    function UseStateHook({ isOn, setOn }) {  // Add curly braces here for props destructuring
  return (
    <>
      <label>Toggle checkbox</label>
      <input 
        type="checkbox" 
        checked={isOn} 
        onChange={(e) => setOn(e.target.checked)}
      />
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: isOn ? 'green' : 'red',
        zIndex: -1
      }}>
      </div>    
    </>
  )
}

export default UseStateHook