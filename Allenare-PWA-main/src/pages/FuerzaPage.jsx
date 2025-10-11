import React from 'react';
import Header from '../components/dashboard/Header';
import StatsSection from '../components/entrenamientoFuerza/StatsFuerza';
import RecentStrengthWorkouts from '../components/entrenamientoFuerza/RecentStrengthWorkouts';
import RegistroEjercicio from '../components/entrenamientoFuerza/RegistroEjercicio';

const FuerzaPage = () => {
  return (
    <div className="main-content">
      <Header showIcons={true} />
      <div className="registro-grid">
        <StatsSection title="Días de entrenamiento (fuerza)" content="workouts" className="inline-stats" />
      </div>
      <div className="registro-bottom-sections">
        <RecentStrengthWorkouts />
        <RegistroEjercicio />
      </div>
    </div>
  );
};

export default FuerzaPage;