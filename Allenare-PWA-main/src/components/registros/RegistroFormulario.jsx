import React from 'react';
import './RegistroFormulario.css';

const RegistroFormulario = () => {
  return (
    <div className="registro-card">
      <h3>Registrar</h3>
      <form>
        <input type="text" placeholder="Título del entrenamiento" />
        <input type="text" placeholder="Tipo de rutina" />
        <input type="text" placeholder="Ejercicios" />
        <input type="text" placeholder="Duración" />
        <input type="text" placeholder="Descripción" />
        <button type="submit">
          <span>+</span>
        </button>
      </form>
    </div>
  );
};

export default RegistroFormulario;