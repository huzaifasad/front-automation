import React, { useEffect, useState } from 'react';

const Alert = ({ message, type = "info", onClose }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    const interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress - 1);
    }, 30);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [onClose]);

  const getColorClass = () => {
    switch (type) {
      case 'error':
        return 'bg-red-500';
      case 'success':
        return 'bg-green-500';
      default:
        return 'bg-blue-500'; // Default color if type is not specified
    }
  };

  return (
    <div className={`absolute top-20 right-5 z-50 p-4 rounded-lg text-white shadow-md max-w-sm ${getColorClass()}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold">{type === 'error' ? 'Error:' : 'Success:'}</span>
        <span>{progress}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded">
        <div
          className={`h-full rounded ${getColorClass()}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="mt-2">{message}</div>
    </div>
  );
};

export default Alert;
