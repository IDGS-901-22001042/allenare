import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation(); // Hook para obtener la ruta actual

  return (
    <div className="sidebar">
      <Link to="/registro" className={location.pathname === '/registro' ? 'active' : ''}><div className="sidebar-icon">📋</div></Link>
      <Link to="/estadisticas" className={location.pathname === '/estadisticas' ? 'active' : ''}><div className="sidebar-icon">📈</div></Link>
      <Link to="/fuerza" className={location.pathname === '/fuerza' ? 'active' : ''}><div className="sidebar-icon">🏋️‍♂️</div></Link>
      <Link to="/dashboard" className={location.pathname === '/dashboard' || location.pathname === '/' ? 'active' : ''}><div className="sidebar-icon">🏃‍♂️</div></Link> {/* / y /dashboard serán activos para el icono de correr */}
      {/* Puedes ajustar la última ruta o eliminarla si no es necesaria */}
      <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}><div className="sidebar-icon">📍</div></Link>
    </div>
  );
};

export default Sidebar;