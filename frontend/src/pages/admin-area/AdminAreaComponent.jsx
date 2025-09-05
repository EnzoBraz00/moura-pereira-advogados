import React, { useState, useEffect } from "react";
import SearchIcon from "../../assets/Search.svg";
import DeleteIcon from "../../assets/delete-icon.svg";
import EditIcon from "../../assets/Edit.svg";
import Modal from "../../components/modal/ModalComponent";
import PostForm from "./form/FormComponent";
import "./AdminAreaComponent.css";

const AdminAreaComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [contatos, setContatos] = useState([]);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("posts");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setLoading(true);

      const postsRes = await fetch("http://localhost:3000/api/posts");
      if (!postsRes.ok) throw new Error("Não foi possível carregar os posts");
      setPosts(await postsRes.json());

      const contatosRes = await fetch("http://localhost:3000/api/contatos");
      if (!contatosRes.ok)
        throw new Error("Não foi possível carregar os contatos");
      setContatos(await contatosRes.json());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const handleEdit = (post) => {
    setEditingPost(post);
    setIsModalOpen(true);
  };
  
  const filteredPosts = posts.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredContatos = contatos.filter((c) =>
    c.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSavePost = async (data) => {
    try {
      const method = editingPost ? "PUT" : "POST";
      const url = editingPost
        ? `http://localhost:3000/api/posts/${editingPost.slug}` // <-- usa slug
        : "http://localhost:3000/api/posts";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Erro ao salvar post");

      setIsModalOpen(false);
      setEditingPost(null);
      fetchData(); // recarrega posts
    } catch (err) {
      alert(err.message);
    }
  };

  const handleDelete = async (slug) => {
    if (!window.confirm("Tem certeza que deseja excluir este post?")) return;

    try {
      const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Erro ao excluir post");

      fetchData();
    } catch (err) {
      alert(err.message);
    }
  };

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
              className={`tab-button ${
                activeTab === "contatos" ? "active" : ""
              }`}
              onClick={() => setActiveTab("contatos")}
            >
              Formulários de Contato
            </button>
          </div>
        </div>

        <div className="admin-wrapper">
          <div className="search-input-admin-group">
            <input
              type="text"
              placeholder={
                activeTab === "posts" ? "Buscar posts..." : "Buscar contatos..."
              }
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">
              <img src={SearchIcon} alt="icon de pesquisa" />
            </button>
          </div>

          {activeTab === "posts" && (
            <button
              className="add-post-btn"
              onClick={() => {
                setEditingPost(null);
                setIsModalOpen(true);
              }}
            >
              Adicionar post
            </button>
          )}
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
                  <div className="post-admin-actions">
                    <img
                      src={EditIcon}
                      alt="Editar"
                      onClick={() => handleEdit(post)}
                    />
                    <img
                      src={DeleteIcon}
                      alt="Excluir"
                      onClick={() => handleDelete(post.slug)}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p>Nenhum post encontrado</p>
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
                    <p>
                      <strong>Email:</strong> {contato.email}
                    </p>
                    <p>
                      <strong>Telefone:</strong> {contato.telefone}
                    </p>
                    <p>
                      <strong>Área:</strong> {contato.tipoNegocio}
                    </p>
                    <p>
                      <strong>Mensagem:</strong> {contato.mensagem}
                    </p>
                    <p>
                      <strong>Data:</strong>{" "}
                      {new Date(contato.createdAt).toLocaleDateString("pt-BR")}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>Nenhum formulário de contato foi encontrado</p>
            )}
          </div>
        )}

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <PostForm onSubmit={handleSavePost} initialData={editingPost} />
        </Modal>
      </div>
    </div>
  );
};

export default AdminAreaComponent;
