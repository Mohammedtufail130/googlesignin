import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StudioLanding from './StudioLanding';

function Dashboard() {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem('user-info');
    const userData = JSON.parse(data);
    setUserInfo(userData);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user-info');
    navigate('/login');
  };

  return (
    <div>
      {/* Full-Width Inline Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.navContent}>
          <div style={styles.profileSection}>
            <img
              src={userInfo?.image}
              alt={userInfo?.email}
              style={styles.profileIcon}
            />
            <div>
              <h2 style={styles.welcome}>Welcome, {userInfo?.name}</h2>
              <p style={styles.email}>{userInfo?.email}</p>
            </div>
          </div>
          <button style={styles.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      {/* Margin to prevent overlap due to fixed navbar */}
      <div style={{ marginTop: '100px' }}>
        <StudioLanding />
      </div>
    </div>
  );
}

// ✨ Inline styles
const styles = {
  navbar: {
    width: '100%',
    backgroundColor: 'black',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    padding: '10px 10px',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 999,
    
  },
  navContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  profileSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  profileIcon: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  welcome: {
    margin: 0,
    fontSize: '16px',
    fontWeight: '800',
    color: 'white',
  },
  email: {
    margin: 0,
    fontSize: '10px',
    color: '#999',
  },
  logoutButton: {
    background: 'linear-gradient(135deg,rgb(103, 152, 231), #1a73e8)',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '14px',
    fontWeight: '600',
    letterSpacing: '0.5px',
    borderRadius: '30px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 14px rgba(66, 133, 244, 0.4)',
    transition: 'all 0.3s ease',
  },
};

export default Dashboard;
