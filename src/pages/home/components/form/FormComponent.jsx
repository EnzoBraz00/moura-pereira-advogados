import React from "react";
import "./FormComponent.css";
import FormImage from "../../../../assets/form-image.jpg";
import InputNameIcon from "../../../../assets/Person.svg";
import InputEmailIcon from "../../../../assets/Email.svg";
import InputPhoneIcon from "../../../../assets/Contact phone.svg";
import inputBusinessIcon from "../../../../assets/Business center.svg";

const FormComponent = () => {
  return (
    <div className="form-component">
      <img src={FormImage} alt="Form background" className="form-image" />
      <div className="form-content">
        <h2>Fale Conosco</h2>
        <h4>Envie sua dúvida!</h4>
        <form className="contact-form">
          <div className="form-input">
            <img src={InputNameIcon} alt="Name Icon" className="input-icon" />
            <div className="input-field">
              <input type="text" placeholder="Seu nome"></input>
            </div>
          </div>
          <div className="form-input">
            <img src={InputEmailIcon} alt="Email Icon" className="input-icon" />
            <div className="input-field">
              <input type="email" placeholder="Seu email"></input>
            </div>
          </div>
          <div className="inputs-container">
            <div className="form-input-small">
              <img
                src={InputPhoneIcon}
                alt="Phone Icon"
                className="input-icon"
              />
              <div className="input-field">
                <input type="phone" placeholder="Telefone para Contato"></input>
              </div>
            </div>
            <div className="form-input-small">
              <img
                src={inputBusinessIcon}
                alt="Business Icon"
                className="input-icon"
              />
              <div className="input-field">
                <input type="text" placeholder="Tipo de Negócio"></input>
              </div>
            </div>
          </div>
          <div className="form-input-big">
            <div className="input-field">
              <textarea placeholder="Escreva sua Mensagem"></textarea>
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
};

export default FormComponent;
