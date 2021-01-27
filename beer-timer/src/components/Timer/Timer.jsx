import React, { useState, useEffect } from 'react';

const Timer = props => {
  const {totalTime} = props;
  const [ currentTime, setCurrentTime ] = useState(totalTime);
  const [ isActive, setIsActive ] = useState(false);
  
  useEffect(
    () => {
      let timeout;
      if (isActive && currentTime > 0) {
        timeout = setTimeout(() => {
          setCurrentTime(currentTime -1);
        }, 1000);
      }
      return () => {clearTimeout(timeout)};
   },
   [ isActive, currentTime, setCurrentTime ]
  );

  return (
    <>
      <button
        onClick={() => {setIsActive(!isActive)}}
      >
        Start timer
      </button>
      <p>I am a timer! {currentTime}</p>
    </>
  );
}

export default Timer;
