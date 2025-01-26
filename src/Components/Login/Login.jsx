import React from "react";

const Login = () => {
    return (
        <div className="container">
            <form>
                <h1>Faça login</h1>
                <div>
                    <input type="email" placeholder="Email" />
                </div>
                <div>
                    <input type="password" placeholder="Senha" />
                </div>
                <button>Entrar</button>
            </form>
        </div>
    )
}

export default Login