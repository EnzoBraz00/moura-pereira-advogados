import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
// import { postsData } from "../../data/posts/PostsData";
import "./BlogPostDetail.css";

const BlogPostDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        setLoading(true);
        const res = await fetch(`/api/posts/${slug}`);
        if (!res.ok) throw new Error("Falha ao carregar post");
        const data = await res.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [slug]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;
  if (!post) return <div>Post não encontrado</div>;

  return (
    <div className="post-detail-component">
      <div className="detailed-post">
        <p className="post-date">{post.date}</p>
        <h1>{post.title}</h1>
        <h5>{post.excerpt}</h5>
        <img src={post.image} alt={post.title} />
        <div className="post-content">
          {post.content.map((paragraph, index) => (
            <Fragment key={index}>
              <p>{paragraph}</p>
              <br />
              <br />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;
