import React, { useState } from "react";
import Header from "../components/dashboard/Header";
import StatsSection from "../components/entrenamientoFuerza/StatsFuerza";
import RecentStrengthWorkouts from "../components/entrenamientoFuerza/RecentStrengthWorkouts";
import RegistroEjercicio from "../components/entrenamientoFuerza/RegistroEjercicio";

const FuerzaPage = () => {
  // Estado para almacenar los entrenamientos de fuerza
  const [strengthWorkouts, setStrengthWorkouts] = useState([
    {
      name: "Pierna",
      date: "12/09/25",
      time: "01:17:20",
      type: "Gimnasio",
      exercises: "Squats, Lunges",
      duration: "60min",
      description: "Leg day focus on strength",
    },
    {
      name: "Pecho",
      date: "10/09/25",
      time: "01:17:20",
      type: "Gimnasio",
      exercises: "Bench Press, Push-ups",
      duration: "45min",
      description: "Chest workout",
    },
  ]);

  const handleAddWorkout = (newWorkout) => {
    setStrengthWorkouts((prevWorkouts) => [newWorkout, ...prevWorkouts]); // Añade el nuevo entrenamiento al principio de la lista
  };

  return (
    <div className="fuerza-content">
      <Header showIcons={true} />
      <div className="registro-grid">
        <StatsSection
          title="Días de entrenamiento (fuerza)"
          content="workouts"
          className="inline-stats"
        />
      </div>
      <div className="registro-bottom-sections">
        <RecentStrengthWorkouts workouts={strengthWorkouts} />{" "}
        {/* Pasa los entrenamientos como prop */}
        <RegistroEjercicio onAddWorkout={handleAddWorkout} />{" "}
        {/* Pasa la función para añadir entrenamientos */}
      </div>
    </div>
  );
};

export default FuerzaPage;
