import { FaUser, FaLock } from "react-icons/fa";

import { useState } from "react";

import axios from "axios";

import "./Login.css";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(username, password);

    //     console.log("Envio");
    // }


    // const handleSubmit = async () => {
    //     try {
    //         const response = await axios.post('http://localhost:8080/usuarios', {
    //             username: username,
    //             password: password
    //         });
    //         console.log('Deu certo?');
    //         console.log(response.data);
    //     } catch (error) {
    //         console.error('Erro ao tentar fazer login:', error);
    //     }
    // };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Evita recarregar a página ao enviar o formulário
    
        try {
            const response = await axios.post('http://localhost:8080/login', { // Endpoint correto
                username,
                password
            });
    
            console.log('Login bem-sucedido:', response.data);
            alert('Login realizado com sucesso!');
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
                    <input type="email" placeholder="Email" onChange={(e) => setUsername(e.target.value)}/>
                    <FaUser className="icon" />
                </div>
                <div className="input-field">
                    <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
                    <FaLock className="icon" />
                </div>

                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Lembrar login?
                    </label>
                    <a href="#">Esqueceu a senha?</a>
                </div>
                <button>Entrar</button>
                <div className="signup-link">
                    <p>
                        Não tem uma conta? <a href="#">Registrar</a>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login