import React, { useState, useEffect } from "react";
import SearchIcon from "../../assets/Search.svg";
import DeleteIcon from "../../assets/delete-icon.svg";
import "./AdminAreaComponent.css";

const AdminAreaComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [contatos, setContatos] = useState([]);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("posts"); // "posts" ou "contatos"

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        
        // Buscar posts
        const postsRes = await fetch("http://localhost:3000/api/posts");
        if (!postsRes.ok) throw new Error("Não foi possível carregar os posts");
        const postsData = await postsRes.json();
        setPosts(postsData);
        
        // Buscar contatos
        const contatosRes = await fetch("http://localhost:3000/api/contatos");
        if (!contatosRes.ok) throw new Error("Não foi possível carregar os contatos");
        const contatosData = await contatosRes.json();
        setContatos(contatosData);
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const filteredContatos = contatos.filter((contato) => {
    const matchesSearch =
      contato.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contato.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contato.tipoNegocio.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="admin-component">
      <div className="posts-admin-container">
        <div className="admin-header">
          <h2>Área Administrativa</h2>
          <div className="admin-tabs">
            <button 
              className={`tab-button ${activeTab === "posts" ? "active" : ""}`}
              onClick={() => setActiveTab("posts")}
            >
              Postagens
            </button>
            <button 
              className={`tab-button ${activeTab === "contatos" ? "active" : ""}`}
              onClick={() => setActiveTab("contatos")}
            >
              Formulários de Contato
            </button>
          </div>
        </div>
        
        <div className="search-input-group">
          <input
            type="text"
            placeholder={activeTab === "posts" ? "Buscar posts..." : "Buscar contatos..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <img src={SearchIcon} alt="icon de pesquisa" />
          </button>
        </div>

        {activeTab === "posts" && (
          <div className="posts-table">
            {loading ? (
              <p>Carregando posts...</p>
            ) : error ? (
              <p>Erro: {error}</p>
            ) : filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div className="post-admin" key={post.id}>
                  <div className="posts-admin-texts">
                    <h4>{post.title}</h4>
                    <p>{post.excerpt}</p>
                  </div>
                  <img src={DeleteIcon} alt="Delete icon" />
                </div>
              ))
            ) : (
              <p>Nenhum post foi encontrado</p>
            )}
          </div>
        )}

        {activeTab === "contatos" && (
          <div className="contatos-table">
            {loading ? (
              <p>Carregando contatos...</p>
            ) : error ? (
              <p>Erro: {error}</p>
            ) : filteredContatos.length > 0 ? (
              filteredContatos.map((contato) => (
                <div className="contato-admin" key={contato.id}>
                  <div className="contato-admin-texts">
                    <h4>{contato.nome}</h4>
                    <p><strong>Email:</strong> {contato.email}</p>
                    <p><strong>Telefone:</strong> {contato.telefone}</p>
                    <p><strong>Área:</strong> {contato.tipoNegocio}</p>
                    <p><strong>Mensagem:</strong> {contato.mensagem}</p>
                    <p><strong>Data:</strong> {new Date(contato.createdAt).toLocaleDateString('pt-BR')}</p>
                  </div>
                  <img src={DeleteIcon} alt="Delete icon" />
                </div>
              ))
            ) : (
              <p>Nenhum formulário de contato foi encontrado</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminAreaComponent;
