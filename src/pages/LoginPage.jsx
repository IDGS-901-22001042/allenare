import React from 'react';
import LoginForm from './LoginForm'; // Ajustado a la ubicación actual del archivo
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Allenare</h2>
        <p>Bienvenido de nuevo</p>
        <LoginForm onLogin={onLogin} />
      </div>
    </div>
  );
};

export default LoginPage;