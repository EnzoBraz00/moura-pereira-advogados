
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginComponent.css"

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      console.log("Tentando fazer login com:", { email, password });
      
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ email, password }),
      });
      
      console.log("Resposta do servidor:", res.status, res.statusText);
      
      const data = await res.json();
      console.log("Dados recebidos:", data);
      
      if (res.ok) {
        localStorage.setItem("token", data.token);
        alert("Login realizado com sucesso!");
        navigate("/area-restrita");
      } else {
        setError(data.error || "Erro no login");
        alert(data.error || "Erro no login");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      setError("Erro de conexão: " + error.message);
      alert("Erro de conexão: " + error.message);
    } finally {
      setIsLoading(false);
    }
  }

  function handleCancel() {
    setEmail("");
    setPassword("");
    setError("");
  }

  return (
    <div className="login-component">
      <div className="login-background"></div>
      <div className="login-content">
        <form onSubmit={handleLogin}>
          <div className="login-title">
            <h2>Área do Administrador</h2>
            <h3>Insira o email e a senha</h3>
          </div>
          {error && <div className="error-message">{error}</div>}
          <div className="login-fields">
            <div className="form-login">
              <input
                type="email"
                placeholder="Seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-login">
              <input
                type="password"
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="login-buttons">
            <button
              type="submit"
              className="btn-submit"
              disabled={isLoading || !email || !password}
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </button>
            <button
              type="button"
              className="btn-cancel"
              onClick={handleCancel}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;