import React, { useState, useEffect } from 'react';

const ProgressBar = ({ value }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Actualiza el valor de progreso cuando el valor 'value' cambie
    setProgress(value > 100 ? 100 : value < 0 ? 0 : value);
  }, [value]);

  const handleMinusClick = () => {
    setProgress(prevProgress => Math.max(prevProgress - 1, 0));
  };

  const handlePlusClick = () => {
    setProgress(prevProgress => Math.min(prevProgress + 1, 100));
  };

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%`, height: '20px', backgroundColor: 'blue' }} />
      <div className="progress-value">{progress}%</div>
    </div>
  );
};

export default ProgressBar;
