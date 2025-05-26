import React, { useState, useTransition } from 'react';

// Simulate a slow computation
const slowFilter = (items, query) => {
  console.log('Filtering with slow computation...');
  
  // Artificially slow down the filtering
  const startTime = performance.now();
  while (performance.now() - startTime < 100) {
    // Artificial delay
  }

  return items.filter(item => 
    item.toLowerCase().includes(query.toLowerCase())
  );
};

function UseTransitionChallenge() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isPending, startTransition] = useTransition();
  const [filteredResults, setFilteredResults] = useState([]);

  // Generate a large array of items
  const allItems = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value); // This update is immediate

    // Wrap the slow filtering in startTransition
    startTransition(() => {
      const results = slowFilter(allItems, value);
      setFilteredResults(results);
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">useTransition Challenge</h2>
      <div className="space-y-4">
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search items..."
            className="w-full border p-2 rounded"
          />
          <p className="text-sm text-gray-600 mt-2">
            Current search term: {searchTerm}
          </p>
        </div>

        <div>
          {isPending ? (
            <div className="text-blue-500">Loading results...</div>
          ) : (
            <div className="h-64 overflow-auto border rounded">
              {filteredResults.map((item, index) => (
                <div key={index} className="p-2 border-b">
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        <p className="text-sm text-gray-600">
          Type to search through {allItems.length} items.
          The search input remains responsive while results update in the background.
        </p>
      </div>
    </div>
  );
}

export default UseTransitionChallenge;
