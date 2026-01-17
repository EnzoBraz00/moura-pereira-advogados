
  import { useState, useEffect } from "react";
  import { useNavigate } from "react-router-dom";
  import "./LoginComponent.css"
  import API_BASE_URL from "../../config";

  const LoginComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        navigate("/area-restrita");
      }
    }, [navigate]);

    async function handleLogin(e) {
      e.preventDefault();
      setIsLoading(true);
      setError("");
      
      try {      
        const res = await fetch(`${API_BASE_URL}/auth/login`, {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({ email, password }),
        }); 
        const data = await res.json();      
        if (res.ok) {
          localStorage.setItem("token", data.token);
          navigate("/area-restrita");
        } else {
          setError(data.error || "Erro no login");
          alert(data.error || "Erro no login");
        }
      } catch (error) {
        setError("Erro de conexão: " + error.message);
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