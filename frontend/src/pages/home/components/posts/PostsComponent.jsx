import React, { useState, useEffect } from "react";
import "./PostsComponent.css";
import { useNavigate } from "react-router-dom";

const PostsComponent = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  function handleNavigation() {
    navigate("/blog");
  }

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:3000/api/posts");
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
      <div className="posts-list">
        {posts.slice(0, 3).map((post) => (
          <div className="post-item" key={post.title} onClick={() => handleNavigation(post?.slug)}>
            <div className="post-specs">
              <span className="post-author">
                Autor: <span className="author-name">{post.author}</span>
              </span>
            </div>
            <h4
              aria-label={post.title}
              title={post.title}
            >
              {post.title.length > 50
                ? post.title.slice(0, 50) + "..."
                : post.title}
            </h4>

            <p>
              {post.content.length > 120
                ? post.content.slice(0, 120) + "..."
                : post.content}
            </p>
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
