import React from "react";
import "./ObjectivesComponent.css";
import missionIcon from "../../../../assets/Goal.svg";
import visionIcon from "../../../../assets/vision-icon.svg"
import valuesIcon from "../../../../assets/values-icon.svg"
import valuesImage from "../../../../assets/values-image.jpg";
import missionImage from "../../../../assets/mission-image.jpg";
import visionImage from "../../../../assets/vision-image.png";

const ObjectivesComponent = () => {
  return (
    <div className="objectives-container">
      <div className="objective-box mission-box">
        <div className="objective-title">
          <div className="objective-icon-container">
            <img
              src={missionIcon}
              alt="Ícone Missão"
              className="objective-icon"
            />
          </div>
          <h2 className="objective-heading">Missão</h2>
        </div>
        <p className="objective-description">
          Atuar com excelência na defesa dos interesses de nossos clientes,
          oferecendo soluções jurídicas estratégicas e seguras, sempre pautadas
          pela ética.
        </p>
        <img
          src={missionImage}
          alt="Imagem representando missão"
          className="objective-image"
        />
      </div>

      <div className="objective-box vision-box">
        <div className="objective-title">
          <div className="objective-icon-container">
            <img
              src={visionIcon}
              alt="Ícone Visão"
              className="objective-icon"
            />
          </div>
          <h2 className="objective-heading">Visão</h2>
        </div>
        <p className="objective-description">
          Ser reconhecido como um dos escritórios de advocacia de maior
          credibilidade e referência no cenário nacional, destacando-se pela
          inovação e eficiência.
        </p>
        <img
          src={visionImage}
          alt="Imagem representando visão"
          className="objective-image"
        />
      </div>

      <div className="objective-box values-box">
        <div className="objective-title">
          <div className="objective-icon-container">
            <img
              src={valuesIcon}
              alt="Ícone Valores"
              className="objective-icon"
            />
          </div>
          <h2 className="objective-heading">Valores</h2>
        </div>
        <p className="objective-description">
          Ética, responsabilidade social, dedicação, respeito às pessoas,
          compromisso com a verdade e busca constante pela excelência em cada
          serviço prestado.
        </p>
        <img
          src={valuesImage}
          alt="Imagem representando valores"
          className="objective-image"
        />
      </div>
    </div>
  );
};

export default ObjectivesComponent;
