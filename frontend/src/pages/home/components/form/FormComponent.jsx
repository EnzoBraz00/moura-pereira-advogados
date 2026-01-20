import React, { useState, useEffect } from "react";
import "./FormComponent.css";
import FormImage from "../../../../assets/form-image.jpg";
import InputNameIcon from "../../../../assets/Person.svg";
import InputEmailIcon from "../../../../assets/Email.svg";
import InputPhoneIcon from "../../../../assets/Contact phone.svg";
import InputBusinessIcon from "../../../../assets/Business center.svg";

export default function ContactForm({ onSubmit, initialData }) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    tipoNegocio: "",
    mensagem: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        ...initialData,
      }));
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      tipoNegocio: "",
      mensagem: "",
    });
  };

  return (
    <div className="form-component">
      <img src={FormImage} alt="Form background" className="form-image" />
      <div className="form-content">
        <h2>Fale Conosco</h2>
        <h4>Envie sua dúvida!</h4>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-input">
            <img src={InputNameIcon} alt="Name Icon" className="input-icon" />
            <div className="input-field">
              <input
                type="text"
                name="nome"
                placeholder="Seu nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-input">
            <img src={InputEmailIcon} alt="Email Icon" className="input-icon" />
            <div className="input-field">
              <input
                type="text"
                name="email"
                placeholder="Seu email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="inputs-container">
            <div className="form-input-small phone-input">
              <img
                src={InputPhoneIcon}
                alt="Phone Icon"
                className="input-icon"
              />
              <div className="input-field">
                <input
                  type="tel"
                  name="telefone"
                  placeholder="Telefone para Contato"
                  value={formData.telefone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-input-small">
              <img
                src={InputBusinessIcon}
                alt="Business Icon"
                className="input-icon"
              />
              <div className="input-field">
                <select
                  name="tipoNegocio"
                  placeholder="Tipo de Negócio"
                  value={formData.tipoNegocio}
                  onChange={handleChange}
                >
                  <option value="" className="optionField">Selecione o tipo de negócio</option>
                  <option value="Pessoa Física" className="optionField">Pessoa Física</option>
                  <option value="Pessoa Jurídica" className="optionField">Pessoa Jurídica</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-input-big">
            <div className="input-field">
              <textarea
                name="mensagem"
                placeholder="Escreva sua Mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="buttons-container">
            <button type="submit" className="send-button">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
