import React, { useState, useEffect } from "react";
import "./FormComponent.css";

export default function PostForm({ onSubmit, initialData }) {
  const [formData, setFormData] = useState({
    title: "",
    smallTitle: "",
    slug: "",
    excerpt: "",
    image: "",
    tags: "",
    date: new Date().toISOString().slice(0, 10),
    content: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        tags: Array.isArray(initialData.tags)
          ? initialData.tags.join(", ")
          : "",
        content: Array.isArray(initialData.content)
          ? initialData.content.join("\n\n")
          : "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      tags: formData.tags.split(",").map((t) => t.trim()),
      content: formData.content.split("\n\n").map((p) => p.trim()),
    };
    onSubmit(data);
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Título"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          name="smallTitle"
          placeholder="Subtítulo"
          value={formData.smallTitle}
          onChange={handleChange}
          required
        />
        <input
          name="slug"
          placeholder="Slug (ex: meu-post)"
          value={formData.slug}
          onChange={handleChange}
          required
        />
        <input
          name="image"
          placeholder="URL da imagem"
          value={formData.image}
          onChange={handleChange}
        />
        <input
          name="tags"
          placeholder="Tags separadas por vírgula"
          value={formData.tags}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <textarea
          name="excerpt"
          placeholder="Resumo"
          value={formData.excerpt}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Conteúdo (parágrafos separados por linha em branco)"
          value={formData.content}
          onChange={handleChange}
        />
        <button type="submit" className="login-btn">
          Salvar
        </button>
      </form>
    </div>
  );
}
