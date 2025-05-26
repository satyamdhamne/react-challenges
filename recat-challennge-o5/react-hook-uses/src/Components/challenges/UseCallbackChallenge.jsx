import React, { useState, useCallback } from 'react';

const Child = React.memo(({ value, onIncrement }) => {
  console.log('Child rendered!');
  return (
    <div className="border p-4 my-2 rounded-lg">
      <h3 className="text-lg font-semibold">Child Component</h3>
      <p>Value: {value}</p>
      <button
        onClick={onIncrement}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Increment Value A
      </button>
    </div>
  );
});

function UseCallbackChallenge() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  const incrementA = useCallback(() => {
    setCountA(prev => prev + 1);
  }, []); // No dependencies needed as we use functional update

  const incrementB = () => {
    setCountB(prev => prev + 1);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">useCallback Challenge</h2>
      <div className="mb-4">
        <p>Count B (Unrelated State): {countB}</p>
        <button
          onClick={incrementB}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Increment B
        </button>
      </div>
      <Child value={countA} onIncrement={incrementA} />
    </div>
  );
}

export default UseCallbackChallenge;
