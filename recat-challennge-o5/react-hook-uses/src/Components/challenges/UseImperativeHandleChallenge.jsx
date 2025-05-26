import React, { useImperativeHandle, useRef, forwardRef } from 'react';

const ChildInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    clear: () => {
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    }
  }));

  return (
    <input
      ref={inputRef}
      type="text"
      className="border p-2 rounded"
      placeholder="Type something..."
    />
  );
});

function UseImperativeHandleChallenge() {
  const childRef = useRef(null);

  const handleClick = () => {
    if (childRef.current) {
      childRef.current.focus();
      childRef.current.clear();
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">useImperativeHandle Challenge</h2>
      <div className="space-y-4">
        <ChildInput ref={childRef} />
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Focus and Clear Input
        </button>
      </div>
    </div>
  );
}

export default UseImperativeHandleChallenge;
