import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../components/context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, [isAuthenticated]);

  const handleLogout = () => {
    logout();
    localStorage.removeItem('userName'); // Remove the stored user name on logout
    // Reload the page after logout
    window.location.reload();
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {isAuthenticated && (
          <>
            <Link to="/form" className="py-2 px-3 rounded hover:bg-gray-700">Form</Link>
            <Link to="/" className="py-2 px-3 rounded hover:bg-gray-700">Home</Link>

            <button onClick={handleLogout} className="py-2 px-3 rounded hover:bg-gray-600">Logout</button>
            {userName && <span className="text-gray-300 ml-2">Welcome, {userName}</span>}
          </>
        )}
        {!isAuthenticated && <Link to="/signin" className="py-2 px-3 rounded hover:bg-gray-700">Login First</Link>}
      </div>
    </nav>
  );
};

export default Navbar;
