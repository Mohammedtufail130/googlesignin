import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem('user-info'));

  const handleLogout = () => {
    localStorage.removeItem('user-info');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {userInfo && (
          <div className="profile">
            <img
              src={userInfo.image}
              alt={userInfo.email}
              className="profile-icon"
            />
            <span className="welcome-message">Welcome, {userInfo.name}</span>
          </div>
        )}
      </div>
      <div className="navbar-right">
        {userInfo ? (
          <button className="nav-button" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className="nav-button" onClick={() => navigate('/login')}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
