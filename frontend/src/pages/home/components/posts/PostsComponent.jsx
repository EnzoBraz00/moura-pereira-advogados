import React, { useState, useEffect } from "react";
import "./PostsComponent.css";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../../../../config";

const PostsComponent = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  function handleNavigation(slug) {
    navigate(slug ? `/blog/${slug}` : "/blog");
  }

  function getContentPreview(content, maxLength = 330) {
    if (!Array.isArray(content)) return "";

    const fullText = content.join(" ");

    return fullText.length > maxLength
      ? fullText.slice(0, maxLength) + "..."
      : fullText;
  }

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE_URL}/api/posts`);
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

  return (
    <div className="posts-component">
      <h5 className="posts-subtitle">POSTAGENS ORIGINAIS</h5>
      <h2 className="posts-title">Fique por dentro do mundo jurídico</h2>

      <div className="posts-preview-list">
        {loading && <p>Carregando...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {!loading &&
          !error &&
          posts.slice(0, 3).map((post) => (
            <div
              className="post-item"
              key={post.slug || post.id}
              onClick={() => handleNavigation(post.slug)}
            >
              <div className="post-specs">
                <span className="post-author">
                  Autor:{" "}
                  <span className="author-name">{post.author}</span>
                </span>
              </div>

              <h4 title={post.title}>
                {post.title.length > 60
                  ? post.title.slice(0, 60) + "..."
                  : post.title}
              </h4>

              <p>{getContentPreview(post.content)}</p>
            </div>
          ))}
      </div>

      <button className="posts-button" onClick={() => handleNavigation()}>
        VEJA MAIS PUBLICAÇÕES
      </button>
    </div>
  );
};

export default PostsComponent;
