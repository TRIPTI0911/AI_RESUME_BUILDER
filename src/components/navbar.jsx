import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', background: '#f8f9fa', display: 'flex', justifyContent: 'space-between' }}>
      <h2>AI Resume Builder</h2>
      <div>
        <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
        <Link to="/login" style={{ margin: '0 10px' }}>Login</Link>
        <Link to="/dashboard" style={{ margin: '0 10px' }}>Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
