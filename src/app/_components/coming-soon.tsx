'use client';
import React, { useState, useEffect } from 'react';
import './coming-soon.css';

const ComingSoon = () => {
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev + 1) % 4);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="coming-soon">
      <h3>Coming Soon{'.'.repeat(dotCount)}</h3>
    </div>
  );
};

export default ComingSoon;
