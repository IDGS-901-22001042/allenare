import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ showIcons = true, username = "(username)", email = "(correo)" }) => {
  return (
    <header className="header">
      <div className="user-profile">
        <Link to="/">
          <img src="https://graph.facebook.com/1449527692254051/picture?height=256&width=256" alt="User Avatar" className="avatar" />
        </Link>
        <div className="user-info">
          <h1>Bienvenido, {username}!</h1>
          <p>{email}</p>
        </div>
      </div>
      {showIcons && (
        <div className="header-icons">
          <div className="icon-circle">⚙️</div>
          <div className="icon-circle">🔔</div>
        </div>
      )}
    </header>
  );
};

export default Header;