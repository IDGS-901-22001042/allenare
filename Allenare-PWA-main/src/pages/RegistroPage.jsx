import React from 'react';
import Header from '../components/dashboard/Header';
import RecentWorkouts from '../components/dashboard/RecentWorkouts';
import RegistroFormulario from '../components/registros/RegistroFormulario';
import StatsSection from '../components/dashboard/StatsSection';

const RegistroPage = () => {
  return (
    <div className="main-content">
      <Header />
      <div> {/* Aquí hemos eliminado la clase "registro-grid" */}
        <StatsSection title="Días de entrenamiento" content="workouts" className="inline-stats" />
      </div>
      <div className="registro-bottom-sections">
        <RecentWorkouts />
        <RegistroFormulario />
      </div>
    </div>
  );
};

export default RegistroPage;