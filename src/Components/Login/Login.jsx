import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'; // 🔥 Importando useNavigate
import axios from "axios";
import "./Login.css";
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:8080/auth/login', {
                email,
                senha
            });
    
            console.log('Login bem-sucedido:', response.data);
            alert('Login realizado com sucesso!');
            navigate('/home');
        } catch (error) {
            console.error('Erro ao tentar fazer login:', error);
            alert('Falha no login. Verifique suas credenciais.');
        }
    };
    
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Faça login</h1>
                <div className="input-field">
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                    <FaUser className="icon" />
                </div>
                <div className="input-field">
                    <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)}/>
                    <FaLock className="icon" />
                </div>

                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Lembrar login?
                    </label>
                    <a href="#">Esqueceu a senha?</a>
                </div>

                {/* 🔥 Botão de login agora funciona corretamente */}
                <button type="submit">
                    Entrar
                </button>

                <div className="signup-link">
                    <p>
                        Não tem uma conta?
                        <Link to="/cadastro"> Registrar</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login;