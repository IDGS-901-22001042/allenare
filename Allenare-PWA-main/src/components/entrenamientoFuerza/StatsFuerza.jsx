import React from 'react';
import './StatsFuerza.css';

const renderContent = (type) => {
  switch (type) {
    case 'workouts':
      return (
        <div className="stat-content">
          <p>2/3 🏋️‍♂️</p>
        </div>
      );
    default:
      return null;
  }
};

const StatsSection = ({ title, content, className }) => {
  return (
    <div className={`stats-card ${className || ''}`}>
      <h3>{title}</h3>
      {renderContent(content)}
    </div>
  );
};

export default StatsSection;