import React from 'react';

const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-25 z-50">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-300"></div>
  </div>
);

export default Loader;
