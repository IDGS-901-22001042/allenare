import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import RegistroPage from './pages/RegistroPage'; // Importar la página de Registro
import EstadisticasPage from './pages/EstadisticasPage'; // Importar la página de Estadísticas
import FuerzaPage from './pages/FuerzaPage'; // Importar la página de Fuerza
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/auth/ProtectedRoute.jsx'; // Ruta corregida para ProtectedRoute
import Sidebar from './components/dashboard/Sidebar'; // Importar el Sidebar
import ReloadPrompt from './ReloadPrompt';
import PWABadge from './PWABadge';
import './App.css';

// Componente de layout principal para rutas autenticadas
const MainLayout = () => (
  <div className="dashboard-container">
    <div className="content-area"><Outlet /></div> {/* Área para el contenido de la página */}
    <Sidebar />
  </div>
);

function App() {
  // Revisa sessionStorage para mantener el estado de autenticación
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return sessionStorage.getItem('isAuthenticated') === 'true';
    } catch (e) {
      console.warn('No se pudo acceder a sessionStorage. Se iniciará sin autenticación.');
      return false;
    }
  });

  // Actualiza sessionStorage cuando el estado de autenticación cambia
  useEffect(() => {
    try {
      sessionStorage.setItem('isAuthenticated', isAuthenticated);
    } catch (e) {
      console.warn('No se pudo escribir en sessionStorage. El estado de autenticación no se persistirá.');
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <> {/* Fragment para envolver componentes globales y el Router */}
      <ReloadPrompt />
      <PWABadge />
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />

          {/* Rutas protegidas */}
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            {/* Todas las rutas que necesitan el Sidebar y están protegidas */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} /> {/* Redirección por defecto si no hay ruta específica */}
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/registro" element={<RegistroPage />} />
              <Route path="/estadisticas" element={<EstadisticasPage />} />
              <Route path="/fuerza" element={<FuerzaPage />} />
            </Route>
            {/* Fallback para cualquier otra ruta protegida que no coincida con las anteriores */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Route>

          {/* Fallback para usuarios no autenticados que intentan acceder a cualquier ruta que no sea /login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;