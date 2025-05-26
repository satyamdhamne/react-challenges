import React, { useState, useMemo } from 'react';

// Expensive calculation function (Fibonacci)
const calculateFibonacci = (n) => {
  if (n <= 1) return n;
  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
};

// Generate random list of items
const generateItems = (count) => {
  return Array.from({ length: count }, (_, index) => ({
    id: index,
    name: `Item ${Math.random().toString(36).substr(2, 9)}`
  }));
};

function UseMemoChallenge() {
  // Challenge 7.1: Expensive Calculation
  const [number, setNumber] = useState(35);
  const [counter, setCounter] = useState(0);

  const fibonacciResult = useMemo(() => calculateFibonacci(number), [number]);

  // Challenge 7.2: Filtering a Large List
  const [searchTerm, setSearchTerm] = useState('');
  const items = useMemo(() => generateItems(1000), []); // Generate once

  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">useMemo Challenges</h2>
      
      {/* Challenge 7.1 */}
      <div className="mb-8 p-4 border rounded">
        <h3 className="text-xl font-semibold mb-4">Expensive Calculation</h3>
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Enter Fibonacci number:</label>
            <input
              type="number"
              value={number}
              onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
              className="border p-2 rounded"
            />
          </div>
          <div>
            <p>Fibonacci Result: {fibonacciResult}</p>
            <p>Unrelated Counter: {counter}</p>
            <button
              onClick={() => setCounter(c => c + 1)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Increment Counter
            </button>
          </div>
        </div>
      </div>

      {/* Challenge 7.2 */}
      <div className="mb-8 p-4 border rounded">
        <h3 className="text-xl font-semibold mb-4">Filtering Large List</h3>
        <div className="space-y-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search items..."
            className="w-full border p-2 rounded"
          />
          <div className="h-64 overflow-auto border rounded">
            {filteredItems.map(item => (
              <div key={item.id} className="p-2 border-b">
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseMemoChallenge;
