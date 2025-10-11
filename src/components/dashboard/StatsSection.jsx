import React from 'react';
import './StatsSection.css';

const renderContent = (type) => {
  switch (type) {
    case 'workouts':
      return (
        <div className="stat-content">
          <p>2/3 🏋️‍♂️</p>
          <p>1/3 🏃‍♂️</p>
        </div>
      );
    case 'distance':
      return (
        <div className="stat-content text-center distance-content">
          <div className="distance-text-group"> {/* Nuevo div para agrupar texto */}
            <p className="main-stat">24 km</p>
            <p className="sub-stat">¡Estás en racha!</p>
          </div>
          <span className="runner-icon">🏃‍♂️</span>
        </div>
      );
    case 'goals':
      return (
        <div className="stat-content">
          <p>21 km</p>
          <p>10 km</p>
        </div>
      );
    default:
      return null;
  }
};

const StatsSection = ({ title, content }) => {
  return (
    <div className="stats-card">
      <h3>{title}</h3>
      {renderContent(content)}
    </div>
  );
};

export default StatsSection;