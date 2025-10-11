import React from 'react';
import './RecentWorkouts.css';

const workouts = [
  { type: 'Gimnasio', name: 'Pierna', date: '12/09/25', time: '01:17:20' },
  { type: 'Running', name: 'Easy run', date: '11/09/25', time: '01:17:20' },
  { type: 'Gimnasio', name: 'Pecho', date: '10/09/25', time: '01:17:20' },
];

const RecentWorkouts = () => {
  return (
    <div className="workouts-card">
      <h3>Entrenamientos recientes</h3>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            <span>{workout.type === 'Gimnasio' ? '🏋️‍♂️' : '🏃‍♂️'}</span>
            <span>{workout.type}: '{workout.name}' – {workout.date} – {workout.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentWorkouts;