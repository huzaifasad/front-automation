import React from 'react';

const Alert = ({ message, type = "info", onClose }) => {
  setTimeout(onClose, 3000);  // Auto-close after 3 seconds

  return (
    <div className={`fixed top-5 right-5 z-50 p-4 rounded text-white bg-${type === 'error' ? 'red-500' : 'green-500'}`}>
      {message}
    </div>
  );
};

export default Alert;
