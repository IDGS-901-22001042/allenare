import React, { useState } from "react";
import "./RegistroEjercicio.css";

const RegistroEjercicio = ({ onAddWorkout }) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [exercises, setExercises] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (!title || !type || !exercises || !duration || !description) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const now = new Date();
    const newWorkout = {
      name: title, // Usamos el título como nombre para la visualización
      type: type,
      exercises: exercises,
      duration: duration,
      description: description,
      date: now.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }), // Formato DD/MM/AA
      time: now.toLocaleTimeString("es-ES", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }), // Formato HH:MM:SS
    };

    onAddWorkout(newWorkout); // Llama a la función pasada por prop para añadir el entrenamiento

    // Limpiar los campos del formulario
    setTitle("");
    setType("");
    setExercises("");
    setDuration("");
    setDescription("");
  };

  return (
    <div className="registro-card">
      <h3>Registrar ejercicio</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título del entrenamiento"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tipo de rutina"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ejercicios"
          value={exercises}
          onChange={(e) => setExercises(e.target.value)}
        />
        <input
          type="text"
          placeholder="Duración"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">
          <span>+</span>
        </button>
      </form>
    </div>
  );
};
export default RegistroEjercicio;
