import React from "react";
import "./ObjectivesComponent.css";
import missionIcon from "../../../../assets/Goal.svg";
import visionImage from "../../../../assets/vision-image.jpg";

const ObjectivesComponent = () => {
  return (
    <div className="objectives-container">
      <div id="objectives-box" className="mission-container">
        <div id="title-container">
          <div id="img-container">
            <img
              src={missionIcon}
              alt="Mission Icon"
              className="mission-icon"
            />
          </div>
          <h2 id="title">Missão</h2>
        </div>
        <p id="description">
          Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
          faucibus ex sapien vitae pellentesque sem.
        </p>
        <img src={visionImage} alt="Vision" className="vision-image" id="image" />
      </div>
      <div id="objectives-box" className="vision-container">
        <div id="title-container">
          <div id="img-container">
            <img
              src={missionIcon}
              alt="Mission Icon"
              className="mission-icon"
            />
          </div>
          <h2 id="title">Visão</h2>
        </div>
        <p id="description">
          Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
          faucibus ex sapien vitae pellentesque sem.
        </p>
        <img src={visionImage} alt="Vision" className="vision-image" id="image" />
      </div>
      <div id="objectives-box" className="values-container">
        <div id="title-container">
          <div id="img-container">
            <img
              src={missionIcon}
              alt="Mission Icon"
              className="mission-icon"
            />
          </div>
          <h2 id="title">Valores</h2>
        </div>
        <p id="description">
          Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
          faucibus ex sapien vitae pellentesque sem.
        </p>
        <img src={visionImage} alt="Vision" className="vision-image" id="image" />
      </div>
    </div>
  );
};

export default ObjectivesComponent;
