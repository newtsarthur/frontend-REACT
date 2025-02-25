import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Login from './Components/Login/Login';
import Cadastro from './Components/Cadastro/Cadastro';
import './App.css'; // Importa o CSS normalmente

function App() {
  const location = useLocation();

  useEffect(() => {
    const shouldApplyCss = location.pathname === "/login" || location.pathname === "/cadastro";

    if (shouldApplyCss) {
      document.body.classList.add('app-styles');
    } else {
      document.body.classList.remove('app-styles');
    }
  }, [location.pathname]);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/" element={<Navigate to="login" replace />} />
      </Routes>
    </div>
  );
}

export default App;
