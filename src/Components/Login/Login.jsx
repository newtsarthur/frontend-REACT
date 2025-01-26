import { FaUser, FaLock } from "react-icons/fa";

import { useState } from "react";

import "./Login.css";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(username, password);

        console.log("Envio");
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Faça login</h1>
                <div>
                    <input type="email" placeholder="Email" onChange={(e) => setUsername(e.target.value)}/>
                    <FaUser className="icon" />
                </div>
                <div>
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

                <div className="sinup-link">
                    <p>
                        Não tem uma conta? <a href="#">Registrar</a>
                    </p>
                </div>

                <button>Entrar</button>
            </form>
        </div>
    )
}

export default Login