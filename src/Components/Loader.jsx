import React, { useState, useEffect } from 'react';
import '../styles/loader.css';


function Loader() {
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    const duration = 1000; // 2 seconds
    const increment = 1; // increment by 1%
    const intervalTime = duration / (100 / increment);

    const interval = setInterval(() => {
      setLoadingPercentage(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='loader-background'>
    <div className='loader-container py-48'>
      <div className='loader-bar' style={{ width: `${loadingPercentage}%` }}>
        {loadingPercentage}%
      </div>
    </div>
    </div>
  );
}

export default Loader;
