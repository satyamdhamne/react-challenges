import React, { createContext, useContext, useState } from 'react';

// Create a context
const ThemeContext = createContext();

function UseContextHook() {
  // Move useState inside the component
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div style={{backgroundColor: theme === 'light' ? '#fff' : '#333'}}>
        <h1 style={{ color: theme === 'light' ? '#000' : '#fff' }}>
          Current Theme: {theme}
        </h1>
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          style={{
            padding: '10px 20px',
            backgroundColor: theme === 'light' ? '#007bff' : '#555',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Toggle Theme
        </button>
      </div>
    </ThemeContext.Provider>
  )
}

export default UseContextHook