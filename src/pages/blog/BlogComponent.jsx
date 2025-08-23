import React, { useState } from "react";
import "./BlogComponent.css";
import PostImage from "../../assets/post-image.jpg";
import SearchIcon from "../../assets/Search.svg";

const posts = [
  {
    id: 1,
    image: PostImage,
    tags: ["Trabalhista", "Humano", "Opinião"],
    title:
      "Entre Leis, Direitos e Pessoas: Olhares Humanos sobre a Advocacia Trabalhista",
    smallTitle: "Olhares Humanos sobre a Advocacia Trabalhista",
    excerpt:
      "Uma análise sensível e crítica sobre os caminhos da advocacia trabalhista, seus dilemas cotidianos e o papel do advogado diante da dignidade do trabalhador.",
    date: "20/02/2025",
  },
  {
    id: 2,
    image: PostImage,
    tags: ["Empresarial", "Mercado", "Estratégia"],
    title:
      "Navegando no Mar Empresarial: Estratégias Jurídicas para o Sucesso no Mundo dos Negócios",
    smallTitle: "Estratégias Jurídicas para o Sucesso no Mundo dos Negócios",
    excerpt:
      "Explorando as complexidades do direito empresarial e como estratégias jurídicas eficazes podem impulsionar o crescimento e a sustentabilidade das empresas.",
    date: "21/02/2025",
  },
  {
    id: 3,
    image: PostImage,
    tags: ["Civil", "Família", "Direitos"],
    title:
      "Laços e Leis: A Advocacia Civil na Proteção dos Direitos Familiares",
    smallTitle: "A Advocacia Civil na Proteção dos Direitos Familiares",
    excerpt:
      "Uma reflexão sobre o papel do advogado civil na defesa dos direitos familiares, abordando questões como divórcio, guarda de filhos e patrimônio.",
    date: "22/02/2025",
  },
];

const availableTags = [
  "Trabalhista",
  "Empresarial",
  "Civil",
  "Direito",
  "Advocacia",
  "Humano",
];

const BlogComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);

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

      <div className="posts-container">
        <div className="posts-list">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div className="post" key={post.id}>
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
                <div className="recent-post" key={post.id}>
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