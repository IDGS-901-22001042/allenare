import React from 'react';
import './RecentStrengthWorkouts.css';

const strengthWorkouts = [
  { name: 'Pierna', date: '12/09/25', time: '01:17:20' },
  { name: 'Pecho', date: '10/09/25', time: '01:17:20' },
  { name: 'Pierna', date: '12/09/25', time: '01:17:20' },
  { name: 'Pecho', date: '10/09/25', time: '01:17:20' },
];

const RecentStrengthWorkouts = () => {
  return (
    <div className="recent-workouts-card">
      <h3>Entrenamientos recientes</h3>
      <ul>
        {strengthWorkouts.map((workout, index) => (
          <li key={index}>
            <span>🏋️‍♂️</span>
            <span>Gimnasio: '{workout.name}' – {workout.date} – {workout.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentStrengthWorkouts;