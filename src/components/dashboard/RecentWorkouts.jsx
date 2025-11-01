import React from "react";
import "./RecentWorkouts.css";

const RecentWorkouts = ({ workouts = [] }) => {
  // Recibe 'workouts' como prop y tiene un valor por defecto
  return (
    <div className="recent-workouts-card">
      <h3>Entrenamientos recientes</h3>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            {/* Puedes cambiar el ícono según el tipo de entrenamiento si lo deseas */}
            <span>🏃‍♂️</span>
            <span>
              {workout.type}: '{workout.name}' – {workout.date} – {workout.time}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentWorkouts;
