import React from 'react';
import './DistanceChart.css';

const DistanceChart = () => {
  return (
    <div className="distance-chart-card">
      <div className="distance-text-group">
        <h3>Total de km recorridos</h3>
        <p className="main-stat">24 km</p>
        <p className="sub-stat">¡Estás en racha!</p>
      </div>
      <div className="chart-placeholder">
        {/* Aquí iría el gráfico de barras */}
      </div>
      <span className="runner-icon">🏃‍♂️</span>
    </div>
  );
};

export default DistanceChart;