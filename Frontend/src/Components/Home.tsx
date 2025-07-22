import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear token or any session data
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="home-page-container">
      <div className="home-card" >
        <h3>Welcome to the Home Page 🎉</h3>
        <p>You are now logged in.</p>
        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
