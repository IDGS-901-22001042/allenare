// src/components/RegistroEjercicio.test.jsx (o donde corresponda)
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import RegistroEjercicio from "./RegistroEjercicio"; // Ajusta la ruta a tu componente

describe("RegistroEjercicio Component", () => {
  // Mock para la función onAddWorkout
  const mockOnAddWorkout = vi.fn();
  // Mock para alert
  const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});

  beforeEach(() => {
    render(<RegistroEjercicio onAddWorkout={mockOnAddWorkout} />);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("debería renderizar todos los campos y el botón", () => {
    expect(
      screen.getByPlaceholderText("Título del entrenamiento")
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Tipo de rutina")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Ejercicios")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Duración")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Descripción")).toBeInTheDocument(); // Requerido en este componente
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("debería actualizar los valores de los inputs al escribir", () => {
    const titleInput = screen.getByPlaceholderText("Título del entrenamiento");
    fireEvent.change(titleInput, { target: { value: "Pecho Intenso" } });
    expect(titleInput.value).toBe("Pecho Intenso");
    // Añade más pruebas de cambio si es necesario
  });

  it("debería llamar a onAddWorkout con los datos correctos y limpiar el formulario al enviar datos válidos", () => {
    const titleInput = screen.getByPlaceholderText("Título del entrenamiento");
    const typeInput = screen.getByPlaceholderText("Tipo de rutina");
    const exercisesInput = screen.getByPlaceholderText("Ejercicios");
    const durationInput = screen.getByPlaceholderText("Duración");
    const descriptionInput = screen.getByPlaceholderText("Descripción"); // Requerido
    const submitButton = screen.getByRole("button");

    // Llenar todos los campos
    fireEvent.change(titleInput, { target: { value: "Espalda Completa" } });
    fireEvent.change(typeInput, { target: { value: "Hipertrofia" } });
    fireEvent.change(exercisesInput, { target: { value: "Dominadas, Remo" } });
    fireEvent.change(durationInput, { target: { value: "75 min" } });
    fireEvent.change(descriptionInput, {
      target: { value: "Trabajo de dorsales y trapecios" },
    });

    // Enviar
    fireEvent.click(submitButton);

    // Verificar llamada a onAddWorkout
    expect(mockOnAddWorkout).toHaveBeenCalledTimes(1);
    expect(mockOnAddWorkout).toHaveBeenCalledWith(
      expect.objectContaining({
        name: "Espalda Completa",
        type: "Hipertrofia",
        exercises: "Dominadas, Remo",
        duration: "75 min",
        description: "Trabajo de dorsales y trapecios",
        date: expect.any(String),
        time: expect.any(String),
      })
    );

    // Verificar limpieza de campos
    expect(titleInput.value).toBe("");
    expect(typeInput.value).toBe("");
    expect(exercisesInput.value).toBe("");
    expect(durationInput.value).toBe("");
    expect(descriptionInput.value).toBe("");

    expect(alertSpy).not.toHaveBeenCalled();
  });

  it("NO debería llamar a onAddWorkout y debería mostrar alerta si faltan campos requeridos", () => {
    // Solo llenamos algunos campos
    const titleInput = screen.getByPlaceholderText("Título del entrenamiento");
    const typeInput = screen.getByPlaceholderText("Tipo de rutina");
    const submitButton = screen.getByRole("button");

    fireEvent.change(titleInput, { target: { value: "Otro Intento" } });
    fireEvent.change(typeInput, { target: { value: "Cardio" } });
    // Faltan exercises, duration, description
    fireEvent.click(submitButton);

    // Verificar que onAddWorkout NO fue llamado
    expect(mockOnAddWorkout).not.toHaveBeenCalled();

    // Verificar que alert SÍ fue llamado
    expect(alertSpy).toHaveBeenCalledTimes(1);
    // expect(alertSpy).toHaveBeenCalledWith("Por favor, completa todos los campos."); // Verificación opcional del mensaje exacto
  });
});
