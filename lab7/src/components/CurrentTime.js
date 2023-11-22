// components/CurrentTime.js
import React, { useState, useEffect } from 'react';

const CurrentTime = ({ sharedDateInstance }) => {
  const [currentTime, setCurrentTime] = useState(sharedDateInstance);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [sharedDateInstance]);

  const formattedTime = currentTime.toLocaleTimeString();

  return <div className="current-time">{formattedTime}</div>;
}

export default CurrentTime;