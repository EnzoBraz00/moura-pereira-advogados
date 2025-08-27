import React from "react";
import { useParams } from "react-router-dom";
import { postsData } from "../../data/posts/PostsData";
import "./BlogPostDetail.css";

const BlogPostDetail = () => {
  const { slug } = useParams();
  const post = postsData.find((post) => post.slug === slug);

  if (!post) {
    return <div>Post não encontrado</div>;
  }

  return (
    <div className="post-detail-component">
      <div className="detailed-post">
        <p className="post-date">{post.date}</p>
        <h1>{post.title}</h1>
        <h5>{post.excerpt}</h5>
        <img src={post.image} alt={post.title} />
        <div className="post-content">
          {post.content.map((paragraph, index) => (
            <>
              <p key={index}>{paragraph}</p>
              <br />
              <br />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;
