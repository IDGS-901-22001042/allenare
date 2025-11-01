import React from "react";
import "./RecentStrengthWorkouts.css";

const RecentStrengthWorkouts = ({ workouts }) => {
  // Recibe 'workouts' como prop
  return (
    <div className="recent-workouts-card">
      <h3>Entrenamientos recientes</h3>
      <ul>
        {workouts.map(
          (
            workout,
            index // Usa la prop 'workouts'
          ) => (
            <li key={index}>
              <span>🏋️‍♂️</span>
              <span>
                Gimnasio: '{workout.name}' – {workout.date} – {workout.time}
              </span>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default RecentStrengthWorkouts;
