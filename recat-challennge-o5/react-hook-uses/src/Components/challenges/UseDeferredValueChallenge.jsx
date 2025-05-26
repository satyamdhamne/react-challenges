import React, { useState, useDeferredValue, useMemo } from 'react';

// Component to demonstrate expensive rendering
const SlowList = ({ text }) => {
  const items = useMemo(() => {
    // Create an array of 10000 items based on the input text
    return Array.from({ length: 10000 }, (_, i) => (
      <div key={i} className="p-1">
        Item {i}: {text}
      </div>
    ));
  }, [text]);

  return <div className="h-64 overflow-auto border rounded">{items}</div>;
};

function UseDeferredValueChallenge() {
  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text);

  // Show visual indication when deferred value is different from current value
  const isStale = text !== deferredText;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">useDeferredValue Challenge</h2>
      <div className="space-y-4">
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type to see deferred updates..."
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <p className="font-semibold">Immediate Value: {text}</p>
          <p className={`font-semibold ${isStale ? 'text-gray-400' : ''}`}>
            Deferred Value: {deferredText}
          </p>
        </div>

        <SlowList text={deferredText} />
      </div>
    </div>
  );
}

export default UseDeferredValueChallenge;
