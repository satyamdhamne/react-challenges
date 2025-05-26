import { useEffect , useState } from "react"
import React  from 'react'

function UseEffectHook({ quotes, loading, onRefresh }) {
    
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Trump Quotes</h2>
          <ul style={{ listStyle: 'none', padding: '20px' }}>
            {quotes.map((quote, index) => (
              <li 
                key={index}
                style={{
                  padding: '10px',
                  margin: '10px 0',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '5px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                {quote}
              </li>
            ))}
          </ul>
          <button 
            onClick={onRefresh}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Refresh Quotes
          </button>
        </div>
      )}
    </div>
  )
}

export default UseEffectHook