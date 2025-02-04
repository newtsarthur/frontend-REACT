import { useState } from "react";

import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

import axios from "axios";

import { Link } from 'react-router-dom';

import "./Cadastro.css";

const Cadastro = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const response = await axios.post('http://localhost:8080/usuarios', {
                nome,
                email,
                senha
            });
    
            console.log('Conta criada com sucesso:', response.data);
            alert('Conta criada com sucesso!');
        } catch (error) {
            console.error('Erro ao tentar criar conta:', error);
            alert('Falha ao criar conta. Verifique suas credenciais.');
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Cadastre sua conta</h1>
                <div className="input-field">
                    <input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)}/>
                    <FaUser className="icon" />
                </div>
                <div className="input-field">
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                    <FaEnvelope className="icon" />
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
                <button>Criar</button>
                <div className="signup-link">
                    <p>
                        Já tem uma conta?<Link to="/login"> Faça login</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}
export default Cadastro