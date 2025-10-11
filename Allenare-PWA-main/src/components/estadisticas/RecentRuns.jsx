import React from 'react';
import './RecentRuns.css';

const runs = [
  { name: 'Easy run', date: '11/09/25', time: '01:17:20' },
  { name: 'Easy run', date: '11/09/25', time: '01:17:20' },
  { name: 'Easy run', date: '11/09/25', time: '01:17:20' },
  { name: 'Easy run', date: '11/09/25', time: '01:17:20' },
  { name: 'Easy run', date: '11/09/25', time: '01:17:20' },
];

const RecentRuns = () => {
  return (
    <div className="runs-card">
      <h3>Carreras recientes</h3>
      <ul>
        {runs.map((run, index) => (
          <li key={index}>
            <span>🏃‍♂️</span>
            <span>Running: '{run.name}' – {run.date} – {run.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentRuns;