import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-icon">📋</div>
      <div className="sidebar-icon">📈</div>
      <div className="sidebar-icon">🏋️‍♂️</div>
      <div className="sidebar-icon">🏃‍♂️</div>
      <div className="sidebar-icon active">📍</div>
    </div>
  );
};

export default Sidebar;