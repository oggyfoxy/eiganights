import React, { useEffect, useState } from 'react';

const Barcode: React.FC = () => {
  const [bars, setBars] = useState<number[]>([]);

  useEffect(() => {
    const newBars = Array.from({ length: 100 }, () => Math.random() > 0.7 ? 4 : 2);
    setBars(newBars);
  }, []);

  return (
    <div className="barcode">
      {bars.map((width, index) => (
        <span key={index} style={{ width: `${width}px` }}></span>
      ))}
    </div>
  );
};

export default Barcode;
