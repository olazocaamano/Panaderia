import { useState } from "react";
import { loginUser } from "../services/authService";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await loginUser({
                email,
                password
            });

            localStorage.setItem(
                "userInfo",
                JSON.stringify(res.data)
            );

            window.location.href = "/dashboard";

        } catch (error) {

            alert("Credenciales incorrectas");

        }

    };

    return (

        <div className="login-container">

            <form onSubmit={handleSubmit}>

                <h1>Iniciar Sesión</h1>

                <input
                    type="name"
                    placeholder="Usuario"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />

                <button type="submit">
                    Entrar
                </button>

            </form>

        </div>
    );
}

export default Login;