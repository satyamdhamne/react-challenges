import React, { useRef } from 'react'

function UseRefHook() {
  const videoRef = useRef(null);

  function playVideo() {
    if (videoRef.current) {
      // Using YouTube Player API commands
      videoRef.current.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }
  }

  function pauseVideo() {
    if (videoRef.current) {
      // Using YouTube Player API commands
      videoRef.current.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <iframe 
        ref={videoRef}
        width="420" 
        height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY?enablejsapi=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <div style={{ marginTop: '10px' }}>
        <button 
          onClick={playVideo}
          style={{ margin: '0 10px', padding: '5px 15px' }}
        >
          Play
        </button>
        <button 
          onClick={pauseVideo}
          style={{ margin: '0 10px', padding: '5px 15px' }}
        >
          Pause
        </button>
      </div>
    </div>
  )
}

export default UseRefHook