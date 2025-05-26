import React, { useLayoutEffect, useState, useRef } from 'react';

function UseLayoutEffectChallenge() {
  // Challenge 8.1: Tooltip Positioning
  const [showTooltip, setShowTooltip] = useState(false);
  const buttonRef = useRef(null);
  const tooltipRef = useRef(null);
  
  useLayoutEffect(() => {
    if (showTooltip && buttonRef.current && tooltipRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      tooltipRef.current.style.position = 'absolute';
      tooltipRef.current.style.top = `${buttonRect.bottom + window.scrollY + 5}px`;
      tooltipRef.current.style.left = `${buttonRect.left + window.scrollX}px`;
    }
  }, [showTooltip]);

  // Challenge 8.2: Scroll to Bottom
  const [messages, setMessages] = useState([
    "Message 1", "Message 2", "Message 3"
  ]);
  const chatRef = useRef(null);

  useLayoutEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const addMessage = () => {
    setMessages(prev => [...prev, `Message ${prev.length + 1}`]);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">useLayoutEffect Challenges</h2>

      {/* Challenge 8.1: Tooltip */}
      <div className="mb-8 p-4 border rounded relative">
        <h3 className="text-xl font-semibold mb-4">Tooltip Positioning</h3>
        <button
          ref={buttonRef}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Hover me
        </button>
        {showTooltip && (
          <div
            ref={tooltipRef}
            className="bg-black text-white p-2 rounded text-sm"
          >
            This is a tooltip
          </div>
        )}
      </div>

      {/* Challenge 8.2: Chat */}
      <div className="mb-8 p-4 border rounded">
        <h3 className="text-xl font-semibold mb-4">Chat Scroll</h3>
        <div
          ref={chatRef}
          className="h-48 overflow-auto border rounded p-4 mb-4"
        >
          {messages.map((msg, index) => (
            <div key={index} className="p-2 mb-2 bg-gray-100 rounded">
              {msg}
            </div>
          ))}
        </div>
        <button
          onClick={addMessage}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Message
        </button>
      </div>
    </div>
  );
}

export default UseLayoutEffectChallenge;
