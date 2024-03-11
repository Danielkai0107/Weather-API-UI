import React, { useEffect, useState } from 'react'

const Time = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString('zh-TW', { hour12: false }),
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('zh-TW', { hour12: true }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <span>{currentTime}</span>
  )
}

export default Time
