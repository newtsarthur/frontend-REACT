import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Login from './Components/Login/Login';
import Cadastro from './Components/Cadastro/Cadastro';
import Home from './Components/Home/Home';
import './App.css'; // Importa o CSS normalmente
import './Components/Home/Home.css';

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
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  );
}

export default App;
