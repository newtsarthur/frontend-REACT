import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login/Login';
import Cadastro from './Components/Cadastro/Cadastro';
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Definindo a rota para Login */}
        <Route path="/login" element={<Login />} />
        
        {/* Definindo a rota para Cadastro */}
        <Route path="/cadastro" element={<Cadastro />} />
        
        {/* Redirecionando da rota raiz ("/") para /login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  );
}

export default App;
