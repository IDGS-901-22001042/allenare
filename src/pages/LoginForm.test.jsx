// src/components/LoginForm.test.jsx (o donde corresponda)
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom"; // Necesario por useNavigate
import LoginForm from "./LoginForm"; // Ajusta la ruta a tu componente

// Mock para useNavigate - necesaria porque el componente lo usa internamente
// aunque no verificaremos la navegación directamente aquí, solo que se llama a onLogin
const mockNavigate = vi.fn();
vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("LoginForm Component", () => {
  // Función mock para pasar como prop 'onLogin'
  const mockOnLogin = vi.fn();

  // Función helper para renderizar el componente dentro de un Router
  const renderComponent = () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <Routes>
          <Route path="/login" element={<LoginForm onLogin={mockOnLogin} />} />
          {/* Añade una ruta dummy para el dashboard si quieres probar la navegación */}
          <Route path="/dashboard" element={<div>Dashboard Page</div>} />
        </Routes>
      </MemoryRouter>
    );
  };

  // Limpia los mocks después de cada prueba
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("debería renderizar el formulario correctamente", () => {
    renderComponent();
    // Verifica que los campos de entrada existan (usando placeholder como selector)
    expect(screen.getByPlaceholderText("Usuario")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Contraseña")).toBeInTheDocument();
    // Verifica que el botón exista
    expect(
      screen.getByRole("button", { name: /ingresar/i })
    ).toBeInTheDocument();
  });

  // Nota: Tu componente actual no valida campos vacíos explícitamente antes del submit.
  // Podrías añadir 'required' a los inputs o una validación en handleSubmit si quieres probar eso.
  // it('debería mostrar error si los campos están vacíos (si se implementa)', () => {
  //   renderComponent();
  //   const loginButton = screen.getByRole('button', { name: /ingresar/i });
  //   fireEvent.click(loginButton);
  //   // Asumiendo que añades un mensaje o lógica para campos vacíos
  //   // expect(screen.getByText(/campos requeridos/i)).toBeInTheDocument();
  // });

  it("debería mostrar mensaje de error con credenciales incorrectas", () => {
    renderComponent();
    const usernameInput = screen.getByPlaceholderText("Usuario");
    const passwordInput = screen.getByPlaceholderText("Contraseña");
    const loginButton = screen.getByRole("button", { name: /ingresar/i });

    // Simula escribir en los campos
    fireEvent.change(usernameInput, {
      target: { value: "usuario_incorrecto" },
    });
    fireEvent.change(passwordInput, {
      target: { value: "password_incorrecta" },
    });

    // Simula el clic en el botón
    fireEvent.click(loginButton);

    // Verifica que el mensaje de error aparezca
    expect(
      screen.getByText("Usuario o contraseña incorrectos")
    ).toBeInTheDocument();
    // Verifica que onLogin NO haya sido llamado
    expect(mockOnLogin).not.toHaveBeenCalled();
    // Verifica que navigate NO haya sido llamado
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it("debería llamar a onLogin y navegar con credenciales correctas", () => {
    renderComponent();
    const usernameInput = screen.getByPlaceholderText("Usuario");
    const passwordInput = screen.getByPlaceholderText("Contraseña");
    const loginButton = screen.getByRole("button", { name: /ingresar/i });

    // Simula escribir credenciales correctas
    fireEvent.change(usernameInput, { target: { value: "admin" } });
    fireEvent.change(passwordInput, { target: { value: "admin" } });

    // Simula el clic en el botón
    fireEvent.click(loginButton);

    // Verifica que el mensaje de error NO aparezca
    expect(
      screen.queryByText("Usuario o contraseña incorrectos")
    ).not.toBeInTheDocument();
    // Verifica que la función onLogin haya sido llamada una vez
    expect(mockOnLogin).toHaveBeenCalledTimes(1);
    // Verifica que se haya intentado navegar al dashboard
    expect(mockNavigate).toHaveBeenCalledWith("/dashboard");
  });
});
