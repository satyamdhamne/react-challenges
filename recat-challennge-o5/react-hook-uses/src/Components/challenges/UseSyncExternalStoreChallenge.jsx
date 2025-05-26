import React, { useSyncExternalStore } from 'react';

// Create a simple external store
const createStore = (initialState) => {
  let state = initialState;
  const listeners = new Set();

  return {
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    getState: () => state,
    setState: (newState) => {
      state = typeof newState === 'function' ? newState(state) : newState;
      listeners.forEach(listener => listener());
    }
  };
};

// Create an instance of our store
const store = createStore({ count: 0 });

function UseSyncExternalStoreChallenge() {
  // Subscribe to the store using useSyncExternalStore
  const state = useSyncExternalStore(
    store.subscribe,
    store.getState
  );

  const increment = () => {
    store.setState(prev => ({ ...prev, count: prev.count + 1 }));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">useSyncExternalStore Challenge</h2>
      <div className="space-y-4">
        <p className="text-lg">External Store Count: {state.count}</p>
        <button
          onClick={increment}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Increment Count
        </button>
        <p className="text-sm text-gray-600">
          The count is stored in an external store and synchronized with React's state management.
        </p>
      </div>
    </div>
  );
}

export default UseSyncExternalStoreChallenge;
