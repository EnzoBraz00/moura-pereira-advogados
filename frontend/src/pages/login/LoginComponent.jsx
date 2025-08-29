
import { useState } from "react";
import "./LoginComponent.css"

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      
      if (res.ok) {
        localStorage.setItem("token", data.token);
        navigate("/area-restrita");
        alert("Login realizado com sucesso!");
      } else {
        alert(data.error || "Erro no login");
      }
    } catch (error) {
      alert("Erro de conexão");
    } finally {
      setIsLoading(false);
    }
  }

  function handleCancel() {
    setEmail("");
    setPassword("");
  }

  return (
    <div className="login-component">
      <div className="login-background"></div>
      <div className="login-content">
        <div className="login-title">
          <h2>Área do Administrador</h2>
          <h3>Insira o email e a senha</h3>
        </div>
        <div className="login-fields">
          <div className="form-login">
            <input
              type="email"
              placeholder="Seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-login">
            <input
              type="password"
              placeholder="Sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="login-buttons">
          <button
            className="btn-submit"
            onClick={handleLogin}
            disabled={isLoading || !email || !password}
          >
            {isLoading ? "Entrando..." : "Entrar"}
          </button>
          <button
            className="btn-cancel"
            onClick={handleCancel}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;