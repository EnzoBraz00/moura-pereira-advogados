import React, { useState, useEffect } from "react";
import "./BlogComponent.css";
import SearchIcon from "../../assets/Search.svg";
import { useNavigate } from "react-router-dom";

const availableTags = [
  "Trabalhista",
  "Empresarial",
  "Civil",
  "Direito",
  "Advocacia",
  "Humano",
];

const BlogComponent = () => {
  const navigate = useNavigate();

  function handleNavigation(slug) {
    navigate("/blog/" + slug);
  }
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const res = await fetch(`/api/posts`);
        if (!res.ok) throw new Error("Falha ao carregar posts");
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesTag = selectedTag
      ? post.tags.includes(selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  return (
    <div className="blog-component">
      <div className="title-texts">
        <h6>MOURA PEREIRA ADVOCACIA</h6>
        <h1>Publicações do Escritório</h1>
        <h3>Análises e reflexões sobre as principais áreas do Direito.</h3>
      </div>

      <div className="blog-posts-container">
        <div className="posts-list">
          {loading ? (
            <p>Carregando...</p>
          ) : error ? (
            <p>Erro: {error}</p>
          ) : filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div className="post" key={post.id} onClick={() => handleNavigation(post?.slug)}>
                <img src={post.image} alt={post.title} />
                <div className="post-tags">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`tag ${
                        tag === selectedTag ? "tag-active" : ""
                      }`}
                      onClick={() =>
                        setSelectedTag(tag === selectedTag ? null : tag)
                      }
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
              </div>
            ))
          ) : (
            <p>Nenhum post encontrado.</p>
          )}
        </div>
        <div className="search-container">
          <div>
            <div className="search-header">
              <div className="header-line"></div>
              <div className="header-title">Pesquisar</div>
            </div>
            <div className="search-input-group">
              <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit">
                <img src={SearchIcon} alt="icon de pesquisa" />
              </button>
            </div>
          </div>
          <div className="tags-wrapper">
            <div className="tags-header">
              <div className="header-line"></div>
              <div className="header-title">Tags</div>
            </div>
            <div className="tags-list">
              {availableTags.map((tag) => (
                <span
                  key={tag}
                  className={`tag ${
                    tag === selectedTag ? "tag-active" : ""
                  }`}
                  onClick={() =>
                    setSelectedTag(tag === selectedTag ? null : tag)
                  }
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="recent-posts-wrapper">
            <div className="recent-posts-header">
              <div className="header-line"></div>
              <div className="header-title">Posts Recentes</div>
            </div>
            <div className="recent-posts-list">
              {posts.slice(0, 3).map((post) => (
                <div className="recent-post" key={post.id} onClick={() => handleNavigation(post?.slug)}>
                  <img src={post.image} alt={post.title} />
                  <div className="recent-post-info">
                    <h2>{post.smallTitle}</h2>
                    <p>{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;