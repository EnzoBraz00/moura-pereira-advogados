import React from "react";
import "./PostsComponent.css";
import PostPfp from "../../../../assets/post-pfp.png";

const posts = [
  {
    pfp: PostPfp,
    author: "João Moura",
    title: "Excelência Juridica em Prática",
    content:
      "A Advocacia Moura Pereira foi idealizada com o objeto de transformar a forma de relacionamento com as pessoas, entregamos um atendimento humanizado. Oferecemos assessoria jurídica e todo suporte necessário com foco na solução de seus problemas...",
  },
  {
    pfp: PostPfp,
    author: "João Moura",
    title: "Inovação no Direito",
    content:
      "A Advocacia Moura Pereira foi idealizada com o objeto de transformar a forma de relacionamento com as pessoas, entregamos um atendimento humanizado. Oferecemos assessoria jurídica e todo suporte necessário com foco na solução de seus problemas...",
  },
  {
    pfp: PostPfp,
    author: "João Moura",
    title: "Direito e Tecnologia",
    content:
      "A Advocacia Moura Pereira foi idealizada com o objeto de transformar a forma de relacionamento com as pessoas, entregamos um atendimento humanizado. Oferecemos assessoria jurídica e todo suporte necessário com foco na solução de seus problemas...",
  },
];

const PostsComponent = () => {
  return (
    <div className="posts-component">
      <h5 className="posts-subtitle">POSTAGENS ORIGINAIS</h5>
      <h2 className="posts-title">Fique por dentro do mundo jurídico</h2>
      <div className="posts-list">
        {posts.map((post) => (
          <div className="post-item" key={post.title}>
            <div className="post-specs">
              <img src={post.pfp} alt={post.title} />
              <span className="post-author">
                Autor: <span className="author-name">{post.author}</span>
              </span>
            </div>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
      <button className="posts-button">VEJA MAIS PUBLICAÇÕES</button>
    </div>
  );
};

export default PostsComponent;
