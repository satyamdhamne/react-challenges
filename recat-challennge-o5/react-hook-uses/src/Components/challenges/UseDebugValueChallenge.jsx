import React from 'react';
import { useDebugValue, useState } from 'react';

// Custom hook with debug value
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  
  // This will show up in React DevTools
  useDebugValue(value ? 'On' : 'Off');
  
  const toggle = () => setValue(prev => !prev);
  
  return [value, toggle];
}

function UseDebugValueChallenge() {
  const [isOn, toggleOn] = useToggle(false);
  
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">useDebugValue Challenge</h2>
      <div className="space-y-4">
        <p>Current State: {isOn ? 'On' : 'Off'}</p>
        <button
          onClick={toggleOn}
          className={`px-4 py-2 rounded ${
            isOn ? 'bg-green-500' : 'bg-red-500'
          } text-white`}
        >
          Toggle State
        </button>
        <p className="text-sm text-gray-600">
          Open React DevTools to see the debug value!
        </p>
      </div>
    </div>
  );
}

export default UseDebugValueChallenge;
