import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';  // Correct path based on structure
import Form from './components/pages/Form';  // Correct path based on structure
import Sign from './components/auth/Sign';
import Signup from './components/auth/Signup';
import Navbar from './components/Navabar';  // Correct path based on structure
import { AuthProvider } from './components/context/AuthContext';  // Correct path based on structure
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route index element={<Home />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Sign />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
