import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import RegistroPage from './pages/RegistroPage';
import EstadisticasPage from './pages/EstadisticasPage';
import Sidebar from './components/dashboard/Sidebar';
import './App.css';
import FuerzaPage from './pages/FuerzaPage';  

function App() {
  return (
    <Router>
      <div className="dashboard-container">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/registro" element={<RegistroPage />} />
          <Route path="/estadisticas" element={<EstadisticasPage />} />
          <Route path="/fuerza" element={<FuerzaPage />} />
        </Routes>
        <Sidebar />
      </div>
    </Router>
  );
}

export default App;