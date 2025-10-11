import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/registro"><div className="sidebar-icon">📋</div></Link>
      <Link to="/estadisticas"><div className="sidebar-icon">📈</div></Link>
      <Link to="/fuerza"><div className="sidebar-icon">🏋️‍♂️</div></Link>
      <Link to="/"><div className="sidebar-icon active">🏃‍♂️</div></Link>
      <Link to="/"><div className="sidebar-icon">📍</div></Link>
    </div>
  );
};

export default Sidebar;