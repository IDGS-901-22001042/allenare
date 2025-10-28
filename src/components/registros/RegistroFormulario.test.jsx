// src/components/RegistroFormulario.test.jsx (o donde corresponda)
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import RegistroFormulario from "./RegistroFormulario"; // Ajusta la ruta a tu componente

describe("RegistroFormulario Component", () => {
  // Mock para la función onAddWorkout
  const mockOnAddWorkout = vi.fn();
  // Mock para alert (para evitar que interrumpa las pruebas)
  const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});

  // Renderizar el componente antes de cada prueba
  beforeEach(() => {
    render(<RegistroFormulario onAddWorkout={mockOnAddWorkout} />);
  });

  // Limpiar mocks después de cada prueba
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
    expect(screen.getByPlaceholderText("Descripción")).toBeInTheDocument(); // Campo opcional pero presente
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("debería actualizar los valores de los inputs al escribir", () => {
    const titleInput = screen.getByPlaceholderText("Título del entrenamiento");
    fireEvent.change(titleInput, { target: { value: "Cardio Mañanero" } });
    expect(titleInput.value).toBe("Cardio Mañanero");

    const typeInput = screen.getByPlaceholderText("Tipo de rutina");
    fireEvent.change(typeInput, { target: { value: "HIIT" } });
    expect(typeInput.value).toBe("HIIT");
    // Puedes añadir más verificaciones para otros campos si lo deseas
  });

  it("debería llamar a onAddWorkout con los datos correctos y limpiar el formulario al enviar datos válidos", () => {
    const titleInput = screen.getByPlaceholderText("Título del entrenamiento");
    const typeInput = screen.getByPlaceholderText("Tipo de rutina");
    const exercisesInput = screen.getByPlaceholderText("Ejercicios");
    const durationInput = screen.getByPlaceholderText("Duración");
    const descriptionInput = screen.getByPlaceholderText("Descripción");
    const submitButton = screen.getByRole("button");

    // Llenar campos requeridos (y opcional)
    fireEvent.change(titleInput, { target: { value: "Pierna Fuerte" } });
    fireEvent.change(typeInput, { target: { value: "Fuerza" } });
    fireEvent.change(exercisesInput, {
      target: { value: "Sentadillas, Prensa" },
    });
    fireEvent.change(durationInput, { target: { value: "60 min" } });
    fireEvent.change(descriptionInput, {
      target: { value: "Enfocado en cuádriceps" },
    }); // Opcional

    // Enviar formulario
    fireEvent.click(submitButton);

    // Verificar que onAddWorkout fue llamado una vez
    expect(mockOnAddWorkout).toHaveBeenCalledTimes(1);

    // Verificar que los datos pasados a onAddWorkout son correctos (estructura)
    // No verificamos fecha/hora exactas porque dependen del momento de ejecución
    expect(mockOnAddWorkout).toHaveBeenCalledWith(
      expect.objectContaining({
        name: "Pierna Fuerte",
        type: "Fuerza",
        exercises: "Sentadillas, Prensa",
        duration: "60 min",
        description: "Enfocado en cuádriceps",
        date: expect.any(String), // Esperamos una fecha en string
        time: expect.any(String), // Esperamos una hora en string
      })
    );

    // Verificar que los campos se limpiaron
    expect(titleInput.value).toBe("");
    expect(typeInput.value).toBe("");
    expect(exercisesInput.value).toBe("");
    expect(durationInput.value).toBe("");
    expect(descriptionInput.value).toBe(""); // También se limpia el opcional

    // Verificar que alert NO fue llamado
    expect(alertSpy).not.toHaveBeenCalled();
  });

  it("NO debería llamar a onAddWorkout y debería mostrar alerta si faltan campos requeridos", () => {
    const titleInput = screen.getByPlaceholderText("Título del entrenamiento");
    // Dejamos otros campos requeridos vacíos
    const submitButton = screen.getByRole("button");

    fireEvent.change(titleInput, { target: { value: "Intento Fallido" } });
    fireEvent.click(submitButton);

    // Verificar que onAddWorkout NO fue llamado
    expect(mockOnAddWorkout).not.toHaveBeenCalled();

    // Verificar que alert SÍ fue llamado (con el mensaje esperado si quieres ser más específico)
    expect(alertSpy).toHaveBeenCalledTimes(1);
    // expect(alertSpy).toHaveBeenCalledWith("Por favor, completa todos los campos requeridos."); // Verificación opcional del mensaje exacto
  });
});
